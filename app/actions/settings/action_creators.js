'use strict';

import {

  TOGGLE_NOTIFICATIONS,

  TOGGLE_RECOMMENDATIONS,

  TOGGLE_NUTRITION_FACTS,

  RESET_NOTIFICATIONS,

  RESET_ALL_SETTINGS,

} from './action_types';

// toggleNotifications
export function toggleNotifications() {
  return {
    type: TOGGLE_NOTIFICATIONS,
  };
};



// toggleRecommendations
export function toggleRecommendations() {
  return {
    type: TOGGLE_RECOMMENDATIONS,
  };
};



// toggleNutritionFacts
export function toggleNutritionFacts() {
  return {
    type: TOGGLE_NUTRITION_FACTS,
  };
};



// resetNotifications
export function resetNotifications() {
  return {
    type: RESET_NOTIFICATIONS,
  };
};



// resetAllSettings
export function resetAllSettings() {
  return {
    type: RESET_ALL_SETTINGS,
  };
};
