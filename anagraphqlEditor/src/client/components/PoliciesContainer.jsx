import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import RulesDisplay from './RulesDisplay';
import RulesConfiguration from './RulesConfiguration';
import JsonDisplay from './JsonDisplay';
import ApplicableRules from './ApplicableRules';

const PoliciesContainer = () => {
  const { CLIENT_RULES } = useSelector(state => state.rules);
  const { applicableRules } = useSelector(state => state.query);
  const [availableRules, setRules] = useState(applicableRules);

  return (
    <div className="policiesContainer">
      <div id="rules-container">
        <ApplicableRules availableRules={availableRules} setRules={setRules} />
        <RulesConfiguration setRules={setRules} availableRules={availableRules} />
        <JsonDisplay json={CLIENT_RULES} />
      </div>
    </div>
  );
};

export default PoliciesContainer;
