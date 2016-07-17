'use strict';

import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
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
    /*case INCREMENT_DAY:
      return {

      };

    case DECREMENT_DAY:
      return {

      };

    case SELECT_DAY:
      return {

      };

    case SEARCH_DAY:
      return {

      };

    case FETCH_MEAL_REQUEST:
      return {

      };

    case FETCH_MEAL_FAILED:
      return {

      };

    case FETCH_MEAL_RESULT:
      return {

      };

    case SEARCH_MEAL_INFO:
      return {

      };*/

    case ADD_MEAL:
      return {
        ...state,
        mealPlansByDate: {
          ...state.mealPlansByDate,
          [state.selectedDate]: {
            ...state.mealPlansByDate[state.selectedDate],
            [action.mealType]: state.mealPlansByDate[state.selectedDate][action.mealType].concat(action.meal.id)
          }
        },
        mealsById: {
          ...state.mealsById,
          [action.meal.id]: {
            id: action.meal.id,
            name: action.meal.title,
            image: action.meal.image
          }
        }
      };

    case DELETE_MEAL:
      return {
        ...state,
        entities: {
          ...state.entities,
          plans: {
            [selectedDate]: {
              ...state.entities.plans[action.selectedDate],
              [action.mealType]: state.entities.plans[action.selectedDate][action.mealType].filter(id => id !== action.mealId)
            }
          },
        }
      };

    default:
      return state;
  };
};
