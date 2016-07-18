'use strict';

import {

GET_RSS_REQUEST,
GET_RSS_SUCCESS,
GET_RSS_FAILURE,

} from '../actions/rss_feed/action_types';

const initialState = {
  isFetching: false,
  error: null,
  rssFeed: [],
  totalResults: 0,
};

export default reducer(
  state = initialState,
  action = {}
) {
  switch (action.type) {
    case GET_RSS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };

    case GET_RSS_SUCCESS:
      return {
        isFetching: false,
        error: null,
        rssFeed: action.rssFeed,
        totalResults: action.rssFeed.length
      };

    case GET_RSS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };

    default:
      return state;
  };
};
