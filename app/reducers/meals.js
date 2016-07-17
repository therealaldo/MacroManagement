'use strict';

import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';
import {
  INCREMENT_DAY,
  DECREMENT_DAY,
  SELECT_DAY,
  SEARCH_DAY,
  FETCH_MEAL_REQUEST,
  FETCH_MEAL_FAILED,
  FETCH_MEAL_RESULT,
  SEARCH_MEAL_INFO,
  ADD_MEAL,
  DELETE_MEAL,
} from '../constants/action_types';

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
