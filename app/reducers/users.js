'use strict';

import {
  RECEIVE_USER_PROFILE
} from '../constants/action_types';

const initialState = {
  user: {}
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
