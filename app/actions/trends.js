'use strict';

import { SET_ANALYSIS_FILTER } from '../constants/action_types';

export const setAnalysisFilter = (filter) => {
  return {
    type: SET_ANALYSIS_FILTER,
    filter
  };
};
