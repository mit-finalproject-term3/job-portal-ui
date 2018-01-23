import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authReducer from './authReducer';
import listingReducer from './listingReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  user: userReducer,
  listing: listingReducer,
  auth: authReducer,
  router: routerReducer
});

export default rootReducer;
