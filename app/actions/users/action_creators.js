'use strict';

import { Actions } from 'react-native-router-flux';
import Auth0Lock from 'react-native-lock';
import Config from 'react-native-config';
// import the api calls to the database and the food api
import {

  RECEIVE_USER_FAILURE,

  SAVE_USER_REQUEST,
  SAVE_USER_SUCCESS,
  SAVE_USER_FAILURE,

} from './action_types';

const moment = require('moment');
const credentials = {
  clientId: Config.CLIENT_ID,
  domain: Config.DOMAIN
};
const lock = new Auth0Lock(credentials, {
  integrations: {
    facebook: {}
  }
});

// receiveUser
export function receiveUserFailure(error) => {
  return {
    type: RECEIVE_USER_FAILURE,
    error
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
export function saveUserFailure(error) => {
  return {
    type: SAVE_USER_FAILURE,
    error
  };
};



// async login
export function login() {
  return dispatch => {
    lock.show({
      closable: true,
    }, (err, profile, token) => {
      if (err) {
        console.log(err);
        dispatch(receiveUserFailure(err));
        return;
      }
      dispatch(saveUserRequest());
      /*return api call sending through the profile and token to the database
        .then((profile, token) => {
          dispatch(saveUserSuccess(profile, token));
          Actions.tabbar();
        })
        .catch((err) => {
          dispatch(saveUserFailure(err));
          return;
        })*/
    });
  };
}
