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



// async searchMeal
export function searchMeal(query) {
  return dispatch => {
    dispatch(searchMealRequest());
    /*return api call sending through the query for a meal
      .then((query, mealResults, processingTimeMs) => {
        dispatch(searchMealSuccess(mealResults, processingTimeMs));
      })
      .catch((err) => {
        dispatch(searchMealFailure(err));
        return;
      })*/
  };
};



// async moreSearch
export function moreSearch() {
  return dispatch => {
    dispatch(moreSearchRequest());
    /*return api call appending more results to the mealResults
      .then((moreResults, processingTimeMs) => {
        dispatch(moreSearchSuccess(moreResults, processingTimeMs));
      })
      .catch((err) => {
        dispatch(moreSearchFailure(err));
        return;
      })*/
  };
};



// async searchInfo
export function searchInfo(meal) {
  return dispatch => {
    dispatch(searchInfoRequest());
    /*return api call searching info on the selected meal
      .then((meal, info) => {
        dispatch(searchInfoSuccess(info));
      })
      .catch((err) => {
        dispatch(searchInfoFailure(err));
        return;
      })*/
  };
};



// async addMeal
export function addMeal(selectedDate) {
  return dispatch => {
    dispatch(addMealRequest());
    /*return api call creating a new meal in the database
      .then((selectedDate, mealType, meal) => {
        dispatch(addMealSuccess(mealType, meal));
      })
      .catch((err) => {
        dispatch(addMealFailure(err));
        return;
      })*/
  };
};



// async deleteMeal
export function deleteMeal(selectedDate, mealType, mealId) {
  return dispatch => {
    dispatch(deleteMealRequest());
    /*return api call sending through the meal to delete in the database
      .then((selectedDate, mealType, mealId) => {
        dispatch(deleteMealSuccess(mealType, mealId));
      })
      .catch((err) => {
        dispatch(deleteMealFailure(err));
        return;
      })*/
  };
};



// async addMealPlan
export function addMealPlan(selectedDate) {
  return dispatch => {
    dispatch(addMealPlanRequest());
    /*return api call creating a new meal plan in the database
      .then((date) => {
        dispatch(addMealPlanSuccess(date));
      })
      .catch((err) => {
        dispatch(addMealPlanFailure(err));
        return;
      })*/
  };
};



// async fetchUserMeals
export function fetchUserMeals(selectedDate) {
  return dispatch => {
    dispatch(fetchUserMealsRequest());
    /*return api call fetching all of the user meals for a specific day
      .then((date, userMeals) => {
        dispatch(fetchUserMealsSuccess(userMeals));
      })
      .catch((err) => {
        dispatch(fetchUserMealsFailure(err));
        return;
      })*/
  };
};
