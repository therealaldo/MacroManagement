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
  DELETE_MEAL,
  SAVE_MEAL
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

};
