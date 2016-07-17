'use strict';

import { combineReducers } from 'redux';
import groceryLists from './grocery_lists';
import intolerances from './intolerances';
import meals from './meals';
import routes from './routes';
import settings from './settings';
import users from './users';
import {

  RESET_ALL_SETTINGS_REQUEST,
  RESET_ALL_SETTINGS_SUCCESS,
  RESET_ALL_SETTINGS_FAILURE,

} from '../actions/settings/action_types';

export default reduceReducers(
  export default combineReducers({
    groceryLists,
    intolerances,
    meals,
    routes,
    settings,
    users
  }),
  (state, action) => {
    switch (action.type) {
      case RESET_ALL_SETTINGS_REQUEST:
        return {
          ...state,
          isFetching: true,
          error: null
        };

      case RESET_ALL_SETTINGS_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: action.error
        };

      case RESET_ALL_SETTINGS_SUCCESS:
        return {
          ...state,
          groceryLists: state.groceryLists,
          intolerances: state.intolerances,
          meals: state.meals,
          settings: state.settings,
        };

      default:
        return state;
    };
  };
);
