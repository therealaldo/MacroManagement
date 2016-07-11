'use strict';

import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';
import {
  TOGGLE_NOTIFICATIONS,
  TOGGLE_RECOMMENDATIONS,
  TOGGLE_NUTRITION_FACTS,
  RESET_PREFERENCES,
  RESET_NOTIFICATIONS,
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
        
      };
    case TOGGLE_RECOMMENDATIONS:
      return {

      };
    case TOGGLE_NUTRITION_FACTS:
      return {

      };
    case RESET_NOTIFICATIONS:
      return {

      };
    case RESET_PREFERENCES:
      return {

      };
    case RESET_ALL_SETTINGS:
      return {

      };
  }
};
