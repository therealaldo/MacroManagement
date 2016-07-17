'use strict';

import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';
import {

  TOGGLE_NOTIFICATIONS_REQUEST,
  TOGGLE_NOTIFICATIONS_SUCCESS,
  TOGGLE_NOTIFICATIONS_FAILURE,

  TOGGLE_RECOMMENDATIONS_REQUEST,
  TOGGLE_RECOMMENDATIONS_SUCCESS,
  TOGGLE_RECOMMENDATIONS_FAILURE,

  TOGGLE_NUTRITION_FACTS_REQUEST,
  TOGGLE_NUTRITION_FACTS_SUCCESS,
  TOGGLE_NUTRITION_FACTS_FAILURE,

  RESET_NOTIFICATIONS_REQUEST,
  RESET_NOTIFICATIONS_SUCCESS,
  RESET_NOTIFICATIONS_FAILURE,

} from '../actions/settings/action_types';

const initialState = {
  settings: {
    nutritionFacts: false,
    notifications: false,
    recommendations: false,
    isFetching: false,
    error: null,
  }
};

export default function reducer(
  state = initialState,
  action = {}
) {
  switch (action.type) {
    case TOGGLE_NOTIFICATIONS_REQUEST:
    case TOGGLE_RECOMMENDATIONS_REQUEST:
    case TOGGLE_NUTRITION_FACTS_REQUEST:
    case RESET_NOTIFICATIONS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };

    case TOGGLE_NOTIFICATIONS_SUCCESS:
      return {
        ....state,
        notifications: !state.notifications,
        isFetching: false,
        error: null
      };

    case TOGGLE_RECOMMENDATIONS_SUCCESS:
      return {
        ....state,
        recommendations: !state.recommendations,
        isFetching: false,
        error: null
      };

    case TOGGLE_NUTRITION_FACTS_SUCCESS:
      return {
        ....state,
        nutritionFacts: !state.nutritionFacts,
        isFetching: false,
        error: null
      };

    case RESET_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: false,
        recommendations: false,
        isFetching: false,
        error: null
      };

    case TOGGLE_NOTIFICATIONS_FAILURE:
    case TOGGLE_RECOMMENDATIONS_FAILURE:
    case TOGGLE_NUTRITION_FACTS_FAILURE:
    case RESET_NOTIFICATIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };

    default:
      return state;
  }
};
