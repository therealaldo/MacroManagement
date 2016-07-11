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
  EDIT_MEAL,
  SAVE_MEAL,
  DELETE_MEAL,
} from '../constants/action_types';

const initialState = {
  selectedDate: '',
  mealPlans: [],
  entities: {
    plans: {},
    meals: {},
  },
  mealResults: [],
  pagination: 0,
  totalResults: 0,
  processingTimeMs: 0,
};

export default reducer = (
  state = initialState,
  action = {}
) => {
  switch (action.type) {
    case INCREMENT_DAY:
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

      };
    case ADD_MEAL:
      return {

      };
    case EDIT_MEAL:
      return {

      };
    case SAVE_MEAL:
      return {

      };
    case DELETE_MEAL:
      return {

      };
  };
};
