import React from 'react';
import RulesDisplay from './RulesDisplay';
import RulesConfiguration from './RulesConfiguration';

const PoliciesContainer = () => {
    return (
        <div>
            <div>
                <RulesDisplay/>
            </div>
            <div>
                <RulesConfiguration/>
            </div>
        </div>
    )
};

export default PoliciesContainer;