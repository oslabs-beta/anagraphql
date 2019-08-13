import React from 'react';
import { useSelector } from 'react-redux';
import CodeEditor from './CodeEditor';
import JsonDisplay from './JsonDisplay';
import History from './History';
import Headline from './Headline';
// import MainContainer from "./containers/MainContainer.jsx";
const CodeContainer = () => {
  const response = useSelector(state => state.response.currResponse);
  const currAnagraph = useSelector(state => state.response.currAnagraph);
  const currRule = useSelector(state => state.rules.currRule);
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

        <JsonDisplay json={currRule} />
      </div>
      <div className="Anagraph">
        <JsonDisplay json={currAnagraph} />

      </div>
    </div>
  );
};

export default CodeContainer;
