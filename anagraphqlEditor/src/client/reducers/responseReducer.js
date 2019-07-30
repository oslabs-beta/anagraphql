import {
  GET_QUERY_RESPONSE,
  UPDATE_CURR_RESPONSE,
  CREATE_ANAGRAPH,
  UPDATE_CURR_ANAGRAPH,
} from '../constants/actionTypes';

const initialState = {
  currResponse: null,
  currAnagraph: null,
  responseList: [],
  anagraphList: [],
};

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
