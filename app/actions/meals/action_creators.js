'use strict';

import { InteractionManager } from 'react-native';
import { Actions } from 'react-native-router-flux';
import api from '../../utils/api';
import {

  SET_SEARCH_KEYWORD,

  SEARCH_MEAL_REQUEST,
  SEARCH_MEAL_SUCCESS,
  SEARCH_MEAL_FAILURE,

  SEARCH_RECIPE_REQUEST,
  SEARCH_RECIPE_SUCCESS,
  SEARCH_RECIPE_FAILURE,

  ANALYZE_RECIPE_REQUEST,
  ANALYZE_RECIPE_SUCCESS,
  ANALYZE_RECIPE_FAILURE,

  ADD_MEAL_REQUEST,
  ADD_MEAL_SUCCESS,
  ADD_MEAL_FAILURE,

  DELETE_MEAL_REQUEST,
  DELETE_MEAL_SUCCESS,
  DELETE_MEAL_FAILURE,

  ADD_MEAL_PLAN,

  FETCH_USER_MEALS_REQUEST,
  FETCH_USER_MEALS_SUCCESS,
  FETCH_USER_MEALS_FAILURE,

  INCREMENT_DATE,
  DECREMENT_DATE,

  SEARCH_BREAKFAST,
  SEARCH_LUNCH,
  SEARCH_DINNER,

  CHANGE_INFO_VIEW,

  SEARCH_SUMMARY_REQUEST,
  SEARCH_SUMMARY_SUCCESS,
  SEARCH_SUMMARY_FAILURE

} from './action_types';

export function setSearchKeyword(keyword) {
  return {
    type: SET_SEARCH_KEYWORD,
    keyword
  };
};



export function searchMealRequest() {
  return {
    type: SEARCH_MEAL_REQUEST,
  };
};
export function searchMealSuccess(mealResults) {
  return {
    type: SEARCH_MEAL_SUCCESS,
    mealResults,
  };
};
export function searchMealFailure(error) {
  return {
    type: SEARCH_MEAL_FAILURE,
    error
  };
};
export function searchMeal(query, offset) {
  return dispatch => {
    dispatch(searchMealRequest());
    return api.searchRecipe(query, offset)
    .then((mealResults) => {
      dispatch(searchMealSuccess(mealResults));
    })
    .catch((err) => {
      dispatch(searchMealFailure(err));
    })
  };
};



export function searchRecipeRequest() {
  return {
    type: SEARCH_RECIPE_REQUEST,
  };
};
export function searchRecipeSuccess(info, readyIn) {
  return {
    type: SEARCH_RECIPE_SUCCESS,
    info,
    readyIn
  };
};
export function searchRecipeFailure(error) {
  return {
    type: SEARCH_RECIPE_FAILURE,
    error
  };
};
export function searchRecipe(mealId, readyIn) {
  return dispatch => {
    dispatch(searchRecipeRequest());
    return api.getRecipeInfo(mealId)
    .then((mealInfo) => {
      dispatch(searchRecipeSuccess(mealInfo, readyIn));
    })
    .catch((err) => {
      dispatch(searchRecipeFailure(err));
    })
  };
};



export function analyzeRecipeRequest() {
  return {
    type: ANALYZE_RECIPE_REQUEST,
  };
};
export function analyzeRecipeSuccess(steps, equipment, ingredients) {
  return {
    type: ANALYZE_RECIPE_SUCCESS,
    steps,
    equipment,
    ingredients
  };
};
export function analyzeRecipeFailure(error) {
  return {
    type: ANALYZE_RECIPE_FAILURE,
    error
  };
};
function flatten(array) {
  return array.reduce((flat, toFlatten) => {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}
export function analyzeRecipe(mealId) {
  return dispatch => {
    dispatch(analyzeRecipeRequest());
    return api.analyzeRecipeInfo(mealId)
    .then((mealInfo) => {
      let steps = [];
      let equipment = [];

      for(let i = 0; i < mealInfo.length; i++) {
        if(mealInfo[i].equipment !== 0) {
          equipment.push(mealInfo[i].equipment);
        }
        steps.push(mealInfo[i].step);
      };
      dispatch(analyzeRecipeSuccess(flatten(steps), flatten(equipment)));
    })
    .catch((err) => {
      dispatch(analyzeRecipeFailure(err));
    })
  };
};



export function searchSummaryRequest() {
  return {
    type: SEARCH_SUMMARY_REQUEST
  };
};
export function searchSummarySuccess(summary) {
  return {
    type: SEARCH_SUMMARY_SUCCESS,
    summary
  };
};
export function searchSummaryFailure(err) {
  return {
    type: SEARCH_SUMMARY_FAILURE,
    err
  };
};
export function searchSummary(mealId) {
  return dispatch => {
    dispatch(searchSummaryRequest());
    return api.searchSummary(mealId)
    .then((mealSummary) => {
      dispatch(searchSummarySuccess(mealSummary));
    })
    .catch((err) => {
      dispatch(searchSummaryFailure(err));
    })
  };
};



export function changeInfoView(selectedView) {
  return {
    type: CHANGE_INFO_VIEW,
    selectedView
  };
};



export function addMealRequest() {
  return {
    type: ADD_MEAL_REQUEST,
  };
};
export function addMealSuccess(mealJson) {
  return {
    type: ADD_MEAL_SUCCESS,
    mealJson
  };
};
export function addMealFailure(error) {
  return {
    type: ADD_MEAL_FAILURE,
    error
  };
};
export function addMeal(selectedDate, mealType, userId, meal, calories) {
  return dispatch => {
    dispatch(addMealRequest());
    return fetch('http://162.243.164.11/meals', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: userId,
        date: selectedDate,
        mealId: meal.id,
        name: meal.title,
        image: meal.image,
        mealType: mealType,
        calories: calories
      })
    })
    .then((response) => response.json())
    .then((mealJson) => {
      InteractionManager.runAfterInteractions(() => {
        dispatch(addMealSuccess(mealJson));
        Actions.mainWeeklyPlan({ type: 'reset' });
      });
    })
    .catch((err) => {
      dispatch(addMealFailure(err))
    });
  };
};



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
export function deleteMeal(userId, selectedDate, mealType, mealId) {
  return dispatch => {
    dispatch(deleteMealRequest());
    return fetch('http://162.243.164.11/meals', {
      method: 'DELETE',
      body: JSON.stringify({
        userId: userId,
        date: selectedDate,
        mealType: mealType,
        mealId: mealId
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(deleteMealSuccess(mealType, mealId))
    })
    .catch((err) => {
      dispatch(deleteMealFailure(err))
    })
  };
};




export function addMealPlan(date) {
  return {
    type: ADD_MEAL_PLAN,
    date
  };
};



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
export function fetchUserMeals(userId) {
  return dispatch => {
    dispatch(fetchUserMealsRequest());
    return fetch(`http://162.243.164.11/meals/${ userId }`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(fetchUserMealsSuccess(responseJson));
    })
    .catch((err) => {
      dispatch(fetchUserMealsFailure(err));
    })
  };
};




export function incrementDate(incrementedDate) {
  return {
    type: INCREMENT_DATE,
    incrementedDate
  };
};
export function decrementDate(decrementedDate) {
  return {
    type: DECREMENT_DATE,
    decrementedDate
  };
};



export function searchBreakfast() {
  return {
    type: SEARCH_BREAKFAST
  };
};
export function searchLunch() {
  return {
    type: SEARCH_LUNCH
  };
};
export function searchDinner() {
  return {
    type: SEARCH_DINNER
  };
};
