'use strict';

import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';
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

} from '../actions/grocery_lists/action_types';

const initialState = {
  groceryLists: [],
  groceryListsById: {},
  ingredientsById: {},
  isFetching: false,
  error: null,
};

export default function reducer(
  state = initialState,
  action = {}
) {
  switch (action.type) {
    case ADD_GROCERY_ITEM:
      return {
        ...state,
        groceryListsById: {
          ...state.groceryListsById,
          [action.listId]: {
            ...state.groceryListsById[action.listId],
            ingredients: state.groceryListsById[action.listId].ingredients.concat(action.item.id)
          }
        },
        ingredientsById: {
          ...state.ingredientsById,
          [newItemId]: {
            id: newItemId,
            name: action.item,
            completed: false
          }
        }
      };

    case REMOVE_GROCERY_ITEM:
      return {
        ...state,
        groceryListsById: mapValues(state.groceryListsById, (groceryList) => {
          return groceryList.id === action.listId ?
            assign({}, groceryList, { ingredients: groceryList.ingredients.filter(id => id !== action.itemId) }) :
            groceryList
        }),
        ingredientsById: omit(state.ingredientsById, action.itemId)
      };

    case TOGGLE_GROCERY_ITEM:
      return {
        ...state,
        ingredientsById: mapValues(state.ingredientsById, (ingredient) => {
          return ingredient.id === action.itemId ?
            assign({}, ingredient, { completed: !ingredient.completed }) :
            ingredient
        })
      };

    case NEW_EMPTY_LIST:
      return {
        ...state,
        groceryLists: state.groceryLists.concat(action.listId),
        groceryListsById: {
          ...state.groceryListsById,
          [action.listId]: {
            id: action.listId,
            ingredients: []
          }
        }
      };

    case REMOVE_LIST:
      return {
        ...state,
        groceryLists: state.groceryLists.filter(id => id !== action.listId),
        groceryListsById: omit(state.groceryListsById, action.listId)
      };

    default:
      return state;
  }
};
