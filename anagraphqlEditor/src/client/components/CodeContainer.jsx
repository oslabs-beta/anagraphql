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
      <div id="top">
        <div className="item">
          <CodeEditor />
        </div>
        <div className="item">
          <JsonDisplay json={response} />
        </div>
      </div>
      <div id="top">
        <div className="item">
          <JsonDisplay json={anagraph} />
        </div>
        <div className="item">
          <JsonDisplay json={{ maxNested: 5 }} />
        </div>
      </div>
      <History />
    </div>
  );
};

export default CodeContainer;
