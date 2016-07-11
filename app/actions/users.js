'use strict';

import {
  SAVE_USER_PROFILE,
  EDIT_USER_PROFILE,
  RECEIVE_USER_PROFILE
} from '../constants/action_types';

export const saveUserProfile = (profile) => {
  return {
    type: SAVE_USER_PROFILE,
    profile
  };
};

export const editUserProfile = (newProfile) => {
  return {
    type: EDIT_USER_PROFILE,
    newProfile
  };
};

export const receiveUserProfile = (profile) => {
  return {
    type: RECEIVE_USER_PROFILE,
    profile
  };
};
