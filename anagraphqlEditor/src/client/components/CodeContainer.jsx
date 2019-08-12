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
    <div className="grid-container">
      <div className="Timeline">
        <History />
      </div>
      <div className="GraphQL-Query">
        <CodeEditor />
      </div>
      <div className="Response"><JsonDisplay json={response} /></div>
      <div className="Policies">
        <JsonDisplay json={queryRules} />
      </div>
      <div className="Anagraph">
        <JsonDisplay json={anagraph} />
      </div>
    </div>
  );
};

export default CodeContainer;
