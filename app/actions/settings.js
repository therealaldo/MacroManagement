'use strict';

import {
  TOGGLE_NOTIFICATIONS,
  TOGGLE_RECOMMENDATIONS,
  TOGGLE_NUTRITION_FACTS,
  RESET_PREFERENCES,
  RESET_NOTIFICATIONS,
  RESET_ALL_SETTINGS
} from '../constants/action_types';

export const toggleNotifications = () => {
  return {
    type: TOGGLE_NOTIFICATIONS,
  };
};

export const toggleRecommendations = () => {
  return {
    type: TOGGLE_RECOMMENDATIONS,
  };
};

export const toggleNutritionFacts = () => {
  return {
    type: TOGGLE_NUTRITION_FACTS,
  };
};

export const resetPreferences = () => {
  return {
    type: RESET_PREFERENCES,
  };
};

export const resetNotifications = () => {
  return {
    type: RESET_NOTIFICATIONS,
  };
};

export const resetAllSettings = () => {
  return {
    type: RESET_ALL_SETTINGS,
  };
};
