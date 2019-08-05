import {
    ADD_NEW_RULE
  } from '../constants/actionTypes';
  
  
  // Sets variables for inital query store
  const initialState = {
    rules: ['Hi', 'Test'],
  };
  
  // The queryReducer function contains a seriers of conditionals that perform a specific action based on what action from our imported actions are passed in as an argument
  const rulesReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_NEW_RULE:
        return {
            ...state,
            rules: [...state.rules, action.payload],
          };
      default:
        return state;
    }
  };
  
  export default rulesReducer;