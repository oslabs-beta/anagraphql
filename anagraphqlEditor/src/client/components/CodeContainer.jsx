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
    <div className="grid-container">
      <div className="Timeline">
        <History />
      </div>
      <div className="GraphQL-Query">
        <CodeEditor />
      </div>
<<<<<<< HEAD
      <div id="top">
        <JsonDisplay json={anagraph} />
        {/* <JsonDisplay json={queryRules} /> */}
=======
      <div className="Response"><JsonDisplay json={response} /></div>
      <div className="Policies">
        <JsonDisplay json={currRule} />
      </div>
      <div className="Anagraph">
        <JsonDisplay json={currAnagraph} />
>>>>>>> dev
      </div>
    </div>
  );
};

export default CodeContainer;
