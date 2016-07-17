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
    case SAVE_USER_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case SAVE_USER_SUCCESS:
      return {
        ...state,
        user: {
          id: action.profile.userId,
          email: action.profile.email,
          token: action.token
        },
        isFetching: false,
      };

    case RECEIVE_USER_FAILURE:
    case SAVE_USER_FAILURE:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
};
