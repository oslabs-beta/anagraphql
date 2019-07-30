import { GET_QUERY_RESPONSE, UPDATE_CURR_RESPONSE } from '../constants/actionTypes';

const initialState = {
  currResponse: null,
  responseList: [],
};

const responseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUERY_RESPONSE:
      return {
        currResponse: action.payload,
        responseList: [...state.responseList, action.payload],
      };
    case UPDATE_CURR_RESPONSE:
      return {
        ...state,
        currResponse: action.payload,
      };
    default:
      return state;
  }
};

export default responseReducer;
