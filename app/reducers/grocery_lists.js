'use strict';

import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';
import {
  ADD_GROCERY_ITEM,
  REMOVE_GROCERY_ITEM,
  TOGGLE_GROCERY_ITEM,
  NEW_EMPTY_LIST,
  NEW_POPULATED_LIST,
  REMOVE_LIST
} from '../constants/action_types';

const initialState = {
  groceryLists: [],
  groceryListsById: {},
  ingredientsById: {},
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
            ingredients: state.groceryListsById[action.listId].ingredients.concat(action.)
          }
        }
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

    case NEW_POPULATED_LIST:
      return {
        groceryLists: state.groceryLists.concat(action.listId),
        groceryListsById: {
          ...state.groceryListsById,
          [action.listId]: {
            id: action.listId,
            ingredients: action.ingredients
          },
        },
        ingredientsById: {
          ...state.ingredientsById,
          action.ingredientsById,
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
