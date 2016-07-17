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

  RESET_NOTIFICATIONS_REQUEST,
  RESET_NOTIFICATIONS_SUCCESS,
  RESET_NOTIFICATIONS_FAILURE,

  RESET_ALL_SETTINGS_REQUEST,
  RESET_ALL_SETTINGS_SUCCESS,
  RESET_ALL_SETTINGS_FAILURE,

} from './action_types';

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
export function toggleNotificationsFailure(error) {
  return {
    type: TOGGLE_NOTIFICATIONS_FAILURE,
    error
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
export function toggleRecommendationsFailure(error) {
  return {
    type: TOGGLE_RECOMMENDATIONS_FAILURE,
    error
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
export function toggleNutritionFactsFailure(error) {
  return {
    type: TOGGLE_NUTRITION_FACTS_FAILURE,
    error
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
export function resetNotificationsFailure(error) {
  return {
    type: RESET_NOTIFICATIONS_FAILURE,
    error
  };
};



// resetAllSettings
export function resetAllSettingsRequest() {
  return {
    type: RESET_ALL_SETTINGS_REQUEST,
  };
};
export function resetAllSettingsSuccess() {
  return {
    type: RESET_ALL_SETTINGS_SUCCESS,
  };
};
export function resetAllSettingsFailure(error) {
  return {
    type: RESET_ALL_SETTINGS_FAILURE,
    error
  };
};



// async toggleNotifications
export function toggleNotifications() {
  return dispatch => {
    dispatch(toggleNotificationsRequest());
    /*return api call changing the value of notifications in the database
      .then((notification) => {
        dispatch(toggleNotificationsSuccess(notifcation));
      })
      .catch((err) => {
        dispatch(toggleNotificationsFailure(err));
        return;
      })*/
  };
};



// async toggleRecommendations
export function toggleRecommendations() {
  return dispatch => {
    dispatch(toggleRecommendationsRequest());
    /*return api call changing the value of recommendations in the database
      .then((recommendation) => {
        dispatch(toggleRecommendationsSuccess(recommendation));
      })
      .catch((err) => {
        dispatch(toggleRecommendationsFailure(err));
        return;
      })*/
  };
};



// async toggleNutritionFacts
export function toggleNutritionFacts() {
  return dispatch => {
    dispatch(toggleNutritionFactsRequest());
    /*return api call changing the value of nutrition facts in the database
      .then((nutritionFact) => {
        dispatch(toggleNutritionFactsSuccess(nutritionFact));
      })
      .catch((err) => {
        dispatch(toggleNutritionFactsFailure(err));
        return;
      })*/
  };
};



// async resetNotifications
export function resetNotifications() {
  return dispatch => {
    dispatch(resetNotificationsRequest());
    /*return api call resetting the notifications in the database
      .then((notifications) => {
        dispatch(resetNotificationsSuccess(notifications));
      })
      .catch((err) => {
        dispatch(resetNotificationsFailure(err));
        return;
      })*/
  };
};



// async resetAllSetttings
export function resetAllSettings() {
  return dispatch => {
    dispatch(resetAllSettingsRequest());
    /*return api call resetting all settings in the database
      .then(() => {
        dispatch(resetAllSettingsSuccess());
      })
      .catch((err) => {
        dispatch(resetAllSettingsFailure(err));
        return;
      })*/
  };
};
