'use strict';

import { combineReducers } from 'redux';
import routes from './routes';
import groceryLists from './grocery_list';
export default combineReducers({
  routes,
  groceryLists
});
