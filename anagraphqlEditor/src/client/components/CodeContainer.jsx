import React from 'react';
import { useSelector } from 'react-redux';
import CodeEditor from './CodeEditor';
import JsonDisplay from './JsonDisplay';
import History from './History';
import DropDownListOfRules from './DropDownListOfRules';
// import MainContainer from "./containers/MainContainer.jsx";
const CodeContainer = () => {
  const response = useSelector(state => state.response.currResponse);
  const anagraph = useSelector(state => state.response.currAnagraph);
  const result = useSelector(state => state.rules.currRule);

  return (
    <div className="grid-container">
      <div className="Timeline">
        <History />
      </div>
      <div className="GraphQL-Query">
        <CodeEditor />
      </div>
      <div id="top">
        <JsonDisplay json={anagraph} />
        <JsonDisplay json={result} />
        <DropDownListOfRules/>
      </div>
      <div className="Anagraph">
        <JsonDisplay json={anagraph} />
      </div>
    </div>
  );
};

export default CodeContainer;
