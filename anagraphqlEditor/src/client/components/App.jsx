import React from 'react';
import CodeEditor from './CodeEditor';
import ResponseViewer from './ResponseViewer';
import History from './History';
// import MainContainer from "./containers/MainContainer.jsx";
const App = () => (
  <div id="App">
    <h1>Test</h1>
    <CodeEditor />
    <ResponseViewer />
    <History />
  </div>
);

export default App;
