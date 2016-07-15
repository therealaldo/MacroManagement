'use strict';

import {
  FETCH_MEAL_REQUEST,
  FETCH_MEAL_FAILED,
  FETCH_MEAL_RESULT,
  MORE_SEARCH_RESULT,
  SEARCH_MEAL_INFO,
  ADD_MEAL,
  DELETE_MEAL,
  SAVE_MEAL
} from '../constants/action_types';

export function fetchMealRequest = (query, offset) => {
  return {
    type: FETCH_MEAL_REQUEST,
    query,
    offset
  };
};

export function fetchMealFailed = (error) => {
  return {
    type: FETCH_MEAL_FAILED,
    error
  };
};

export function fetchMealResult = (response) => {
  return {
    type: FETCH_MEAL_RESULT,
    response
  };
};

export function moreSearchResult = (pageIndex) => {
  return {
    type: MORE_SEARCH_RESULT,
    pageIndex
  };
};

export function searchMealInfo = (mealIndex) => {
  return {
    type: SEARCH_MEAL_INFO,
    mealIndex
  };
};

export function addMeal = (mealType, meal) => {
  return {
    type: ADD_MEAL,
    mealType,
    meal
  };
};

export function deleteMeal = (selectedDate, mealType, mealId) => {
  return {
    type: DELETE_MEAL,
    selectedDate
    mealType,
    mealId
  };
};
