import React, { Component } from 'react';
import CodeContainer from './CodeContainer';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

const routes = [
  {
    path: '/graphql',
    exact: true,
    sidebar: () => <div>Code Editor!</div>,
    main: () => <CodeContainer/>
  },
  {
    path: '/graphql/about',
    exact: true,
    sidebar: () => <div>About!</div>,
    main: () => <h2>This will be our ReadMe file</h2>
  },
  {
    path: '/graphql/policies',
    exact: true,
    sidebar: () => <div>Policies!</div>,
    main: () => <h2>This will be our policies component</h2>
  },
]

const App = () => (
  <div id="App">
    <div id="title">
      <img src="./IMG_0672.jpg" alt="Anagraph Logo" height="300px"></img>
    </div>
    <Router>
      <div style={{display: 'flex'}}>
        <div style={{
          padding: '10px',
          backgroundColor: '#ff8dd9',
        }}>
          <ul style={{listStyleType: 'none', padding: 0, height: '500px', width: '200px'}}>
            <li><Link to='/graphql'>Code Editor</Link></li>
            <li><Link to='/graphql/about'>About</Link></li>
            <li><Link to='/graphql/policies'>Policies</Link></li>
          </ul>
          {routes.map((route) => {
            return <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.sidebar}
            />
          })}
        </div>
        <div style={{flex: 1, padding: '10px'}}>
          {routes.map((route) => {
            return <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          })}
        </div>
      </div>
    </Router>
  </div>
);

export default App;
