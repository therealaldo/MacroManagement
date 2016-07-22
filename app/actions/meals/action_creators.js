'use strict';

import { InteractionManager } from 'react-native';
import { Actions } from 'react-native-router-flux';
import api from '../../utils/api';
import {

  SET_SEARCH_KEYWORD,

  SEARCH_MEAL_REQUEST,
  SEARCH_MEAL_SUCCESS,
  SEARCH_MEAL_FAILURE,

  MORE_SEARCH_REQUEST,
  MORE_SEARCH_SUCCESS,
  MORE_SEARCH_FAILURE,

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

} from './action_types';

// setSearchKeyword
export function setSearchKeyword(keyword) {
  return {
    type: SET_SEARCH_KEYWORD,
    keyword
  };
};



// searchMeal
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



// searchRecipe
export function searchRecipeRequest() {
  return {
    type: SEARCH_RECIPE_REQUEST,
  };
};
export function searchRecipeSuccess(info) {
  return {
    type: SEARCH_RECIPE_SUCCESS,
    info
  };
};
export function searchRecipeFailure(error) {
  return {
    type: SEARCH_RECIPE_FAILURE,
    error
  };
};



// analyzeRecipe
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
export function addMealPlan() {
  return {
    type: ADD_MEAL_PLAN,
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



// async searchRecipe
export function searchRecipe(mealId) {
  return dispatch => {
    dispatch(searchRecipeRequest());
    return api.getRecipeInfo(mealId)
    .then((mealInfo) => {
      dispatch(searchRecipeSuccess(mealInfo));
    })
    .catch((err) => {
      dispatch(searchRecipeFailure(err));
    })
  };
};



function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}



// async analyzeRecipe
export function analyzeRecipe(mealId) {
  return dispatch => {
    dispatch(analyzeRecipeRequest());
    return api.analyzeRecipeInfo(mealId)
    .then((mealInfo) => {
      let steps = [];
      let equipment = [];
      let ingredients = [];

      for(let i = 0; i < mealInfo.length; i++) {
        if(mealInfo[i].equipment !== 0) {
          equipment.push(mealInfo[i].equipment);
        }
        if(mealInfo[i].ingredients !== 0) {
          ingredients.push(mealInfo[i].ingredients);
        }
        steps.push(mealInfo[i].step);
      };

      dispatch(analyzeRecipeSuccess(flatten(steps), flatten(equipment), flatten(ingredients)));
    })
    .catch((err) => {
      dispatch(analyzeRecipeFailure(err));
    })
  };
};



// async searchAnalyzeRecipe
export function searchAnalyzeRecipe(mealId) {
  InteractionManager.runAfterInteractions(() => {
    searchRecipe(mealId);
    analyzeRecipe(mealId);
  });
}



// async addMeal
export function addMeal(selectedDate, mealType, userId, meal) {
  return dispatch => {
    dispatch(addMealRequest());
    return fetch('http://192.241.140.116/meals', {
      method: 'PUT',
      body: JSON.stringify({
        userId: userId,
        date: selectedDate,
        meal: meal,
        mealType: mealType
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(addMealSuccess(responseJson.mealType, responseJson.meal))
    })
    .catch((err) => {
      dispatch(addMealFailure(err))
    })
  };
};



// async deleteMeal
export function deleteMeal(userId, selectedDate, mealType, mealId) {
  return dispatch => {
    dispatch(deleteMealRequest());
    return fetch('http://192.241.140.116/meals', {
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
      dispatch(deleteMealSuccess(responseJson.mealType, responseJson.mealId))
    })
    .catch((err) => {
      dispatch(deleteMealFailure(err))
    })
  };
};



// async fetchUserMeals
export function fetchUserMeals(selectedDate, userId) {
  return dispatch => {
    dispatch(fetchUserMealsRequest());
    return fetch('http://192.241.140.116/meals', {
      method: 'GET',
      body: JSON.stringify({
        userId: userId,
        date: selectedDate
      })
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
