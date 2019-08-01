import React, { useEffect } from 'react';
import { Animated } from 'react-animated-css';
import {
  Route,
  Link,
} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';
import CodeContainer from './CodeContainer';
import Markdown from 'react-markdown';


const SideBar = () => {
  const readMe = `# anagraphql

  # What is anagraphql?
  
  Anagraphql an express middleware package that can be used to analyze graphQL queries before they interact with a database.
  
  # Installation
  
  To install anagraphql, run the following command in the terminal:
  
  \`\`\`
  npm i anagraphql
  \`\`\`
  
  # Getting started
  
  To use anagraphql in your application, require it into the file where you're setting up your server. 
  
  \`\`\`js
  const anagraphql = require('anagraphql');
  \`\`\`
  
  
  From there, add anagraphql to your app.use function, as you would with any other middleware function. To render the anagraphql interactive playground, set graphiql equal to true, as shown below:
  
  \`\`\`js
  app.use('/graphql',
    (req, res, next) => next(),
    anagraphql({ schema, 
    graphiql: true
    }),
    graphqlHTTP({
      schema,
    }));
  \`\`\`
  # Anangraphql Interactive Playground
  
  More soon...`;
  const routes = [
    {
      path: '/graphql',
      exact: true,
      main: () => (
        <Animated animationIn="fadeInUp" animationInDelay="200">
          <CodeContainer />
        </Animated>
      ),
    },
    {
      path: '/graphql/about',
      exact: true,
      main: () => <ReactMarkdown
      source={readMe}
      renderers={{
        code: CodeBlock,
      }}
    />
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
