'use strict';

import assign from 'lodash/object/assign';
import {

  SET_ANALYSIS_FILTER,

  SET_IMAGE_URI,

  FETCH_USER_MEAL_DATA_REQUEST,
  FETCH_USER_MEAL_DATA_SUCCESS,
  FETCH_USER_MEAL_DATA_FAILURE,

} from '../actions/trends/action_types';
import { AnalysisFilters } from '../actions/trends/action_types';

const initialState = {
  analysisFilter: AnalysisFilters.FILTER_DAY,
  selectedIndex: 0,
  imageUri: null,
  isFetching: false,
  error: null,
  userMealData: [],
};

export default function reducer(
  state = initialState,
  action = {}
) {
  switch (action.type) {
    case SET_ANALYSIS_FILTER:
      return {
        ...state,
        selectedIndex: action.selectedIndex
      };

    case SET_IMAGE_URI:
      return {
        ...state,
        imageUri: action.uri
      };

    case FETCH_USER_MEAL_DATA_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case FETCH_USER_MEAL_DATA_SUCCESS:
      return {
        ...state,

      };

    case FETCH_USER_MEAL_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };

    default:
      return state;
  }
};
