'use strict';

import {

  ADD_INTOLERANCE_REQUEST,
  ADD_INTOLERANCE_SUCCESS,
  ADD_INTOLERANCE_FAILURE,

  REMOVE_INTOLERANCE_REQUEST,
  REMOVE_INTOLERANCE_SUCCESS,
  REMOVE_INTOLERANCE_FAILURE,

} from '../constants/action_types';

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
export function addIntoleranceFailure(err) {
  return {
    type: ADD_INTOLERANCE_FAILURE,
    err
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
export function removeIntoleranceFailure(err) {
  return {
    type: REMOVE_INTOLERANCE_FAILURE,
    err
  };
};
