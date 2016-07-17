'use strict';

import { SET_ANALYSIS_FILTER, SET_IMAGE_URI } from '../constants/action_types';

export const setAnalysisFilter = (filter) => {
  return {
    type: SET_ANALYSIS_FILTER,
    filter
  };
};

export const setImageUri = (uri) => {
  return {
    type: SET_IMAGE_URI,
    uri
  };
};
