'use strict';

import {

  RECEIVE_USER_FAILURE,

  SAVE_USER_REQUEST,
  SAVE_USER_SUCCESS,
  SAVE_USER_FAILURE,

} from '../actions/users/action_types';

const initialState = {
  userId: '',
  email: '',
  token: '',
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
        isFetching: true,
        error: null
      };

    case SAVE_USER_SUCCESS:
      return {
        userId: action.userData[0].userId,
        email: action.userData[0].email,
        token: action.userData[0].token,
        isFetching: false,
        error: null
      };

    case RECEIVE_USER_FAILURE:
    case SAVE_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };

    default:
      return state;
  }
};
