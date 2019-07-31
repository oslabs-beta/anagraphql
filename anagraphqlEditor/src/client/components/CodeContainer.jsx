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
    <div id="container">
      <CodeEditor />
      <JsonDisplay json={response} />
      <JsonDisplay json={anagraph} />
      <History />
    </div>
  );
};

export default CodeContainer;