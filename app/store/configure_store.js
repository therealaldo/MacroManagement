import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const logger = createLogger();
const middleware = [thunk, logger];
const createStoreWithMiddleware = compose(
  applyMiddleware(...middleware)
)(createStore);

export default function configureStore(initialState){
  const store = createStoreWithMiddleware(reducers, initialState);

  return store;
}
