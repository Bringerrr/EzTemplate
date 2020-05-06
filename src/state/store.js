import { compose, createStore } from 'redux';

import rootReducer from './reducer';

const composeEnhancers =
  window &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export default createStore(rootReducer, composeEnhancers());
