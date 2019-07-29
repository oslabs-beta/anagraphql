import {
  UPDATE_QUERY, ADD_SAVED_QUERY, DELETE_SAVED_QUERY, GET_SCHEMA,
} from '../constants/actionTypes';

const initialState = {
  query: '',
  queriesSaved: [],
  schema: null,
};

const queryReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUERY:
      return { ...state, query: action.payload };
    case ADD_SAVED_QUERY:
      return { ...state, queriesSaved: [action.payload, ...state.queriesSaved] };
    case DELETE_SAVED_QUERY:
      return { ...state, queriesSaved: state.queriesSaved.filter((cv, i) => i === action.payload) };
    case GET_SCHEMA:
      return { ...state, schema: action.payload };
    default:
      return state;
  }
};

export default queryReducer;
