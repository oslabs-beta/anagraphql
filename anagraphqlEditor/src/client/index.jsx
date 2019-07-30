import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';

//Entry point for anagraphql

render(
  <Provider store={store}><App /></Provider>, document.getElementById('root'),
);
