'use strict';

import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';
import {

  TOGGLE_NOTIFICATIONS,

  TOGGLE_RECOMMENDATIONS,

  TOGGLE_NUTRITION_FACTS,

  RESET_NOTIFICATIONS,

  RESET_ALL_SETTINGS

} from '../actions/settings/action_types';

const initialState = {
  nutritionFacts: false,
  notifications: false,
  recommendations: false,
};

export default function reducer(
  state = initialState,
  action = {}
) {
  switch (action.type) {
    case TOGGLE_NOTIFICATIONS:
      return {
        ...state,
        notifications: !state.notifications,
      };

    case TOGGLE_RECOMMENDATIONS:
      return {
        ...state,
        recommendations: !state.recommendations,
      };

    case TOGGLE_NUTRITION_FACTS:
      return {
        ...state,
        nutritionFacts: !state.nutritionFacts,
      };

    case RESET_NOTIFICATIONS:
      return {
        ...state,
        notifications: false,
        recommendations: false,
      };

    case RESET_ALL_SETTINGS:
    default:
      return state;
  }
};
