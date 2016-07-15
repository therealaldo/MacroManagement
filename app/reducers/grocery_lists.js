'use strict';

import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';
import {
  ADD_GROCERY_ITEM,
  SAVE_GROCERY_ITEM,
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
    /*case SAVE_GROCERY_ITEM:
      return {
        ...state,
        entities: {
          ...state.entities,
          ingredients: mapValues(state.entities.ingredients, (ingredient) => {
            return ingredient.id === action.itemId ?

          })
        }
      };*/
    /*case REMOVE_GROCERY_ITEM:
      return {

      };
    case TOGGLE_GROCERY_ITEM:
      return {

      };*/
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
          }
        }
      };
    case REMOVE_LIST:
      return {
        ...state,
        groceryLists: state.groceryLists.filter(id => id !== action.listId),
        groceryListsById:
      };

    default:
      return state;
  }
};
