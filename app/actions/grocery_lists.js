'use strict';

import {
  ADD_GROCERY_ITEM,
  SAVE_GROCERY_ITEM,
  REMOVE_GROCERY_ITEM,
  TOGGLE_GROCERY_ITEM,
  NEW_EMPTY_LIST,
  NEW_POPULATED_LIST,
  SAVE_LIST,
  REMOVE_LIST
} from '../constants/action_types';

export const addGroceryItem = (listId, item) => {
  return {
    type: ADD_GROCERY_ITEM,
    listId,
    item
  };
};

export const saveGroceryItem = (listId, itemId, newItem) => {
  return {
    type: SAVE_GROCERY_ITEM,
    listId,
    itemId,
    newItem
  };
};

export const removeGroceryItem = (listId, itemId) => {
  return {
    type: REMOVE_GROCERY_ITEM,
    listId,
    itemId,
  };
};

export const toggleGroceryItem = (listId, itemId) => {
  return {
    type: TOGGLE_GROCERY_ITEM,
    listId,
    itemId,
  };
};

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

export const saveList = (newItemList) => {
  return {
    type: SAVE_LIST,
    newItemList
  };
};

export const removeList = (listId) => {
  return {
    type: REMOVE_LIST,
    listId
  };
};
