import React from 'react';
import { useSelector } from 'react-redux';
import CodeEditor from './CodeEditor';
import JsonDisplay from './JsonDisplay';
import History from './History';
// import MainContainer from "./containers/MainContainer.jsx";
const CodeContainer = () => {
  const response = useSelector(state => state.response.currResponse);
  const anagraph = useSelector(state => state.response.currAnagraph);

  return (
    <div id="container" style={{height: '100%', padding: '10px', margin: '10px'}}>
      <CodeEditor />
      <JsonDisplay json={response} />
      <JsonDisplay json={anagraph} />
      <History />
    </div>
  );
};

export default CodeContainer;