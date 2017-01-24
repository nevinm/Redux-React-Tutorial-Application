import { applyMiddleware, createStore, compose } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './reducers';

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  // Specify here name, actionsBlacklist, actionsCreators and other options
}) : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export default createStore(reducer, enhancer);
