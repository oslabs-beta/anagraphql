import React from 'react';
import RulesDisplay from './RulesDisplay';
import RulesConfiguration from './RulesConfiguration';
import JsonDisplay from './JsonDisplay';
import { useSelector } from 'react-redux';

const PoliciesContainer = () => {
    const result = useSelector(state => state.rules.currRule);
    return (
        <div>
            <div>
                <RulesDisplay/>
            </div>
            <div>
                <RulesConfiguration/>
            </div>
            <div>
                <JsonDisplay json={result}/>
            </div>
        </div>
    )
};

export default PoliciesContainer;