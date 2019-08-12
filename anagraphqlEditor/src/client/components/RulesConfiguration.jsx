import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateFields, updateNestedQueries, updateResolvers, updateShallowResolvers,
} from '../actions/actions';

const RulesConfiguration = () => {
  const {
    maxNested, totalResolvers, totalFields, shallowResolvers,
  } = useSelector(state => state.rules.currRule);
  const applicableRules = useSelector(state => state.query.applicableRules);
  const dispatch = useDispatch();
  return (
    <div id="rules-grid">
      <div className="rules-col">
        <p>Max number of nested queries allowed</p>
        <input type="range" min="0" max="20" value={maxNested} onChange={(e) => { dispatch(updateNestedQueries(Number(e.target.value))); }} id="numberOfNestedQueries" />
        {maxNested}
        <p>Max number of resolvers allowed</p>
        <input type="range" min="0" max="20" value={totalResolvers} onChange={(e) => { dispatch(updateResolvers(Number(e.target.value))); }} id="numberOfResolvers" />
        {totalResolvers}
        <p>Max number of fields allowed</p>
        <input type="range" min="0" max="20" value={totalFields} onChange={(e) => { dispatch(updateFields(Number(e.target.value))); }} id="numberOfFields" />
        {totalFields}
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
