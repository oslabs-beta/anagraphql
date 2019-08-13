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
<<<<<<< HEAD
        payload: buildClientSchema(schema.data),
      });
    })
    .catch(err => console.log(err));
=======
        payload: {
          applicableRules: schema.applicableRules,
          schema: buildClientSchema(schema.data),
        },
      });
    });
>>>>>>> dev
};

export const updateCurrResponse = resp => ({
  type: types.UPDATE_CURR_RESPONSE,
  payload: resp,
});

export const getQueryResponse = ({ query, rules }) => (dispatch) => {
  fetch('/graphql', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      override: false,
      rules: {
        specificResolvers: {
          RootQueryType_authors: 3,
        },
        shallowResolvers: {
          authors: 2,
        },
        maxNested: 2,
        totalResolvers: 25,
        totalFields: 60,
      },
    }),
    credentials: 'include',
  })
    .then(response => response.json())
    .then((data) => {
      dispatch({ type: types.GET_QUERY_RESPONSE, payload: data });
    })
    .catch(err => console.log(`error in fetch: ${err}`));
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

export const updateShallowResolvers = obj => ({
  type: types.UPDATE_SHALLOW_RESOLVERS,
  payload: obj,
});
