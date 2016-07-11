'use strict';

import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';
import {
  ADD_GROCERY_ITEM,
  EDIT_GROCERY_ITEM,
  REMOVE_GROCERY_ITEM,
  TOGGLE_GROCERY_ITEM,
  NEW_EMPTY_LIST,
  NEW_POPULATED_LIST,
  SAVE_LIST,
  VIEW_LIST,
  REMOVE_LIST
} from '../constants/action_types';

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
    case ADD_GROCERY_ITEM:
      return {

      };
    case EDIT_GROCERY_ITEM:
      return {

      };
    case REMOVE_GROCERY_ITEM:
      return {

      };
    case TOGGLE_GROCERY_ITEM:
      return {

      };
    case NEW_EMPTY_LIST:
      return {

      };
    case NEW_POPULATED_LIST:
      return {

      };
    case SAVE_LIST:
      return {

      };
    case VIEW_LIST:
      return {

      };
      case REMOVE_LIST:
        return {

        };
    default:
      return state;
  }
};
