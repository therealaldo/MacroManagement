'use strict';

import {

  RECEIVE_USER_FAILURE,

  SAVE_USER_REQUEST,
  SAVE_USER_SUCCESS,
  SAVE_USER_FAILURE,

} from '../constants/action_types';

// receiveUser
export function receiveUserFailure(err) => {
  return {
    type: RECEIVE_USER_FAILURE,
    err
  };
};



// saveUser
export function saveUserRequest() => {
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
export function saveUserFailure(err) => {
  return {
    type: SAVE_USER_FAILURE,
    err
  };
};
