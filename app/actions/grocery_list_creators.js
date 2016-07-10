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

let nextListId = 0;
export const newEmptyList = (list) => {
  return {
    type: NEW_EMPTY_LIST,
    groceryLists: [
      ...list,
      {
        id: nextListId++,
        items: []
      }
    ]
  }
};

export const newPopulatedList = (list, items) => {
  return {
    type: NEW_POPULATED_LIST,
    groceryLists: [
      ...list,
      {
        id: nextListId++,
        items
      }
    ]
  }
};

export const editList = (list, index) => {
  return {
    type: EDIT_LIST,
    index
  };
};

export const saveList = (index, updatedList) => {
  return {
    type: SAVE_LIST,
    index,
    updatedList
  };
};

export const removeList = (list, index) => {
  return {
    type: REMOVE_LIST,
    index
  };
};

export const addGroceryItem = (list, index, item) => {
  return {
    type: ADD_GROCERY_ITEM,
    index,
    item
  };
};

export const editGroceryItem = (index) => {
  return {
    type: EDIT_GROCERY_ITEM,
    index
  };
};
export const removeGroceryItem = (index) => {
  return {
    type: REMOVE_GROCERY_ITEM,
    index
  };
};
export const toggleGroceryItem = (index) => {
  return {
    type: TOGGLE_GROCERY_ITEM,
    index
  };
};
