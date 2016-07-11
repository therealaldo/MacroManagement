'use strict';

import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';

const initialState = {
  settings: {
    nutritionFacts: false,
    notifications: false,
    recommendations: false,
  }
};

export default reducer = (
  state = initialState,
  action = {}
) => {

};
