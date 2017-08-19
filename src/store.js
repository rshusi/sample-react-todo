import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import reducers from './reducers';

// Put all development middlewares here
let middlewares = applyMiddleware(logger);

if (process.env.NODE_ENV === 'production') {
  middlewares = applyMiddleware();
}

const store = createStore(
  reducers,
  {},
  middlewares,
);

export default store;
