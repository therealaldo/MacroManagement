'use strict';

import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';
import {
  SAVE_USER_PROFILE,
  RECEIVE_USER_PROFILE
} from '../constants/action_types';

const initialState = {
  entities: {
    users: {}
  },
};

export default reducer = (
  state = initialState,
  action = {}
) => {
  switch (action.type) {
    case SAVE_USER_PROFILE:
      return {
        entities: {
          users: {
            ...state.entities.users,
            [action.profile.userId]: {
              ...state.entities.users[action.profile.userId],
              id: action.profile.userId,
              email: action.profile.email,
            }
          }
        }
      };
    case RECEIVE_USER_PROFILE:
      return {
        entities: {
          users: {
            ...state.entities.users,
            [action.profile.userId]: {
              id: action.profile.userId,
              email: action.profile.email,
              token: action.profile.token
            }
          }
        }
      };
  }
};
