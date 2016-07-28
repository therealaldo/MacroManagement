'use strict';

import omit from 'lodash/object/omit';
import mapValues from 'lodash/object/mapValues';
import {

  SET_SEARCH_KEYWORD,

  SEARCH_MEAL_REQUEST,
  SEARCH_MEAL_SUCCESS,
  SEARCH_MEAL_FAILURE,

  MORE_SEARCH_REQUEST,
  MORE_SEARCH_SUCCESS,
  MORE_SEARCH_FAILURE,

  SEARCH_RECIPE_REQUEST,
  SEARCH_RECIPE_SUCCESS,
  SEARCH_RECIPE_FAILURE,

  ANALYZE_RECIPE_REQUEST,
  ANALYZE_RECIPE_SUCCESS,
  ANALYZE_RECIPE_FAILURE,

  ADD_MEAL_REQUEST,
  ADD_MEAL_SUCCESS,
  ADD_MEAL_FAILURE,

  DELETE_MEAL_REQUEST,
  DELETE_MEAL_SUCCESS,
  DELETE_MEAL_FAILURE,

  ADD_MEAL_PLAN,

  FETCH_USER_MEALS_REQUEST,
  FETCH_USER_MEALS_SUCCESS,
  FETCH_USER_MEALS_FAILURE,

  INCREMENT_DATE,
  DECREMENT_DATE,

  SEARCH_BREAKFAST,
  SEARCH_LUNCH,
  SEARCH_DINNER,

  CHANGE_INFO_VIEW,

  SEARCH_SUMMARY_REQUEST,
  SEARCH_SUMMARY_SUCCESS,
  SEARCH_SUMMARY_FAILURE,

} from '../actions/meals/action_types';
import moment from 'moment';

let currentDate = moment().format('ddd, MMM D, YYYY');
const initialState = {
  selectedDate: currentDate,
  selectedMealType: '',
  mealPlans: [currentDate],
  mealPlansByDate: {
    [currentDate]: {
      date: currentDate,
      breakfast: [],
      lunch: [],
      dinner: [],
      totalCalories: 0
    }
  },
  mealsById: {},
  mealInfo: {
    isViewing: 'summary',
  },
  isFetching: false,
  isSearching: false,
  error: null,
  searchKeyword: '',
  mealResults: [],
  pagination: 0,
  totalResults: 0,
  processingTimeMs: 0,
};

export default function reducer(
  state = initialState,
  action = {}
) {
  switch (action.type) {
    case MORE_SEARCH_REQUEST:
    case SEARCH_RECIPE_REQUEST:
    case ANALYZE_RECIPE_REQUEST:
    case SEARCH_SUMMARY_REQUEST:
    case ADD_MEAL_REQUEST:
    case DELETE_MEAL_REQUEST:
    case FETCH_USER_MEALS_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case SEARCH_MEAL_REQUEST:
      return {
        ...state,
        isFetching: false,
        isSearching: true,
      };

    case SET_SEARCH_KEYWORD:
      return {
        ...state,
        searchKeyword: action.keyword
      };

    case SEARCH_MEAL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isSearching: false,
        error: null,
        mealResults: action.mealResults.results,
        pagination: 1,
        totalResults: action.mealResults.totalResults,
        processingTimeMs: action.mealResults.processingTimeMs
      };

    case MORE_SEARCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isSearching: false,
        error: null,
        mealResults: action.mealResults.concat(action.moreResults),
        pagination: action.pagination++,
        totalResults: action.mealResults.length,
        processingTimeMs: action.processingTimeMs
      };

    case SEARCH_RECIPE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isSearching: false,
        error: null,
        mealInfo: {
          ...state.mealInfo,
          glutenFree: action.info.glutenFree,
          dairyFree: action.info.dairyFree,
          servings: action.info.servings,
          ingredients: action.info.extendedIngredients,
          caloricBreakdown: action.info.nutrition.caloricBreakdown,
          nutrients: action.info.nutrition.nutrients,
          image: action.info.image,
          mealId: action.info.id,
          name: action.info.title,
          readyIn: action.readyIn
        }
      };

    case ANALYZE_RECIPE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isSearching: false,
        error: null,
        mealInfo: {
          ...state.mealInfo,
          equipment: action.equipment,
          steps: action.steps,
        }
      };

    case SEARCH_SUMMARY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isSearching: false,
        error: null,
        mealInfo: {
          ...state.mealInfo,
          summary: action.summary.summary
        }
      };

    case CHANGE_INFO_VIEW:
      return {
        ...state,
        mealInfo: {
          ...state.mealInfo,
          isViewing: action.selectedView
        }
      };

    case ADD_MEAL_SUCCESS:
      return {
        ...state,
        mealPlansByDate: mapValues(state.mealPlansByDate, (mealPlan) => {
          return mealPlan.date === action.mealJson.createdMeal.date ?
            {
              ...mealPlan,
              [action.mealJson.createdMeal.mealType]: mealPlan[action.mealJson.createdMeal.mealType].concat(action.mealJson.createdMeal.mealId),
              totalCalories: mealPlan.totalCalories + action.mealJson.createdMeal.calories
            } :
            mealPlan
        }),
        mealsById: {
          ...state.mealsById,
          [action.mealJson.createdMeal.mealId]: {
            mealId: action.mealJson.createdMeal.mealId,
            name: action.mealJson.createdMeal.name,
            image: action.mealJson.createdMeal.image,
            calories: action.mealJson.createdMeal.calories
          }
        },
        selectedMealType: '',
        isFetching: false,
        isSearching: false,
        error: null
      };

    case DELETE_MEAL_SUCCESS:
      return {
        ...state,
        mealPlansByDate: mapValues(state.mealPlansByDate, (mealPlan) => {
          return mealPlan.date === state.selectedDate ?
            {
              ...mealPlan,
              [action.mealType]: mealPlan[action.mealType].filter(id => id !== action.mealId)
            } :
            mealPlan
        }),
        mealsById: omit(state.mealsById, action.mealId),
        isFetching: false,
        isSearching: false,
        error: null
      };

    case ADD_MEAL_PLAN:
      let alreadyExists = state.mealPlans.indexOf(action.date) > -1;
      let mealPlans = state.mealPlans.slice();
      let mealPlansByDate = { ...state.mealPlansByDate };
      if(!alreadyExists) {
        mealPlans = state.mealPlans.concat(action.date);
        mealPlansByDate = {
          ...state.mealPlansByDate,
          [action.date]: {
            breakfast: [],
            lunch: [],
            dinner: []
          }
        }
      };
      return {
        ...state,
        mealPlans,
        mealPlansByDate,
        isFetching: false,
        isSearching: false,
        error: null
      };

    case FETCH_USER_MEALS_SUCCESS:
      return {
        ...state,
        mealPlans: action.userMeals.mealPlans,
        mealPlansByDate: action.userMeals.mealPlansByDate,
        mealsById: action.userMeals.mealsById
      };

    case INCREMENT_DATE:
      return {
        ...state,
        selectedDate: action.incrementedDate.format('ddd, MMM D, YYYY')
      };

    case DECREMENT_DATE:
      return {
        ...state,
        selectedDate: action.decrementedDate.format('ddd, MMM D, YYYY')
      };

    case SEARCH_BREAKFAST:
      return {
        ...state,
        selectedMealType: 'breakfast'
      };

    case SEARCH_LUNCH:
      return {
        ...state,
        selectedMealType: 'lunch'
      };

    case SEARCH_DINNER:
      return {
        ...state,
        selectedMealType: 'dinner'
      };

    case SEARCH_MEAL_FAILURE:
    case MORE_SEARCH_FAILURE:
    case SEARCH_RECIPE_FAILURE:
    case ANALYZE_RECIPE_FAILURE:
    case SEARCH_SUMMARY_FAILURE:
    case ADD_MEAL_FAILURE:
    case DELETE_MEAL_FAILURE:
    case FETCH_USER_MEALS_FAILURE:
      return {
        ...state,
        isFetching: false,
        isSearching: false,
        error: action.error
      };

    default:
      return state;
  };
};
