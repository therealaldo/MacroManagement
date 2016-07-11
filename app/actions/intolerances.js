'use strict';

import {
  ADD_PREFERENCE,
  SAVE_PREFERENCES,
  REMOVE_PREFERENCE,
} from '../constants/action_types';

export const addPreference = (name) => {
  return {
    type: ADD_PREFERENCE,
    name
  };
};

export const savePreferences = (preferenceId, newPreferences) => {
  return {
    type: SAVE_PREFERENCES,
    preferenceId,
    newPreferences
  };
};

export const removePreference = (preferenceId) => {
  return {
    type: REMOVE_PREFERENCE,
    preferenceId
  };
};
