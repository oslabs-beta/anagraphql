import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateFields, updateNestedQueries, updateResolvers,
  updateShallowResolvers, updateSpecificResolvers,
} from '../actions/actions';

const ApplicableRules = () => {
  const dispatch = useDispatch();
  const { applicableRules } = useSelector(state => state.query);
  const { currRule } = useSelector(state => state.rules);
  const globalRules = [
    <div
      onClick={() => {
        if (!('maxNested' in currRule)) dispatch(updateNestedQueries(4));
      }}
      className="rule-item"
    >
      <h4>Max Nested</h4>
    </div>,

    <div
      onClick={() => {
        if (!('totalResolvers' in currRule)) dispatch(updateResolvers(4));
      }}
      className="rule-item"
    >
      <h4>Max Number of Resolvers</h4>

    </div>,

    <div
      onClick={() => {
        if (!('totalFields' in currRule)) dispatch(updateFields(4));
      }}
      className="rule-item"
    >
      <h4>Max Number of Fields</h4>

    </div>,
  ];

  const shallowResolvers = Object.keys(applicableRules.shallowResolvers).map((key) => {
    const payload = {};
    payload[key] = 4;
    return (
      <div
        onClick={() => {
          if (!(key in currRule.shallowResolvers)) dispatch(updateShallowResolvers(payload));
        }}
        className="rule-item"
      >
        {' '}
        <h4>{`Max ${key} Shallow Resolver`}</h4>

      </div>
    );
  });

  const specificResolvers = Object.keys(applicableRules.specificResolvers).map((key) => {
    const payload = {};
    payload[key] = 4;
    return (
      <div
        onClick={() => {
          if (!(key in currRule.specificResolvers)) dispatch(updateSpecificResolvers(payload));
        }}
        className="rule-item"
      >
        {' '}
        <h4>{`Max ${key} Shallow Resolver`}</h4>

      </div>
    );
  });

  return (
    <div>
      {globalRules}
      {shallowResolvers}
      {specificResolvers}
    </div>
  );
};

export default ApplicableRules;
