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
  const { currRule, SERVER_RULES } = useSelector(state => state.rules);
  const { query } = useSelector(state => state.query);

  const [hasErrors, setErrors] = useState(true);
  const [option, setOption] = useState('SERVER');
  const dispatch = useDispatch();

  const prettifyQuery = () => dispatch(updateQuery(print(parse(query))));

  const handleQuery = () => {
    if (!hasErrors) {
      prettifyQuery();
      let payload;
      switch (option) {
        case 'SERVER':
          payload = { query, currRule: SERVER_RULES };
          break;
        case 'CLIENT':
          payload = { query, currRule };
          break;
        case 'MERGE':
          payload = {
            query,
            currRule: {
              ...SERVER_RULES,
              ...currRule,
              shallowResolvers: {
                ...SERVER_RULES.shallowResolvers,
                ...currRule.shallowResolvers,
              },
              specificResolvers: {
                ...SERVER_RULES.specificResolvers,
                ...currRule.specificResolvers,
              },
            },
          };
          break;
        default:
          payload = { query, currRule };
      }
      console.log(payload);
      dispatch(getQueryResponse(payload));
      dispatch(updateQueryHistory(print(parse(query))));
    }
  };

  return (
    <div className="grid-container">
      <div className="Timeline">
        <Headline header="Timeline" />
        <History />
      </div>
      <div className="GraphQL-Query">
        <Headline header="Query" handleQuery={handleQuery} hasErrors={hasErrors} setOption={setOption} />
        <CodeEditor hasErrors={hasErrors} setErrors={setErrors} prettifyQuery={prettifyQuery} />
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
      <div id="top">
        <JsonDisplay json={anagraph} />
        {/* <JsonDisplay json={queryRules} /> */}
=======
      <div className="Response"><JsonDisplay json={response} /></div>
=======
      <div className="Response">
        <Headline header="Response" />
        <JsonDisplay json={response} />

      </div>
>>>>>>> dev
      <div className="Policies">

        <Headline header="Policies" />
        <JsonDisplay json={currRule} />
      </div>
      <div className="Anagraph">

        <Headline header="Anagraph" />
        <JsonDisplay json={currAnagraph} />
<<<<<<< HEAD
>>>>>>> dev
=======

>>>>>>> dev
      </div>
    </div>
  );
};

export default CodeContainer;
