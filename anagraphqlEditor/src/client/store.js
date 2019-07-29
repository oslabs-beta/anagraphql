import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  introspectionQuery,
  introspectionQueryName,
} from './utility/introspectionQueries';
import reducers from './reducers/rootReducer';
import { getSchema } from './actions/actions';

const store = createStore(reducers, applyMiddleware(thunk));
store.dispatch(getSchema({ query: introspectionQuery, operationName: introspectionQueryName }));

export default store;
