'use strict';

import {

  RECEIVE_USER_FAILURE,

  SAVE_USER_REQUEST,
  SAVE_USER_SUCCESS,
  SAVE_USER_FAILURE,

} from './action_types';

// receiveUser
export function receiveUserFailure(error) => {
  return {
    type: RECEIVE_USER_FAILURE,
    error
  };
};



// saveUser
export function saveUserrorequest() => {
  return {
    type: SAVE_USER_REQUEST,
  };
};
export function saveUserSuccess(profile, token) => {
  return {
    type: SAVE_USER_SUCCESS,
    profile,
    token
  };
};
export function saveUserFailure(error) => {
  return {
    type: SAVE_USER_FAILURE,
    error
  };
};
