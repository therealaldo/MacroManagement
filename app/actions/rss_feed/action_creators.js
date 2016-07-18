'use strict';

import api from '../../utils/api';
import {

GET_RSS_REQUEST,
GET_RSS_SUCCESS,
GET_RSS_FAILURE,

} from './action_types';

// getRss
export function getRssRequest() {
  return {
    type: GET_RSS_REQUEST,
  };
};
export function getRssSuccess(rssFeed) {
  return {
    type: GET_RSS_SUCCESS,
    rssFeed
  };
};
export function getRssFailure(error) {
  return {
    type: GET_RSS_FAILURE,
    error
  };
};



// async getRss
export function getRss() {
  return dispatch => {
    dispatch(getRssRequest());
    return api.getRssFeed()
    .then((response) => {
      dispatch(getRssSuccess(response));
    })
    .catch((err) => {
      dispatch(getRssFailure(err));
    })
  };
};
