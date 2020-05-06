import { combineReducers } from 'redux';
import auth from './auth/reducer';

const reducers = {
  auth,
};

export default combineReducers(reducers);
