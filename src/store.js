// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating

import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import promiseMiddleware from 'redux-promise';
import reducers from './reducers/index'; // Or wherever you keep your reducers
import history from './history';

// Build the middleware for intercepting and dispatching navigation actions
const routeMiddleware = routerMiddleware(history);
const store = createStore(
  reducers,
  applyMiddleware(routeMiddleware, promiseMiddleware)
);
export default store;
