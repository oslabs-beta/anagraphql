import React from 'react';
import { useSelector } from 'react-redux';
import RulesDisplay from './RulesDisplay';
import RulesConfiguration from './RulesConfiguration';
import JsonDisplay from './JsonDisplay';
import ApplicableRules from './ApplicableRules';

const PoliciesContainer = () => {
  const result = useSelector(state => state.rules.currRule);
  return (
    <div className="policiesContainer">
      <div>
        <RulesDisplay />
      </div>
      <div id="rules-container">
        <ApplicableRules />
        <RulesConfiguration />
        <JsonDisplay json={result} />
      </div>
    </div>
  );
};

export default PoliciesContainer;
