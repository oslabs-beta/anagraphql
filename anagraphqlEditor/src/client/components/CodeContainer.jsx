import React from 'react';
import { useSelector } from 'react-redux';
import CodeEditor from './CodeEditor';
import JsonDisplay from './JsonDisplay';
import History from './History';
import Headline from './Headline';
// import MainContainer from "./containers/MainContainer.jsx";
const CodeContainer = () => {
  const response = useSelector(state => state.response.currResponse);
  const anagraph = useSelector(state => state.response.currAnagraph);

  return (
    <div className="grid-container">
      <div className="Timeline">
        <Headline header="Timeline" />
        <History />
      </div>
      <div className="GraphQL-Query">
        <Headline header="Query" />
        <CodeEditor />
      </div>
      <div className="Response">

        <Headline header="Response" />
        <JsonDisplay json={response} />

      </div>
      <div className="Policies">

        <Headline header="Policies" />
        <JsonDisplay json={queryRules} />
      </div>
      <div className="Anagraph">

        <Headline header="Anagraph" />
        <JsonDisplay json={anagraph} />
      </div>
    </div>
  );
};

export default CodeContainer;
