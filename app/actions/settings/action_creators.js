'use strict';

import {

  TOGGLE_NOTIFICATIONS,

  TOGGLE_RECOMMENDATIONS,

  TOGGLE_NUTRITION_FACTS,

  RESET_NOTIFICATIONS,

  RESET_ALL_SETTINGS,

} from './action_types';

export function toggleNotifications() {
  return {
    type: TOGGLE_NOTIFICATIONS,
  };
};



export function toggleRecommendations() {
  return {
    type: TOGGLE_RECOMMENDATIONS,
  };
};



export function toggleNutritionFacts() {
  return {
    type: TOGGLE_NUTRITION_FACTS,
  };
};



export function resetNotifications() {
  return {
    type: RESET_NOTIFICATIONS,
  };
};



export function resetAllSettings() {
  return {
    type: RESET_ALL_SETTINGS,
  };
};
