'use strict';

import {
  ADD_INTOLERANCE,
  REMOVE_INTOLERANCE,
} from '../constants/action_types';

export const addIntolerance = (intoleranceId, name) => {
  return {
    type: ADD_INTOLERANCE,
    intoleranceId
    name
  };
};

export const removeIntolerance = (intoleranceId) => {
  return {
    type: REMOVE_INTOLERANCE,
    intoleranceId
  };
};
