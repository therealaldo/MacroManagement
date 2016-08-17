'use strict';

import {

  SET_INTOLERANCE_KEYWORD,

  ADD_INTOLERANCE_REQUEST,
  ADD_INTOLERANCE_SUCCESS,
  ADD_INTOLERANCE_FAILURE,

  REMOVE_INTOLERANCE_REQUEST,
  REMOVE_INTOLERANCE_SUCCESS,
  REMOVE_INTOLERANCE_FAILURE,

} from './action_types';

export function setIntoleranceKeyword(keyword) {
  return {
    type: SET_INTOLERANCE_KEYWORD,
    keyword
  };
};



export function addIntoleranceRequest() {
  return {
    type: ADD_INTOLERANCE_REQUEST,
  };
};
export function addIntoleranceSuccess(intoleranceJson) {
  return {
    type: ADD_INTOLERANCE_SUCCESS,
    intoleranceJson
  };
};
export function addIntoleranceFailure(error) {
  return {
    type: ADD_INTOLERANCE_FAILURE,
    error
  };
};
export function addIntolerance(userId, name) {
  return dispatch => {
    dispatch(addIntoleranceRequest());
    return fetch('http://162.243.164.11/intolerances', {
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
      dispatch(addIntoleranceSuccess(responseJson))
    })
    .catch((err) => {
      dispatch(addIntoleranceFailure(err))
    })
  };
};



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
