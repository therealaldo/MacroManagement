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
