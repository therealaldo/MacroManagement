'use strict';

import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';
import {

  ADD_INTOLERANCE_REQUEST,
  ADD_INTOLERANCE_SUCCESS,
  ADD_INTOLERANCE_FAILURE,

  REMOVE_INTOLERANCE_REQUEST,
  REMOVE_INTOLERANCE_SUCCESS,
  REMOVE_INTOLERANCE_FAILURE,

} from '../actions/intolerances/action_types';

const initialState = {
  intolerances: [],
  intolerancesById: {}
};

export default function reducer(
  state = initialState,
  action = {}
) {
  switch (action.type) {
    case ADD_INTOLERANCE:
      return {
        intolerances: state.intolerances.concat(action.intoleranceId),
        intolerancesById: {
          ...state,
          [intoleranceId]: {
            id: action.intoleranceId,
            name: action.name
          }
        }
      };

    case REMOVE_INTOLERANCE:
      return {
        intolerances: state.intolerances.filter(id => id !== action.intoleranceId),
        intolerancesById: omit(state.intolerancesById, action.intoleranceId)
      };

    default:
      return state;
  };
};
