'use strict';

import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';

const initialState = {
  selectedDate: '',
  mealPlans: [],
  entities: {
    plans: {},
    meals: {},
  },
  mealResults: [],
  pagination: 0,
  totalResults: 0,
  processingTimeMs: 0,
};

export default reducer = (
  state = initialState,
  action = {}
) => {

};
