import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateFields, updateNestedQueries, updateResolvers, updateShallowResolvers,
} from '../actions/actions';

const RulesConfiguration = () => {
  const nestedQueriesLimit = useSelector(state => state.rules.currRule.numberOfNestedQueries);
  const resolverLimit = useSelector(state => state.rules.currRule.numberOfResolvers);
  const fieldLimit = useSelector(state => state.rules.currRule.numberOfFields);
  const shallowResolvers = useSelector(state => state.rules.currRule.shallowResolvers);
  const applicableRules = useSelector(state => state.query.applicableRules);
  const dispatch = useDispatch();
  return (
    <div id="rules-grid">
      <div className="rules-col">
        <p>Number of nested queries</p>
        <input type="range" min="0" max="20" value={nestedQueriesLimit} onChange={(e) => { dispatch(updateNestedQueries(Number(e.target.value))); }} id="numberOfNestedQueries" />
        {nestedQueriesLimit}
        <p>Number of resolvers</p>
        <input type="range" min="0" max="20" value={resolverLimit} onChange={(e) => { dispatch(updateResolvers(Number(e.target.value))); }} id="numberOfResolvers" />
        {resolverLimit}
        <p>Number of fields</p>
        <input type="range" min="0" max="20" value={fieldLimit} onChange={(e) => { dispatch(updateFields(Number(e.target.value))); }} id="numberOfFields" />
        {fieldLimit}
      </div>
      <div className="rules-col">
        {Object.keys(applicableRules.shallowResolvers).map(cv => (
          <div>
            <p>
              {cv}
              {' '}
              shallow resolver
            </p>
            <input
              type="range"
              min="0"
              max="20"
              value={shallowResolvers[cv] || 0}
              onChange={(e) => {
                const toReturn = {};
                toReturn[cv] = Number(e.target.value);
                dispatch(updateShallowResolvers(toReturn));
              }}
            />
            {shallowResolvers[cv] || 0}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RulesConfiguration;
