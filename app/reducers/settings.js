'use strict';

import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';
import {
  RESET_NOTIFICATIONS,
  RESET_PREFERENCES,
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
