'use strict';

import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';
import {

  SET_INTOLERANCE_KEYWORD,

  ADD_INTOLERANCE_REQUEST,
  ADD_INTOLERANCE_SUCCESS,
  ADD_INTOLERANCE_FAILURE,

  REMOVE_INTOLERANCE_REQUEST,
  REMOVE_INTOLERANCE_SUCCESS,
  REMOVE_INTOLERANCE_FAILURE,

  RESET_INTOLERANCES_REQUEST,
  RESET_INTOLERANCES_SUCCESS,
  RESET_INTOLERANCES_FAILURE,

} from '../actions/intolerances/action_types';

const initialState = {
  intolerances: [],
  intolerancesById: {},
  intoleranceKeyword: '',
  isFetching: false,
  error: null,
};

export default function reducer(
  state = initialState,
  action = {}
) {
  switch (action.type) {
    case ADD_INTOLERANCE_REQUEST:
    case REMOVE_INTOLERANCE_REQUEST:
    case RESET_INTOLERANCES_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case SET_INTOLERANCE_KEYWORD:
      return {
        ...state,
        intoleranceKeyword: action.keyword
      };

    case ADD_INTOLERANCE_SUCCESS:
      return {
        intolerances: state.intolerances.concat(action.intoleranceJson.createdIntolerance.intoleranceId),
        intolerancesById: {
          ...state.intolerancesById,
          [action.intoleranceJson.createdIntolerance.intoleranceId]: {
            id: action.intoleranceJson.createdIntolerance.intoleranceId,
            name: action.intoleranceJson.createdIntolerance.name
          }
        },
        isFetching: false,
        error: null
      };

    case REMOVE_INTOLERANCE_SUCCESS:
      return {
        intolerances: state.intolerances.filter(id => id !== action.intoleranceId),
        intolerancesById: omit(state.intolerancesById, action.intolerancesById),
        isFetching: false,
        error: null
      };

    case ADD_INTOLERANCE_FAILURE:
    case REMOVE_INTOLERANCE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };

    case RESET_INTOLERANCES_SUCCESS:
    default:
      return state;
  };
};
