'use strict';

import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';
import {
  TOGGLE_NOTIFICATIONS,
  TOGGLE_RECOMMENDATIONS,
  TOGGLE_NUTRITION_FACTS,
  RESET_ALL_SETTINGS
} from '../constants/action_types';

const initialState = {
  settings: {
    nutritionFacts: false,
    notifications: false,
    recommendations: false,
  }
};

export default reducer = (
  state = initialState,
  action = {}
) => {
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
  }
};
