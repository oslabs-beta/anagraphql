import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateFields, updateNestedQueries, updateResolvers,
  updateShallowResolvers, updateSpecificResolvers, deleteRule,
} from '../actions/actions';

const buildGlobal = (maxNested, totalResolvers, totalFields, dispatch) => {
  const globalRules = [];
  if (maxNested) {
    globalRules.push(
      <div>
        <button type="button" onClick={() => dispatch(deleteRule('maxNested'))}>X</button>
        <p>Max number of nested queries allowed</p>
        <input type="range" min="0" max="20" value={maxNested} onChange={(e) => { dispatch(updateNestedQueries(Number(e.target.value))); }} id="numberOfNestedQueries" />
        {maxNested}
      </div>,
    );
  }

  if (totalResolvers) {
    globalRules.push(
      <div>
        <button type="button" onClick={() => dispatch(deleteRule('totalResolvers'))}>X</button>
        <p>Max number of resolvers allowed</p>
        <input type="range" min="0" max="20" value={totalResolvers} onChange={(e) => { dispatch(updateResolvers(Number(e.target.value))); }} id="numberOfResolvers" />
        {totalResolvers}
      </div>,
    );
  }

  if (totalFields) {
    globalRules.push(
      <div>
        <button type="button" onClick={() => dispatch(deleteRule('totalFields'))}>X</button>

        <p>Max number of fields allowed</p>
        <input type="range" min="0" max="20" value={totalFields} onChange={(e) => { dispatch(updateFields(Number(e.target.value))); }} id="numberOfFields" />
        {totalFields}
      </div>,
    );
  }

  return globalRules;
};

const buildResolvers = (type, obj, action, dispatch) => Object.keys(obj).map(cv => (
  <div>
    <button type="button" onClick={() => dispatch(deleteRule(`${type.toLowerCase()}Resolvers`, cv))}>X</button>
    <p>
      {cv}
      {' '}
      {`${type} resolver`}
    </p>
    <input
      type="range"
      min="0"
      max="20"
      value={obj[cv] || 0}
      onChange={(e) => {
        const toReturn = {};
        toReturn[cv] = Number(e.target.value);
        dispatch(action(toReturn));
      }}
    />
    {obj[cv] || 0}
  </div>
));

const RulesConfiguration = () => {
  const {
    maxNested, totalResolvers, totalFields, shallowResolvers, specificResolvers,
  } = useSelector(state => state.rules.currRule);
  const dispatch = useDispatch();
  const globalRules = buildGlobal(maxNested, totalResolvers, totalFields, dispatch);
  const shallowRules = buildResolvers('Shallow', shallowResolvers, updateShallowResolvers, dispatch);
  const specificRules = buildResolvers('Specific', specificResolvers, updateSpecificResolvers, dispatch);

  return (

    <div id="rules">
      {specificRules}
      {shallowRules}
      {globalRules}
    </div>
  );
};

export default RulesConfiguration;
