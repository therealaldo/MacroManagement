'use strict';

import {

  RECEIVE_USER_FAILURE,

  SAVE_USER_REQUEST,
  SAVE_USER_SUCCESS,
  SAVE_USER_FAILURE,

} from '../actions/users/action_types';

const initialState = {
  user: {},
  isFetching: false,
  error: null,
};

export default function reducer(
  state = initialState,
  action = {}
) {
  switch (action.type) {
    case RECEIVE_USER_PROFILE:
      return {
        user: {
          ...state.user,
          [action.profile.userId]: {
            id: action.profile.userId,
            email: action.profile.email,
            token: action.profile.token
          }
        }
      };

    default:
      return state;
  }
};
