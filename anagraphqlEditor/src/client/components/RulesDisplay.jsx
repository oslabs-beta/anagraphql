import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveConfiguration } from '../actions/actions';

const RulesDisplay = () => {
    const rulesObject = useSelector(state => state.rules.currRule);
    const rulesList = useSelector(state => state.rules.rules)
    const dispatch = useDispatch();

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(rulesObject)
        dispatch(saveConfiguration({name: e.target.firstChild.value, rules: rulesObject}));
        e.target.firstChild.value = "";
    };

    const list = rulesList.map((rule) => (
            <li>{rule}</li>
        )
    );
    
    return (
        <div>
            <form type="submit" onSubmit={handleUpdate}>
                <input id="newRule" type="text" placeholder="Add new rule"></input>
            </form>
            <ul>
                {list}
            </ul>
        </div>
    )
};

export default RulesDisplay;