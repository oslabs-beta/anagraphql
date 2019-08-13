import React from 'react';
import { Animated } from 'react-animated-css';
import {
  Route,
  Link,
} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';
import CodeContainer from './CodeContainer';
import PoliciesContainer from './PoliciesContainer';

const SideBar = () => {
  const routes = [
    {
      path: '/graphql',
      exact: true,
      main: () => (
        <CodeContainer />
      ),
    },
    {
      path: '/graphql/about',
      exact: true,
      main: () => (
        <ReactMarkdown
          source={readMe}
          renderers={{
            code: CodeBlock,
          }}
        />
      ),
    },
    {
      path: '/graphql/policies',
      exact: true,
      main: () => <PoliciesContainer />,
    },
  ];
  return (
    <Animated animationIn="slideInLeft">
      <div style={{ display: 'flex' }}>
        <div
          id="nav"
          style={{
            padding: '10px',
            backgroundColor: '#FAFAFA',
            borderRight: 'border-left: 1px solid #bbb',
          }}
        >
          <img src="https://i.ibb.co/fHF00bd/IMG-0672.jpg" alt="Anagraph Logo" height="300px" />
          <ul style={{
            listStyleType: 'none', padding: 0, height: '500px', width: '200px',
          }}
          >
            <li><Link to="/graphql">Query</Link></li>
            <li><Link to="/graphql/about">About</Link></li>
            <li><Link to="/graphql/policies">Policies</Link></li>
          </ul>
        </div>
        <div style={{
          flex: 1,
          padding: '0px',
          borderRight: 'border-left: 1px solid #bbb',
        }}
        >
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
