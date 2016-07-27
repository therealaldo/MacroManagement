'use strict';

import {

  SET_ANALYSIS_FILTER,

  SET_IMAGE_URI,

  FETCH_USER_MEAL_DATA_REQUEST,
  FETCH_USER_MEAL_DATA_SUCCESS,
  FETCH_USER_MEAL_DATA_FAILURE,

} from './action_types';

export function setAnalysisFilter(selectedIndex) {
  return {
    type: SET_ANALYSIS_FILTER,
    selectedIndex
  };
};



export function setImageUri(uri) {
  return {
    type: SET_IMAGE_URI,
    uri
  };
};



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
export function fetchUserMealData(userId) {
  return dispatch => {
    dispatch(fetchUserMealDataRequest());
    return fetch(`http://162.243.164.11/trends/${ userId }`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(fetchUserMealDataSuccess(responseJson));
    })
    .catch((err) => {
      dispatch(fetchUserMealDataFailure(err));
    })
  };
};
