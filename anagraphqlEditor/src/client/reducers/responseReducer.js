import {
  GET_QUERY_RESPONSE,
  UPDATE_CURR_RESPONSE,
  CREATE_ANAGRAPH,
  UPDATE_CURR_ANAGRAPH,
} from '../constants/actionTypes';


// Sets variables for initial response store
const initialState = {
  currResponse: null,
  currAnagraph: null,
  responseList: [],
  anagraphList: [],
};

//The responseReducer function returns either a default response (state) or, if the GET_QUERY_RESPONSE action type is passed as an argument, returns the current response and response list.

const responseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUERY_RESPONSE:
      return {
        ...state,
        currResponse: action.payload,
        responseList: [...state.responseList, action.payload],
      };
    case UPDATE_CURR_RESPONSE:
      return {
        ...state,
        currResponse: action.payload,
      };
    case CREATE_ANAGRAPH:
      return {
        ...state,
        anagraphList: [...state.anagraphList, action.payload],
        currAnagraph: action.payload,
      };
    case UPDATE_CURR_ANAGRAPH:
      return {
        ...state,
        currAnagraph: action.payload,
      };
    default:
      return state;
  }
};

export default responseReducer;
