'use strict';

import {

  ADD_GROCERY_ITEM_REQUEST,
  ADD_GROCERY_ITEM_SUCCESS,
  ADD_GROCERY_ITEM_FAILURE,

  REMOVE_GROCERY_ITEM_REQUEST,
  REMOVE_GROCERY_ITEM_SUCCESS,
  REMOVE_GROCERY_ITEM_FAILURE,

  TOGGLE_GROCERY_ITEM_REQUEST,
  TOGGLE_GROCERY_ITEM_SUCCESS,
  TOGGLE_GROCERY_ITEM_FAILURE,

  NEW_EMPTY_LIST_REQUEST,
  NEW_EMPTY_LIST_SUCCESS,
  NEW_EMPTY_LIST_FAILURE,

  REMOVE_LIST_REQUEST,
  REMOVE_LIST_SUCCESS,
  REMOVE_LIST_FAILURE,

} from './action_types';

 // addGroceryItem
export function addGroceryItemRequest() {
  return {
    type: ADD_GROCERY_ITEM_REQUEST
  };
};
export function addGroceryItemSuccess(listId, item) {
  return {
    type: ADD_GROCERY_ITEM_SUCCESS,
    listId,
    item
  };
};
export function addGroceryItemFailure(error) {
  return {
    type: ADD_GROCERY_ITEM_FAILURE,
    error
  };
};



// removeGroceryItem
export function removeGroceryItemRequest() {
  return {
    type: REMOVE_GROCERY_ITEM_REQUEST
  };
};
export function removeGroceryItemSuccess(listId, itemId) {
  return {
    type: REMOVE_GROCERY_ITEM_SUCCESS,
    listId,
    itemId,
  };
};
export function removeGroceryItemFailure(error) {
  return {
    type: REMOVE_GROCERY_ITEM_FAILURE,
    error
  };
};



// toggleGroceryItem
export function toggleGroceryItemRequest() {
  return {
    type: TOGGLE_GROCERY_ITEM_REQUEST
  };
};
export function toggleGroceryItemSuccess(listId, itemId) {
  return {
    type: TOGGLE_GROCERY_ITEM_SUCCESS,
    listId,
    itemId,
  };
};
export function toggleGroceryItemFailure(error) {
  return {
    type: TOGGLE_GROCERY_ITEM_FAILURE,
    error
  };
};



// newEmptyList
export function newEmptyListRequest() {
  return {
    type: NEW_EMPTY_LIST_REQUEST,
  }
};
export function newEmptyListSuccess(listId) {
  return {
    type: NEW_EMPTY_LIST_SUCCESS,
    listId
  }
};
export function newEmptyListFailure(error) {
  return {
    type: NEW_EMPTY_LIST_FAILURE,
    error
  }
};



// removeList
export function removeListRequest() {
  return {
    type: REMOVE_LIST_REQUEST
  };
};
export function removeListSuccess(listId) {
  return {
    type: REMOVE_LIST_SUCCESS,
    listId
  };
};
export function removeListFailure(error) {
  return {
    type: REMOVE_LIST_FAILURE,
    error
  };
};



// async addGroceryItem
export function addGroceryItem() {
  return dispatch => {
    dispatch(addGroceryItemRequest());
    /*return api call creating a grocery item in the database
      .then((listId, item) => {
        dispatch(addGroceryItemSuccess(listId, item));
      })
      .catch((err) => {
        dispatch(addGroceryItemFailure(err));
        return;
      })*/
  };
};



// async removeGroceryItem
export function removeGroceryItem() {
  return dispatch => {
    dispatch(removeGroceryItemRequest());
    /*return api call sending through the grocery item to delete in the database
      .then((listId, itemId) => {
        dispatch(removeGroceryItemSuccess(listId, itemId));
      })
      .catch((err) => {
        dispatch(removeGroceryItemFailure(err));
        return;
      })*/
  };
};



// async toggleGroceryItem
export function toggleGroceryItem() {
  return dispatch => {
    dispatch(toggleGroceryItemRequest());
    /*return api call sending through the grocery item to toggle in the database
      .then((listId, itemId) => {
        dispatch(toggleGroceryItemSuccess(listId, itemId));
      })
      .catch((err) => {
        dispatch(toggleGroceryItemFailure(err));
        return;
      })*/
  };
};



// async newEmptyList
export function newEmptyList() {
  return dispatch => {
    dispatch(newEmptyListRequest());
    /*return api call creating a new grocery list in the database
      .then((listId) => {
        dispatch(newEmptyListSuccess(listId));
      })
      .catch((err) => {
        dispatch(newEmptyListFailure(err));
        return;
      })*/
  };
};



// async removeList
export function removeList() {
  return dispatch => {
    dispatch(removeListRequest());
    /*return api call sending through the grocery list to delete in the database
      .then((listId) => {
        dispatch(removeListSuccess(listId));
      })
      .catch((err) => {
        dispatch(removeListFailure(err));
        return;
      })*/
  };
};
