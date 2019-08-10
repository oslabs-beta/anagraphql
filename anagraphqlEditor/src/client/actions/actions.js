import { buildClientSchema } from 'graphql';
import * as types from '../constants/actionTypes';

export const updateQueryHistory = query => ({
  type: types.UPDATE_QUERY_HISTORY,
  payload: query,
});

export const updateQuery = query => ({
  type: types.UPDATE_QUERY,
  payload: query,
});

export const createAnagraph = anagraph => ({
  type: types.CREATE_ANAGRAPH,
  payload: anagraph,
});

export const updateCurrAnagraph = anagraph => ({
  type: types.UPDATE_CURR_ANAGRAPH,
  payload: anagraph,
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
      dispatch({
        type: types.GET_SCHEMA,
        payload: buildClientSchema(schema.data),
      });
    })
    .catch(err => console.log(err));
};

export const updateCurrResponse = resp => ({
  type: types.UPDATE_CURR_RESPONSE,
  payload: resp,
});

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
      dispatch({ type: types.GET_QUERY_RESPONSE, payload: data });
    });
};

export const saveConfiguration = rules => ({
  type: types.SAVE_CONFIGURATION,
  payload: rules,
});

export const updateNestedQueries = num => ({
  type: types.UPDATE_NESTED_QUERIES,
  payload: num,
});

export const updateFields = num => ({
  type: types.UPDATE_FIELDS,
  payload: num,
});

export const updateResolvers = num => ({
  type: types.UPDATE_RESOLVERS,
  payload: num,
});

export const updateCurrRule = index => ({
  type: types.UPDATE_CURR_RULE,
  payload: index,
});