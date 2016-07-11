'use strict';

import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';
import {
  SAVE_PREFERENCES,
  EDIT_PREFERENCES,
  REMOVE_PREFERENCE,
  ADD_PREFERENCE,
} from '../constants/action_types';

const initialState = {
  entities: {
    intolerances: {}
  },
  intoleranceList: [],
};

export default reducer = (
  state = initialState,
  action = {}
) => {
  switch (action.type) {
    case SAVE_PREFERENCES:
      return {

      };
    case EDIT_PREFERENCES:
      return {

      };
    case REMOVE_PREFERENCE:
      return {

      };
    case ADD_PREFERENCE:
      return {

      };
  };
};
