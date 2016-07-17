'use strict';

import {

  SEARCH_MEAL_REQUEST,
  SEARCH_MEAL_SUCCESS,
  SEARCH_MEAL_FAILURE,

  MORE_SEARCH_REQUEST,
  MORE_SEARCH_SUCCESS,
  MORE_SEARCH_FAILURE,

  SEARCH_INFO_REQUEST,
  SEARCH_INFO_SUCCESS,
  SEARCH_INFO_FAILURE,

  ADD_MEAL_REQUEST,
  ADD_MEAL_SUCCESS,
  ADD_MEAL_FAILURE,

  DELETE_MEAL_REQUEST,
  DELETE_MEAL_SUCCESS,
  DELETE_MEAL_FAILURE,

  ADD_MEAL_PLAN_REQUEST,
  ADD_MEAL_PLAN_SUCCESS,
  ADD_MEAL_PLAN_FAILURE,

  FETCH_USER_MEALS_REQUEST,
  FETCH_USER_MEALS_SUCCESS,
  FETCH_USER_MEALS_FAILURE,

  INCREMENT_DATE,
  DECREMENT_DATE,

} from './action_types';

// searchMeal
export function searchMealRequest() {
  return {
    type: SEARCH_MEAL_REQUEST,
  };
};
export function searchMealSuccess(mealResults, processingTimeMs) {
  return {
    type: SEARCH_MEAL_SUCCESS,
    mealResults,
    processingTimeMs
  };
};
export function searchMealFailure(error) {
  return {
    type: SEARCH_MEAL_FAILURE,
    error
  };
};



// moreSearch
export function moreSearchRequest() {
  return {
    type: MORE_SEARCH_REQUEST,
  };
};
export function moreSearchSuccess(moreResults, processingTimeMs) {
  return {
    type: MORE_SEARCH_SUCCESS,
    moreResults,
    processingTimeMs
  };
};
export function moreSearchFailure(error) {
  return {
    type: MORE_SEARCH_FAILURE,
    error
  };
};



// searchInfo
export function searchInfoRequest() {
  return {
    type: SEARCH_INFO_REQUEST,
  };
};
export function searchInfoSuccess(info) {
  return {
    type: SEARCH_INFO_SUCCESS,
    info
  };
};
export function searchInfoFailure(error) {
  return {
    type: SEARCH_INFO_FAILURE,
    error
  };
};



// addMeal
export function addMealRequest() {
  return {
    type: ADD_MEAL_REQUEST,
  };
};
export function addMealSuccess(mealType, meal) {
  return {
    type: ADD_MEAL_SUCCESS,
    mealType,
    meal
  };
};
export function addMealFailure(error) {
  return {
    type: ADD_MEAL_FAILURE,
    error
  };
};



// deleteMeal
export function deleteMealRequest() {
  return {
    type: DELETE_MEAL_REQUEST,
  };
};
export function deleteMealSuccess(mealType, mealId) {
  return {
    type: DELETE_MEAL_SUCCESS,
    selectedDate,
    mealType,
    mealId
  };
};
export function deleteMealFailure(error) {
  return {
    type: DELETE_MEAL_FAILURE,
    error
  };
};



// addMealPlan
export function addMealPlanRequest() {
  return {
    type: ADD_MEAL_PLAN_REQUEST,
  };
};
export function addMealPlanSuccess(date) {
  return {
    type: ADD_MEAL_PLAN_SUCCESS,
    date
  };
};
export function addMealPlanFailure(error) {
  return {
    type: ADD_MEAL_PLAN_FAILURE,
    error
  };
};



// fetchUserMeals
export function fetchUserMealsRequest() {
  return {
    type: FETCH_USER_MEALS_REQUEST,
  };
};
export function fetchUserMealsSuccess(userMeals) {
  return {
    type: FETCH_USER_MEALS_SUCCESS,
    userMeals
  };
};
export function fetchUserMealsFailure(error) {
  return {
    type: FETCH_USER_MEALS_FAILURE,
    error
  };
};



// incrementDate
export function incrementDate() {
  return {
    type: INCREMENT_DATE,
  };
};



// decrementDate
export function decrementDate() {
  return {
    type: DECREMENT_DATE,
  };
};
