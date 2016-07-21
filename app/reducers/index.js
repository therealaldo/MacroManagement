'use strict';

import { combineReducers } from 'redux';
import groceryLists from './grocery_lists';
import intolerances from './intolerances';
import meals from './meals';
import routes from './routes';
import settings from './settings';
import users from './users';
import rssFeed from './rss_feed';
import trends from './trends';

export default combineReducers({
  groceryLists,
  intolerances,
  meals,
  routes,
  settings,
  users,
  rssFeed,
  trends
});
