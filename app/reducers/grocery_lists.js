'use strict';

import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';
import {

  SET_GROCERY_LIST_KEYWORD,

  SET_INGREDIENT_KEYWORD,

  VIEW_GROCERY_LIST,

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

  FETCH_GROCERY_LISTS_REQUEST,
  FETCH_GROCERY_LISTS_SUCCESS,
  FETCH_GROCERY_LISTS_FAILURE,

  FETCH_LIST_INGREDIENTS_REQUEST,
  FETCH_LIST_INGREDIENTS_SUCCESS,
  FETCH_LIST_INGREDIENTS_FAILURE,

} from '../actions/grocery_lists/action_types';

const initialState = {
  groceryLists: [],
  groceryListsById: {},
  ingredientsById: {},
  groceryListKeyword: '',
  selectedGroceryList: '',
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
    case FETCH_GROCERY_LISTS_REQUEST:
    case FETCH_LIST_INGREDIENTS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };

    case ADD_GROCERY_ITEM_SUCCESS:
      return {
        ...state,
        groceryListsById: mapValues(state.groceryListsById, (groceryList) => {
          return groceryList.id === action.list.createdList.listId ?
            {
              ...groceryList,
              ingredients: groceryList.ingredients.concat(action.list.createdList.ingredientId)
            } :
            groceryList
        }),
        ingredientsById: {
          ...state.ingredientsById,
          [action.list.createdIngredient.ingredientId]: {
            id: action.list.createdIngredient.ingredientId,
            name: action.list.createdIngredient.name
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

    case VIEW_GROCERY_LIST:
      return {
        ...state,
        selectedGroceryList: action.listId
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
        groceryLists: state.groceryLists.concat(action.list.createdList.listId),
        groceryListsById: {
          ...state.groceryListsById,
          [action.list.createdList.listId]: {
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

    case FETCH_GROCERY_LISTS_SUCCESS:
      let len = action.lists.userGroceryLists.length;
      let newGroceryLists = state.groceryLists.slice();
      let newGroceryListsById = { ...state.groceryListsById };
      for(let i = 0; i < len; i++) {
        let listAlreadyExist = newGroceryLists.indexOf(action.lists.userGroceryLists[i].listId) > -1;
        if(!listAlreadyExist) {
          newGroceryLists = newGroceryLists.concat(action.lists.userGroceryLists[i].listId);
          newGroceryListsById = {
            ...newGroceryListsById,
            [action.lists.userGroceryLists[i].listId]: {
              id: action.lists.userGroceryLists[i].listId,
              name: action.lists.userGroceryLists[i].name,
              ingredients: []
            }
          };
        }
      };
      return {
        ...state,
        groceryLists: newGroceryLists,
        groceryListsById: newGroceryListsById,
        selectedGroceryList: '',
        groceryListKeyword: '',
      };

    case FETCH_LIST_INGREDIENTS_SUCCESS:
      let length = action.ingredients.listIngredients.length;
      let populatedGroceryListsById = { ...state.groceryListsById };
      let newIngredientsById = { ...state.ingredientsById };
      for(let i = 0; i < length; i++) {
        populatedGroceryListsById = mapValues(populatedGroceryListsById, (groceryList) => {
          return groceryList.id === action.ingredients.listIngredients[i].listId ?
          {
            ...groceryList,
            ingredients: groceryList.ingredients.concat(action.ingredients.listIngredients[i].ingredientId)
          } :
          groceryList
        });
        newIngredientsById = {
          ...newIngredientsById,
          [action.ingredients.listIngredients[i].ingredientId]: {
            id: action.ingredients.listIngredients[i].ingredientId,
            name: action.ingredients.listIngredients[i].name,
            completed: action.ingredients.listIngredients[i].completed
          }
        };
      };
      return {
        ...state,
        groceryListsById: populatedGroceryListsById,
        ingredientsById: newIngredientsById,
        groceryListKeyword: '',
      };

    case ADD_GROCERY_ITEM_FAILURE:
    case REMOVE_GROCERY_ITEM_FAILURE:
    case NEW_EMPTY_LIST_FAILURE:
    case REMOVE_LIST_FAILURE:
    case FETCH_GROCERY_LISTS_FAILURE:
    case FETCH_LIST_INGREDIENTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };

    default:
      return state;
  }
};
