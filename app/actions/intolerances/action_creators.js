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



// resetPreferences
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
