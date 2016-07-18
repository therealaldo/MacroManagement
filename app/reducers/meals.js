'use strict';

import omit from 'lodash/object/omit';
import mapValues from 'lodash/object/mapValues';
import {

  SEARCH_MEAL_REQUEST,
  SEARCH_MEAL_SUCCESS,
  SEARCH_MEAL_FAILURE,

  MORE_SEARCH_REQUEST,
  MORE_SEARCH_SUCCESS,
  MORE_SEARCH_FAILURE,

  SEARCH_INFO_REQUEST,
  SEARCH_INFO_SUCCESS,
  SEARCH_INFO_FAILURE,

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

const initialState = {
  selectedDate: '',
  mealPlans: [],
  mealPlansByDate: {},
  mealsById: {},
  mealInfo: {},
  isFetching: false,
  error: null,
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
    case SEARCH_INFO_REQUEST:
    case ADD_MEAL_REQUEST:
    case DELETE_MEAL_REQUEST:
    case FETCH_USER_MEALS_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case SEARCH_MEAL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        mealResults: action.mealResults,
        pagination: 1,
        totalResults: state.mealResults.length,
        processingTimeMs: action.processingTimeMs
      };

    case MORE_SEARCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        mealResults: state.mealResults.concat(action.moreResults),
        pagination: state.pagination++,
        totalResults: state.mealResults.length,
        processingTimeMs: action.processingTimeMs
      };

    case SEARCH_INFO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        mealInfo: {
          glutenFree: action.info.glutenFree,
          servings: action.info.servings,
          ingredients: action.info.extendedIngredients,
          caloricBreakdown: action.info.caloricBreakdown,
        }
      };

    case ADD_MEAL_SUCCESS:
      return {
        ...state,
        mealPlansByDate: mapValues(state.mealPlansByDate, (mealPlan) => {
          return mealPlan.date === state.selectedDate ?
            {
              ...mealPlan,
              [action.mealType]: mealPlan[action.mealType].concat(meal.id)
            } :
            mealPlan
        }),
        mealsById: {
          ...state.mealsById,
          [action.meal.id]: {
            id: action.meal.id,
            name: action.meal.title,
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
      return {

      };

    case DECREMENT_DATE:
      return {

      };

    case SEARCH_MEAL_FAILURE:
    case MORE_SEARCH_FAILURE:
    case SEARCH_INFO_FAILURE:
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
