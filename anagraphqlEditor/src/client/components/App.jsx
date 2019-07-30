import React from 'react';
import { useSelector } from 'react-redux';
import CodeEditor from './CodeEditor';
import JsonDisplay from './JsonDisplay';
import History from './History';
// import MainContainer from "./containers/MainContainer.jsx";
const App = () => {
  const response = useSelector(state => state.response.currResponse);
  const anagraph = useSelector(state => state.response.currAnagraph);

  return (
    <div id="App">
      <h1>Test</h1>
      <CodeEditor />
      <JsonDisplay json={response} />
      <JsonDisplay json={anagraph} />
      <History />
    </div>
  );
};

export default App;
