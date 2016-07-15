'use strict';

import assign from 'lodash/object/assign';
import {
  SET_ANALYSIS_FILTER,
  SET_IMAGE_URI,
  AnalysisFilters
} from '../constants/action_types';

const initialState = {
  analysisFilter: AnalysisFilters.FILTER_DAY,
  imageUri: null
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
    case SET_IMAGE_URI:
      return {
        ...state,
        imageUri: action.uri
      };

    default:
      return state;
  }
};
