import {
    UPDATE_CURR_RULE, SAVE_CONFIGURATION, UPDATE_NESTED_QUERIES, UPDATE_RESOLVERS, UPDATE_FIELDS
  } from '../constants/actionTypes';
  
  
  // Sets variables for inital query store
  const initialState = {
    currRule: {
      numberOfNestedQueries: null,
      numberOfResolvers: null,
      numberOfFields: null,
    },
    rules: [],
  };
  
  // The queryReducer function contains a seriers of conditionals that perform a specific action based on what action from our imported actions are passed in as an argument
  const rulesReducer = (state = initialState, action) => {
    switch (action.type) {
      case SAVE_CONFIGURATION:
        return {
          ...state,
          rules: [...state.rules, action.payload],
        };
      case UPDATE_CURR_RULE:
        return {
          ...state,
          currRule: action.payload,
        };
      case UPDATE_NESTED_QUERIES:
        return {
          ...state,
          currRule: {
            ...state.currRule,
            numberOfNestedQueries: action.payload,
          }
        };
      case UPDATE_FIELDS:
        return {
          ...state,
          currRule: {
            ...state.currRule,
            numberOfFields: action.payload,
          }
        };
      case UPDATE_RESOLVERS:
        return {
          ...state,
          currRule: {
            ...state.currRule,
            numberOfResolvers: action.payload,
          }
        };
      default:
        return state;
    }
  };
  
  export default rulesReducer;