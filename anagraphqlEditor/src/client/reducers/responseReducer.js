import { GET_QUERY_RESPONSE } from '../constants/actionTypes';

const initialState = {
  currResponse: null,
  responseList: [],
};

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
