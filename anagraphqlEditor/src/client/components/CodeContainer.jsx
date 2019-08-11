import React from 'react';
import { useSelector } from 'react-redux';
import CodeEditor from './CodeEditor';
import JsonDisplay from './JsonDisplay';
import History from './History';
// import MainContainer from "./containers/MainContainer.jsx";
const CodeContainer = () => {
  const response = useSelector(state => state.response.currResponse);
  const currAnagraph = useSelector(state => state.response.currAnagraph);
  const currRule = useSelector(state => state.rules.currRule);
  return (
    <div id="container">
      <div id="top">
        <CodeEditor />
        <JsonDisplay json={response} />
      </div>
      <div id="top">
        <JsonDisplay json={currAnagraph} />
        <JsonDisplay json={currRule} />
      </div>
      <History />
    </div>
  );
};

export default CodeContainer;
