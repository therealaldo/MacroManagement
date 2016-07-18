'use strict';

import {

  SET_ANALYSIS_FILTER,

  SET_IMAGE_URI,

  FETCH_USER_MEAL_DATA_REQUEST,
  FETCH_USER_MEAL_DATA_SUCCESS,
  FETCH_USER_MEAL_DATA_FAILURE,

} from './action_types';

// setAnalysisFilter
export function setAnalysisFilter(filter) {
  return {
    type: SET_ANALYSIS_FILTER,
    filter
  };
};



// setImageUri
export function setImageUri(uri) {
  return {
    type: SET_IMAGE_URI,
    uri
  };
};



// fetchUserMealData
export function fetchUserMealDataRequest() {
  return {
    type: FETCH_USER_MEAL_DATA_REQUEST
  };
};
export function fetchUserMealDataSuccess(userMealData) {
  return {
    type: FETCH_USER_MEAL_DATA_SUCESS,
    userMealData
  };
};
export function fetchUserMealDataFailure(error) {
  return {
    type: FETCH_USER_MEAL_DATA_FAILURE,
    error
  };
};



// async fetchUserMealData
export function fetchUserMealData() {
  return dispatch => {
    dispatch(fetchUserMealDataRequest());
    /*return api call to the database getting all of the meal data
      .then((userMealData) => {
        dispatch(fetchUserMealDataSuccess(userMealData));
      })
      .catch((err) => {
        dispatch(fetchUserMealDataFailure());
      });*/
  };
};
