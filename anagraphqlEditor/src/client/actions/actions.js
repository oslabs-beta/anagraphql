import { buildClientSchema } from 'graphql';
import * as types from '../constants/actionTypes';



export const updateQuery = query => ({
  type: types.UPDATE_QUERY,
  payload: query,
});

export const addSavedQuery = index => ({
  type: types.ADD_SAVED_QUERY,
  payload: index,
});

export const getSchema = body => (dispatch) => {
  fetch('/graphql', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    credentials: 'include',
  })
    .then(response => response.json())
    .then((schema) => {
      dispatch({ type: types.GET_SCHEMA, payload: buildClientSchema(schema.data) });
    });
};

export const getQueryResponse = query => (dispatch) => {
  fetch('/graphql', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
    credentials: 'include',
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      dispatch({ type: types.GET_QUERY_RESPONSE, payload: data });
    });
};
