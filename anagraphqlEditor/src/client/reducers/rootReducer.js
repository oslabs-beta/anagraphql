import { combineReducers } from 'redux';
import queryReducer from './queryReducer';
import responseReducer from './responseReducer';

//The combineReducers function (which is a method on the redux object) takes the evaluated results of both the queryReducer and the responseReducer and exports them an a single object.

export default combineReducers({
  query: queryReducer,
  response: responseReducer,
});
