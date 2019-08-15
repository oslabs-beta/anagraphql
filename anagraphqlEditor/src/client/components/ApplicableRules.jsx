import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateFields, updateNestedQueries, updateResolvers,
  updateShallowResolvers, updateSpecificResolvers,
} from '../actions/actions';
import Collapsible from './Collapsible';

const ApplicableRules = ({ availableRules, setRules }) => {
  const dispatch = useDispatch();
  const { CLIENT_RULES } = useSelector(state => state.rules);
  const globalRules = [];
  if (availableRules.maxNested) {
    globalRules.push((
      <div className="rule-item">
        <h4>Max Nested</h4>
        <button
          type="button"
          onClick={() => {
            if (!('maxNested' in CLIENT_RULES)) {
              dispatch(updateNestedQueries(4));
              const temp = { ...availableRules };
              delete temp.maxNested;
              setRules(temp);
            }
          }}
        >
        ADD
        </button>
      </div>
    ));
  }
  if (availableRules.totalResolvers) {
    globalRules.push((
      <div className="rule-item">
        <h4>Max Number of Resolvers</h4>
        <button
          type="button"
          onClick={() => {
            if (!('totalResolvers' in CLIENT_RULES)) {
              dispatch(updateResolvers(4));
              const temp = { ...availableRules };
              delete temp.totalResolvers;
              setRules(temp);
            }
          }}
        >
ADD
        </button>
      </div>
    ));
  }

  if (availableRules.totalFields) {
    globalRules.push((
      <div className="rule-item">
        <h4>Max Number of Fields</h4>
        <button
          type="button"
          onClick={() => {
            if (!('totalFields' in CLIENT_RULES)) {
              dispatch(updateFields(4));
              const temp = { ...availableRules };
              delete temp.totalFields;
              setRules(temp);
            }
          }}
        >
ADD
        </button>
      </div>
    ));
  }


  const shallowResolvers = Object.keys(availableRules.shallowResolvers).map((key) => {
    const payload = {};
    payload[key] = 4;
    return (
      <div className="rule-item">
        {' '}
        <h4>{`Max ${key}`}</h4>
        <button
          type="button"
          onClick={() => {
            if (!(key in CLIENT_RULES.shallowResolvers)) {
              dispatch(updateShallowResolvers(payload));
              const temp = { ...availableRules };
              delete temp.shallowResolvers[key];
              setRules(temp);
            }
          }}
        >
ADD
        </button>
      </div>
    );
  });

  const specificResolvers = Object.keys(availableRules.specificResolvers).map((key) => {
    const payload = {};
    payload[key] = 4;
    return (
      <div className="rule-item">
        {' '}
        <h4>{`Max ${key}`}</h4>
        <button
          type="button"
          onClick={() => {
            if (!(key in CLIENT_RULES.specificResolvers)) {
              dispatch(updateSpecificResolvers(payload));
              const temp = { ...availableRules };
              delete temp.specificResolvers[key];
              setRules(temp);
            }
          }}
        >
ADD
        </button>
      </div>
    );
  });

  return (
    <div>
      <Collapsible rules={globalRules} text="Global Rules" />
      <Collapsible rules={shallowResolvers} text="Shallow Resolvers" />
      <Collapsible rules={specificResolvers} text="Specific Resolvers" />
    </div>
  );
};

export default ApplicableRules;
