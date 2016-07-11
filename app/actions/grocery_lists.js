'use strict';

import {
  NEW_EMPTY_LIST,
  NEW_POPULATED_LIST,
  EDIT_LIST,
  SAVE_LIST,
  REMOVE_LIST,
  ADD_GROCERY_ITEM,
  EDIT_GROCERY_ITEM,
  REMOVE_GROCERY_ITEM,
  TOGGLE_GROCERY_ITEM
} from '../constants/action_types';

export const newEmptyList = () => {
  return {
    type: NEW_EMPTY_LIST,
  }
};

export const newPopulatedList = (items) => {
  return {
    type: NEW_POPULATED_LIST,
    items
  }
};

export const viewList = (listIndex) => {
  return {
    type: VIEW_LIST,
    listIndex
  };
};

export const saveList = (listIndex, newList) => {
  return {
    type: SAVE_LIST,
    listIndex,
    newList
  };
};

export const removeList = (listIndex) => {
  return {
    type: REMOVE_LIST,
    listIndex
  };
};

export const addGroceryItem = (listIndex, item) => {
  return {
    type: ADD_GROCERY_ITEM,
    listIndex,
    item
  };
};
export const removeGroceryItem = (listIndex, itemIndex) => {
  return {
    type: REMOVE_GROCERY_ITEM,
    listIndex,
    itemIndex,
  };
};
export const toggleGroceryItem = (listIndex, itemIndex) => {
  return {
    type: TOGGLE_GROCERY_ITEM,
    listIndex,
    itemIndex,
  };
};
