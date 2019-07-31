import React from 'react';
import { Animated } from 'react-animated-css';
import {
  Route,
  Link,
} from 'react-router-dom';
import CodeContainer from './CodeContainer';

const SideBar = () => {
  const routes = [
    {
      path: '/graphql',
      exact: true,
      main: () => (
        <Animated animationIn="fadeInUp">
          <CodeContainer />
        </Animated>
      ),
    },
    {
      path: '/graphql/about',
      exact: true,
      main: () => <h2>This will be our ReadMe file</h2>,
    },
    {
      path: '/graphql/policies',
      exact: true,
      main: () => <h2>This will be our policies component</h2>,
    },
  ];
  return (
    <Animated animationIn="fadeInDown">
      <div style={{ display: 'flex' }}>
        <div
          id="nav"
          style={{
              padding: '10px',
              backgroundColor: '#ff8dd9',
            }}
        >
          <img src="./IMG_0672.jpg" alt="Anagraph Logo" height="300px" />
          <ul style={{
              listStyleType: 'none', padding: 0, height: '500px', width: '200px',
            }}
            >
              <li><Link to="/graphql">Code Editor</Link></li>
              <li><Link to="/graphql/about">About</Link></li>
              <li><Link to="/graphql/policies">Policies</Link></li>
            </ul>
        </div>
        <div style={{ flex: 1, padding: '10px' }}>
          {routes.map(route => (
              <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
            ))}
        </div>
      </div>
    </Animated>
  );
};

export default SideBar;
