import React, { Component } from 'react';
import CodeEditor from './CodeEditor';
import ResponseViewer from './ResponseViewer';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
// import MainContainer from "./containers/MainContainer.jsx";
const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>Code Editor</div>,
    main: () => <CodeEditor/>
  },
  {
    path: '/about',
    exact: true,
    sidebar: () => <div>About!</div>,
    main: () => <h2>YYOOOJLKFLJLFJDSOIFJSOIFLKSDFJFOSIJFLKJFDLJFISFLSDK</h2>
  },
  {
    path: '/policies',
    exact: true,
    sidebar: () => <div>Policies!</div>,
    main: () => <h2>LAKJFLKDSJFLSKJFLSKJFLSKJFLSJFLSJFSLKJFLSJD</h2>
  },
]

const App = () => (
  <div id="App">
    <div id="title">
      <h1>AnagraphQL</h1>
    </div>
    <Router>
      <div style={{display: 'flex'}}>
        <div style={{
          padding: '10px',
          background: '#f0f0f0',
        }}>
          <ul style={{listStyleType: 'none', padding: 0}}>
            <li><Link to='/'>Code Editor</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/policies'>Policies</Link></li>
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
    {/* <CodeEditor /> */}
    {/* <ResponseViewer /> */}
  </div>
);

export default App;
