'use strict';

import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';

const initialState = {
  groceryLists: [],
  entities: {
    lists: {},
    ingredients: {},
  }
};

export default reducer = (
  state = initialState,
  action = {}
) => {
  switch (action.type) {
    case 'NEW_EMPTY_LIST':
      return {

      };
    default:
      return state;
  }
};
