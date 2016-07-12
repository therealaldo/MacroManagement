'use strict';

import assign from 'lodash/object/assign';
import {
  SET_ANALYSIS_FILTER,
  AnalysisFilters
} from '../constants/action_types';

const initialState = {
  analysisFilter: AnalysisFilters.FILTER_DAY
};

export default function reducer(
  state = initialState,
  action = {}
) {
  switch (action.type) {
    case SET_ANALYSIS_FILTER:
      return {
        ...state,
        analysisFilter: action.filter
      };

    default:
      return state;
  }
};
