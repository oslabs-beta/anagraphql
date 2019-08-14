import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { parse, print } from 'graphql';
import {
  getQueryResponse, updateQueryHistory, updateQuery,
} from '../actions/actions';
import CodeEditor from './CodeEditor';
import JsonDisplay from './JsonDisplay';
import History from './History';
import Headline from './Headline';
// import MainContainer from "./containers/MainContainer.jsx";
const CodeContainer = () => {
  const response = useSelector(state => state.response.currResponse);
  const currAnagraph = useSelector(state => state.response.currAnagraph);
  const { currRule } = useSelector(state => state.rules);
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
      <div className="Timeline">
        <Headline header="Timeline" />
        <History handleQuery={handleQuery} hasErrors={hasErrors} />
      </div>

      <div className="GraphQL-Query">
        <Headline header="Query" />
        <CodeEditor hasErrors={hasErrors} setErrors={setErrors} prettifyQuery={prettifyQuery} />
      </div>

      <div className="Response">
        <Headline header="Response" />
        <JsonDisplay json={response} />
      </div>

      <div className="Policies">
        <Headline header="Policies" />
        <JsonDisplay json={currRule} />
      </div>

      <div className="Anagraph">
        <Headline header="Anagraph" />
        <JsonDisplay json={currAnagraph} />
      </div>
    </div>
  );
};

export default CodeContainer;
