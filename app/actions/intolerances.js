'use strict';

import {
  ADD_PREFERENCE,
  EDIT_PREFERENCES,
  SAVE_PREFERENCES,
  REMOVE_PREFERENCE,
} from '../constants/action_types';

export const addPreference = (preference) => {
  return {
    type: ADD_PREFERENCE,
    preference
  };
};

export const editPreferences = (index) => {
  return {
    type: EDIT_PREFERENCES,
    index
  };
};

export const savePreferences = (index, newPreferences) => {
  return {
    type: SAVE_PREFERENCES,
    index,
    newPreferences
  };
};

export const removePreference = (index) => {
  return {
    type: REMOVE_PREFERENCE,
    index
  };
};
