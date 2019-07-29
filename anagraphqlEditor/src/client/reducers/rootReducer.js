import { combineReducers } from 'redux';
import queryReducer from './queryReducer';
import responseReducer from './responseReducer';

export default combineReducers({
  query: queryReducer,
  response: responseReducer,
});
