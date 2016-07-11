'use strict';

import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';
import {
  ADD_PREFERENCE,
  SAVE_PREFERENCES,
  REMOVE_PREFERENCE,
} from '../constants/action_types';

const initialState = {
  entities: {
    intolerances: {}
  },
  intoleranceList: [],
};

export default reducer = (
  state = initialState,
  action = {}
) => {
  switch (action.type) {
    case ADD_PREFERENCE:
      const intoleranceListArrayLastId = state.intoleranceList.length - 1;
      const newIntoleranceId = state.intoleranceList[intoleranceListArrayLastId] + 1;
      return {
        entities: {
          intolerances: {
            ...state.entities.intolerances,
            [newIntoleranceId]: {
              id: newIntoleranceId,
              name: action.name
            }
          }
        },
        intoleranceList: state.entities.intolerances.concat(newIntoleranceId)
      };
    /*case SAVE_PREFERENCES:
      return {

      };*/
    case REMOVE_PREFERENCE:
      return {
        entities: {
          intolerances: omit(state.entities.intolerances, action.preferenceId)
        },
        intoleranceList: state.intoleranceList.filter(id => id !== action.preferenceId)
      };

    default:
      return state;
  };
};
