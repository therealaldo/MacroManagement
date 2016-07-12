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
  SAVE_LIST,
  REMOVE_LIST
} from '../constants/action_types';

const initialState = {
  groceryLists: [],
  entities: {
    lists: {},
    ingredients: {},
  }
};

export default function reducer(
  state = initialState,
  action = {}
) {
  switch (action.type) {
    case ADD_GROCERY_ITEM:
      let ingredientsArrayLastId = state.entities.lists[listId].ingredients.length - 1;
      let newItemId = state.entities.lists[listId].ingredients[ingredientsArrayLastId] + 1;
      return {
        ...state,
        entities: {
          ...state.entities,
            lists: mapValues(state.entities.lists, (groceryList) => {
              return groceryList.id === action.listId ?
                /*ingredients: state.entities.lists[listId].ingredients.concat(newItemId)*/groceryList :
                groceryList
            }),
            ingredients: {
              ...state.entities.ingredients,
              [newItemId]: {
                id: newItemId,
                name: action.item.title,
                completed: false
              }
            }
          }
        }
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
      const groceryListsArrayLastId = state.groceryLists.length - 1;
      const newListId = state.groceryLists[groceryListsArrayLastId] + 1;
      return {
        groceryLists: state.groceryLists.concat(newListId),
        entities: {
          ...state.entities,
          lists: {
            ...state.entities.lists,
            [newListId]: {
              id: newListId,
              ingredients: []
            }
          }
        }
      };
    case NEW_POPULATED_LIST:
      return {
        groceryLists: state.groceryLists.concat(newListId),
        entities: {
          ...state.entities,
          lists: {
            ...state.entities.lists,
            [newListId]: {
              id: newListId,
              items: action.items
            }
          }
        }
      };
  /*  case SAVE_LIST:
      return {
        ...state,
        entities: {
          lists: {

          }
          ingredients: {

          }
        }
      };*/
    case REMOVE_LIST:
      return {
        ...state,
        groceryLists: state.groceryLists.filter(id => id !== action.listId),
        entities: {
          ...state.entities,
          lists: omit(state.entities.lists, action.listId),
          ingredients
        }
      };

    default:
      return state;
  }
};
