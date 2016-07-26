'use strict';

import {

  ADD_INTOLERANCE_REQUEST,
  ADD_INTOLERANCE_SUCCESS,
  ADD_INTOLERANCE_FAILURE,

  REMOVE_INTOLERANCE_REQUEST,
  REMOVE_INTOLERANCE_SUCCESS,
  REMOVE_INTOLERANCE_FAILURE,

  RESET_INTOLERANCES_REQUEST,
  RESET_INTOLERANCES_SUCCESS,
  RESET_INTOLERANCES_FAILURE,

} from './action_types';

// addIntolerance
export function addIntoleranceRequest() {
  return {
    type: ADD_INTOLERANCE_REQUEST,
  };
};
export function addIntoleranceSuccess(intoleranceId, name) {
  return {
    type: ADD_INTOLERANCE_SUCCESS,
    intoleranceId
    name
  };
};
export function addIntoleranceFailure(error) {
  return {
    type: ADD_INTOLERANCE_FAILURE,
    error
  };
};



// removeIntolerance
export function removeIntoleranceRequest() {
  return {
    type: REMOVE_INTOLERANCE_REQUEST,
  };
};
export function removeIntoleranceSuccess(intoleranceId) {
  return {
    type: REMOVE_INTOLERANCE_SUCCESS,
    intoleranceId
  };
};
export function removeIntoleranceFailure(error) {
  return {
    type: REMOVE_INTOLERANCE_FAILURE,
    error
  };
};



// resetIntolerances
export function resetIntolerancesRequest() {
  return {
    type: RESET_PREFERENCES_REQUEST,
  };
};
export function resetIntolerancesSuccess(intolerances) {
  return {
    type: RESET_PREFERENCES_SUCCESS,
    intolerances
  };
};
export function resetIntolerancesFailure(error) {
  return {
    type: RESET_PREFERENCES_FAILURE,
    error
  };
};



// async addIntolerance
export function addIntolerance(userId, name) {
  return dispatch => {
    dispatch(addIntoleranceRequest());
    return fetch('http://162.243.164.11/meals', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: userId,
        name: name
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(addIntoleranceSuccess(responseJson.intoleranceId, responseJson.name))
    })
    .catch((err) => {
      dispatch(addIntoleranceFailure(err))
    })
  };
};



// async removeIntolerance
export function removeIntolerance(intoleranceId, userId) {
  return dispatch => {
    dispatch(removeIntoleranceRequest());
    return fetch('http://162.243.164.11/intolerances', {
      method: 'DELETE',
      body: JSON.stringify({
        intoleranceId: intoleranceId,
        userId: userId
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(removeIntoleranceSuccess(intoleranceId))
    })
    .catch((err) => {
      dispatch(removeIntoleranceFailure(err))
    })
  };
};



// async resetIntolerances
export function resetIntolerances() {
  return dispatch => {
    dispatch(resetIntolerancesRequest());
    /*return api call sending through the grocery item to the database
      .then((intolerances) => {
        dispatch(resetIntolerancesSuccess(intolerances));
      })
      .catch((err) => {
        dispatch(resetIntolerancesFailure(err));
        return;
      })*/
  };
};
