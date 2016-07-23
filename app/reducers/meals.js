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

} from '../actions/meals/action_types';
import moment from 'moment';

const initialState = {
  selectedDate: moment().format('ddd, MMM D, YYYY'),
  mealPlans: [],
  mealPlansByDate: {},
  mealsById: {},
  mealInfo: {},
  isFetching: false,
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
    case SEARCH_MEAL_REQUEST:
    case MORE_SEARCH_REQUEST:
    case SEARCH_RECIPE_REQUEST:
    case ANALYZE_RECIPE_REQUEST:
    case ADD_MEAL_REQUEST:
    case DELETE_MEAL_REQUEST:
    case FETCH_USER_MEALS_REQUEST:
      return {
        ...state,
        isFetching: true
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
        error: null,
        mealInfo: {
          ...state.mealInfo,
          glutenFree: action.info.glutenFree,
          servings: action.info.servings,
          ingredients: action.info.extendedIngredients,
          caloricBreakdown: action.info.nutrition.caloricBreakdown,
          nutrients: action.info.nutrition.nutrients
        }
      };

    case ANALYZE_RECIPE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        mealInfo: {
          ...state.mealInfo,
          equipment: action.equipment,
          steps: action.steps,
        }
      };

    case ADD_MEAL_SUCCESS:
      return {
        ...state,
        mealPlansByDate: mapValues(state.mealPlansByDate, (mealPlan) => {
          return mealPlan.date === state.selectedDate ?
            {
              ...mealPlan,
              [action.mealType]: mealPlan[action.mealType].concat(meal.mealId)
            } :
            mealPlan
        }),
        mealsById: {
          ...state.mealsById,
          [action.meal.mealId]: {
            id: action.meal.mealId,
            name: action.meal.name,
            image: action.meal.image
          }
        },
        isFetching: false,
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
        error: null
      };

    case ADD_MEAL_PLAN:
      return {
        ...state,
        mealPlans: state.mealPlans.concat(action.date),
        mealPlansByDate: {
          ...state.mealPlansByDate,
          [action.date]: {
            breakfast: [],
            lunch: [],
            dinner: [],
            snacks: []
          }
        },
        isFetching: false,
        error: null
      };

    case FETCH_USER_MEALS_SUCCESS:
      return {

      };

    case INCREMENT_DATE:
    let incrementedDate = moment(state.selectedDate, 'ddd, MMM D, YYYY', true).clone().add(1, 'day');
      return {
        ...state,
        selectedDate: incrementedDate.format('ddd, MMM D, YYYY')
      };

    case DECREMENT_DATE:
    let decrementedDate = moment(state.selectedDate, 'ddd, MMM D, YYYY', true).clone().subtract(1, 'day');
      return {
        ...state,
        selectedDate: decrementedDate.format('ddd, MMM D, YYYY')
      };

    case SEARCH_MEAL_FAILURE:
    case MORE_SEARCH_FAILURE:
    case SEARCH_RECIPE_FAILURE:
    case ANALYZE_RECIPE_FAILURE:
    case ADD_MEAL_FAILURE:
    case DELETE_MEAL_FAILURE:
    case FETCH_USER_MEALS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };

    default:
      return state;
  };
};
