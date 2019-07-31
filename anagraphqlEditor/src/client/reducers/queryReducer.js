import {
  UPDATE_QUERY, GET_SCHEMA,
} from '../constants/actionTypes';


// Sets variables for inital query store
const initialState = {
  query: '',
  schema: null,
};

// The queryReducer function contains a seriers of conditionals that perform a specific action based on what action from our imported actions are passed in as an argument
const queryReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUERY:
      return { ...state, query: action.payload };
    case GET_SCHEMA:
      return { ...state, schema: action.payload };
    default:
      return state;
  }
};

export default queryReducer;
