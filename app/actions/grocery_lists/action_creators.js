'use strict';

import {

  SET_GROCERY_LIST_KEYWORD,

  SET_INGREDIENT_KEYWORD,

  ADD_GROCERY_ITEM_REQUEST,
  ADD_GROCERY_ITEM_SUCCESS,
  ADD_GROCERY_ITEM_FAILURE,

  REMOVE_GROCERY_ITEM_REQUEST,
  REMOVE_GROCERY_ITEM_SUCCESS,
  REMOVE_GROCERY_ITEM_FAILURE,

  NEW_EMPTY_LIST_REQUEST,
  NEW_EMPTY_LIST_SUCCESS,
  NEW_EMPTY_LIST_FAILURE,

  REMOVE_LIST_REQUEST,
  REMOVE_LIST_SUCCESS,
  REMOVE_LIST_FAILURE,

  FETCH_GROCERY_LISTS_REQUEST,
  FETCH_GROCERY_LISTS_SUCCESS,
  FETCH_GROCERY_LISTS_FAILURE,

  FETCH_LIST_INGREDIENTS_REQUEST,
  FETCH_LIST_INGREDIENTS_SUCCESS,
  FETCH_LIST_INGREDIENTS_FAILURE,

} from './action_types';

export function setGroceryListKeyword(keyword) {
  return {
    type: SET_GROCERY_LIST_KEYWORD,
    keyword
  };
};



export function setIngredientKeyword(keyword) {
  return {
    type: SET_INGREDIENT_KEYWORD,
    keyword
  };
};



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
export function addGroceryItem(listId, name) {
  return dispatch => {
    dispatch(addGroceryItemRequest());
    return fetch('http://162.243.164.11/ingredients', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        listId: listId,
        name: name
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(addGroceryItemSuccess(responseJson.ingredientId, responseJson.name));
    })
    .catch((err) => {
      dispatch(addGroceryItemFailure(err));
    })
  };
};



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
export function removeGroceryItem(listId, ingredientId) {
  return dispatch => {
    dispatch(removeGroceryItemRequest());
    return fetch('http://162.243.164.11/ingredients', {
      method: 'DELETE',
      body: JSON.stringify({
        listId: listId,
        ingredientId: ingredientId
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(removeGroceryItemSuccess(listId, ingredientId));
    })
    .catch((err) => {
      dispatch(removeGroceryItemFailure(err));
    })
  };
};



export function newEmptyListRequest() {
  return {
    type: NEW_EMPTY_LIST_REQUEST,
  }
};
export function newEmptyListSuccess(list) {
  return {
    type: NEW_EMPTY_LIST_SUCCESS,
    list
  }
};
export function newEmptyListFailure(error) {
  return {
    type: NEW_EMPTY_LIST_FAILURE,
    error
  }
};
export function newEmptyList(userId, name) {
  return dispatch => {
    dispatch(newEmptyListRequest());
    fetch('http://162.243.164.11/grocerylist', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId,
        name
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(newEmptyListSuccess(responseJson))
    })
    .catch((err) => {
      dispatch(newEmptyListFailure(err))
    })
  };
};



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
export function removeList(userId, listId) {
  return dispatch => {
    dispatch(removeListRequest());
    return fetch('http://162.243.164.11/grocerylist', {
      method: 'DELETE',
      body: JSON.stringify({
        userId: userId,
        listId: listId
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(removeListSuccess(listId))
    })
    .catch((err) => {
      dispatch(removeListFailure(err))
    })
  };
};



export function fetchGroceryListRequest() {
  return {
    type: FETCH_GROCERY_LISTS_REQUEST
  };
};
export function fetchGroceryListSuccess(lists) {
  return {
    type: FETCH_GROCERY_LISTS_SUCCESS,
    lists
  };
};
export function fetchGroceryListFailure(error) {
  return {
    type: FETCH_GROCERY_LISTS_FAILURE,
    error
  };
};
export function fetchGroceryList(userId) {
  return dispatch => {
    dispatch(fetchGroceryListRequest());
    return fetch(`http://162.243.164.11/grocerylist/${ userId }`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(fetchGroceryListSuccess(responseJson));
    })
    .catch((err) => {
      dispatch(fetchGroceryListFailure(err));
    })
  }
};



export function fetchListIngredientsRequest() {
  return {
    type: FETCH_LIST_INGREDIENTS_REQUEST
  };
};
export function fetchListIngredientsSuccess(ingredients) {
  return {
    type: FETCH_LIST_INGREDIENTS_SUCCESS,
    ingredients
  };
};
export function fetchListIngredientsFailure(error) {
  return {
    type: FETCH_LIST_INGREDIENTS_FAILURE,
    error
  };
};
export function fetchListIngredients(listId) {
  return dispatch => {
    dispatch(fetchListIngredientsRequest());
    return fetch(`http://162.243.164.11/ingredients/${ listId }`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(fetchListIngredientsSuccess(responseJson));
    })
    .catch((err) => {
      dispatch(fetchListIngredientsFailure(err));
    })
  }
};
