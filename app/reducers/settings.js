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

  RESET_PREFERENCES_REQUEST,
  RESET_PREFERENCES_SUCCESS,
  RESET_PREFERENCES_FAILURE,

  RESET_NOTIFICATIONS_REQUEST,
  RESET_NOTIFICATIONS_SUCCESS,
  RESET_NOTIFICATIONS_FAILURE,

  RESET_ALL_SETTINGS_REQUEST,
  RESET_ALL_SETTINGS_SUCCESS,
  RESET_ALL_SETTINGS_FAILURE,

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
    case TOGGLE_NOTIFICATIONS:
      return {
        settings: {
          ...state.settings,
          notifications: !state.settings.notifications
        }
      };
    case TOGGLE_RECOMMENDATIONS:
      return {
        settings: {
          ...state.settings,
          recommendations: !state.settings.recommendations
        }
      };
    case TOGGLE_NUTRITION_FACTS:
      return {
        settings: {
          ...state.settings,
          nutritionFacts: !state.settings.nutritionFacts
        }
      };
    case RESET_ALL_SETTINGS:
      return {
        settings: {
          nutritionFacts: false,
          notifications: false,
          recommendations: false,
        }
      };

    default:
      return state;
  }
};
