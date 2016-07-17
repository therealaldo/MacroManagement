'use strict';

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

} from '../constants/action_types';

// toggleNotifications
export function toggleNotificationsRequest() {
  return {
    type: TOGGLE_NOTIFICATIONS_REQUEST,
  };
};
export function toggleNotificationsSuccess(notification) {
  return {
    type: TOGGLE_NOTIFICATIONS_SUCCESS,
    notification
  };
};
export function toggleNotificationsFailure(err) {
  return {
    type: TOGGLE_NOTIFICATIONS_FAILURE,
    err
  };
};



// toggleRecommendations
export function toggleRecommendationsRequest() {
  return {
    type: TOGGLE_RECOMMENDATIONS_REQUEST,
  };
};
export function toggleRecommendationsSuccess(recommendation) {
  return {
    type: TOGGLE_RECOMMENDATIONS_SUCCESS,
    recommendation
  };
};
export function toggleRecommendationsFailure(err) {
  return {
    type: TOGGLE_RECOMMENDATIONS_FAILURE,
    err
  };
};



// toggleNutritionFacts
export function toggleNutritionFactsRequest() {
  return {
    type: TOGGLE_NUTRITION_FACTS_REQUEST,
  };
};
export function toggleNutritionFactsSuccess(nutritionFact) {
  return {
    type: TOGGLE_NUTRITION_FACTS_SUCCESS,
    nutritionFact
  };
};
export function toggleNutritionFactsFailure(err) {
  return {
    type: TOGGLE_NUTRITION_FACTS_FAILURE,
    err
  };
};



// resetPreferences
export function resetPreferencesRequest() {
  return {
    type: RESET_PREFERENCES_REQUEST,
  };
};
export function resetPreferencesSuccess(preferences) {
  return {
    type: RESET_PREFERENCES_SUCCESS,
    preferences
  };
};
export function resetPreferencesFailure(err) {
  return {
    type: RESET_PREFERENCES_FAILURE,
    err
  };
};



// resetNotifications
export function resetNotificationsRequest() {
  return {
    type: RESET_NOTIFICATIONS_REQUEST,
  };
};
export function resetNotificationsSuccess(notifications) {
  return {
    type: RESET_NOTIFICATIONS_SUCCESS,
    notifications
  };
};
export function resetNotificationsFailure(err) {
  return {
    type: RESET_NOTIFICATIONS_FAILURE,
    err
  };
};


// resetAllSettings
export function resetAllSettingsRequest() {
  return {
    type: RESET_ALL_SETTINGS_REQUEST,
  };
};
export function resetAllSettingsSuccess(settings) {
  return {
    type: RESET_ALL_SETTINGS_SUCCESS,
    settings
  };
};
export function resetAllSettingsFailure(err) {
  return {
    type: RESET_ALL_SETTINGS_FAILURE,
    err
  };
};
