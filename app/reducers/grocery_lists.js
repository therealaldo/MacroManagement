'use strict';

import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';
import {

  SET_GROCERY_LIST_KEYWORD,

  SET_INGREDIENT_KEYWORD,

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
  groceryListKeyword: '',
  ingredientKeyword: '',
  isFetching: false,
  error: null,
};

export default function reducer(
  state = initialState,
  action = {}
) {
  switch (action.type) {
    case ADD_GROCERY_ITEM_REQUEST:
    case REMOVE_GROCERY_ITEM_REQUEST:
    case NEW_EMPTY_LIST_REQUEST:
    case REMOVE_LIST_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };

    case ADD_GROCERY_ITEM_SUCCESS:
      return {
        ...state,
        groceryListsById: mapValues(state.groceryListsById, (groceryList) => {
          return groceryList.id === action.listId ?
            {
              ...groceryList,
              ingredients: groceryList.ingredients.concat(action.item.id)
            } :
            groceryList
        }),
        ingredientsById: {
          ...state.ingredientsById,
          [action.item.id]: {
            id: action.item.id,
            name: action.item.title,
            image: action.item.image
          }
        },
        isFetching: false,
        error: null
      };

    case REMOVE_GROCERY_ITEM_SUCCESS:
      return {
        ...state,
        groceryListsById: mapValues(state.groceryListsById, (groceryList) => {
          return groceryList.id === action.listId ?
            {
              ...groceryList,
              ingredients: groceryList.ingredients.filter(id => id !== action.itemId)
            } :
            groceryList
        }),
        ingredientsById: omit(state.ingredientsById, action.itemId),
        isFetching: false,
        error: null
      };

    case SET_GROCERY_LIST_KEYWORD:
      return {
        ...state,
        groceryListKeyword: action.keyword
      };

    case SET_INGREDIENT_KEYWORD:
      return {
        ...state,
        ingredientKeyword: action.keyword
      };

    case TOGGLE_GROCERY_ITEM_SUCCESS:
      return {
        ...state,
        ingredientsById: mapValues(state.ingredientsById, (ingredient) => {
          return ingredient.id === action.itemId ?
            {
              ...ingredient,
              completed: !ingredient.completed
            } :
            ingredient
        }),
        isFetching: false,
        error: null
      };

    case NEW_EMPTY_LIST_SUCCESS:
      return {
        ...state,
        groceryLists: state.groceryLists.concat(action.listId),
        groceryListsById: {
          ...state.groceryListsById,
          [action.listId]: {
            id: action.list.createdList.listId,
            name: action.list.createdList.name,
            ingredients: []
          }
        },
        isFetching: false,
        error: null
      };

    case REMOVE_LIST_SUCCESS:
      return {
        ...state,
        groceryLists: state.groceryLists.filter(id => id !== action.listId),
        groceryListsById: omit(state.groceryListsById, action.listId),
        isFetching: false,
        error: null
      };

    case ADD_GROCERY_ITEM_FAILURE:
    case REMOVE_GROCERY_ITEM_FAILURE:
    case NEW_EMPTY_LIST_FAILURE:
    case REMOVE_LIST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };

    default:
      return state;
  }
};
