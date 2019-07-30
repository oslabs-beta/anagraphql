import { GET_QUERY_RESPONSE } from '../constants/actionTypes';


// Sets variables for initial response store
const initialState = {
  currResponse: null,
  responseList: [],
};

//The responseReducer function returns either a default response (state) or, if the GET_QUERY_RESPONSE action type is passed as an argument, returns the current response and response list.

const responseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUERY_RESPONSE:
      return {
        currResponse: action.payload,
        responseList: [action.payload, ...state.responseList],
      };
    default:
      return state;
  }
};

export default responseReducer;
