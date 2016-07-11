'use strict';

import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';

import {
  SAVE_USER_PROFILE,
  EDIT_USER_PROFILE,
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

};
