'use strict';

import { Actions } from 'react-native-router-flux';
import Auth0Lock from 'react-native-lock';
import Config from 'react-native-config';
import { InteractionManager } from 'react-native';
import {

  RECEIVE_USER_FAILURE,

  SAVE_USER_REQUEST,
  SAVE_USER_SUCCESS,
  SAVE_USER_FAILURE,

  LOG_OUT

} from './action_types';

const credentials = {
  clientId: Config.CLIENT_ID,
  domain: Config.DOMAIN
};
const lock = new Auth0Lock(credentials, {
  integrations: {
    facebook: {}
  }
});

export function receiveUserFailure(error) {
  return {
    type: RECEIVE_USER_FAILURE,
    error
  };
};



export function saveUserRequest() {
  return {
    type: SAVE_USER_REQUEST,
  };
};
export function saveUserSuccess(userData) {
  return {
    type: SAVE_USER_SUCCESS,
    userData
  };
};
export function saveUserFailure(error) {
  return {
    type: SAVE_USER_FAILURE,
    error
  };
};
export function login() {
  return dispatch => {
    lock.show({
      closable: true,
    }, (err, profile, token) => {
      if (err) {
        dispatch(receiveUserFailure(err));
        return;
      }

      dispatch(saveUserRequest());
      return fetch('http://162.243.164.11/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: profile.identities[0].userId,
          email: profile.email,
          token: token.accessToken
        })
      })
      .then((response) => response.json())
      .then((json) => {
        InteractionManager.runAfterInteractions(() => {
          dispatch(saveUserSuccess(json));
          Actions.tabbar();
        })
      })
      .catch((err) => {
        dispatch(saveUserFailure(err));
        return;
      });
    });
  };
};



export function logout() {
  return {
    type: LOG_OUT
  };
};
