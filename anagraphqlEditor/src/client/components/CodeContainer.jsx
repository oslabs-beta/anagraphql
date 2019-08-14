import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { parse, print } from 'graphql';
import {
  getQueryResponse, updateQueryHistory, updateQuery,
} from '../actions/actions';
import CodeEditor from './CodeEditor';
import JsonDisplay from './JsonDisplay';
import History from './History';
// import MainContainer from "./containers/MainContainer.jsx";
const CodeContainer = () => {
  const response = useSelector(state => state.response.currResponse);
  const currAnagraph = useSelector(state => state.response.currAnagraph);
  const currRule = useSelector(state => state.rules.currRule);
  const { query } = useSelector(state => state.query);

  const [hasErrors, setErrors] = useState(true);
  const dispatch = useDispatch();

  const prettifyQuery = () => dispatch(updateQuery(print(parse(query))));

  const handleQuery = () => {
    if (!hasErrors) {
      prettifyQuery();
      dispatch(getQueryResponse({ query, currRule }));
      dispatch(updateQueryHistory(print(parse(query))));
    }
  };

  return (
    <div className="grid-container">
      <div id="sendQuery">
        <button type="button" onClick={handleQuery} disabled={hasErrors} style={{ cursor: 'grab' }}>Send Query</button>
      </div>
      <div className="Timeline">
        <History />
      </div>
      <div className="GraphQL-Query">
        <CodeEditor hasErrors={hasErrors} setErrors={setErrors} prettifyQuery={pret} />
      </div>
      <div className="Response"><JsonDisplay json={response} /></div>
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
