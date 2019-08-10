import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveConfiguration, updateCurrRule } from '../actions/actions';

const RulesDisplay = () => {
    const rulesObject = useSelector(state => state.rules.currRule);
    const rulesList = useSelector(state => state.rules.rules);
    const dispatch = useDispatch();

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(saveConfiguration({ name: e.target.firstChild.value, rules: rulesObject }));
        e.target.firstChild.value = "";
    }

    const onClickHandler = (index) => {
        dispatch(updateCurrRule(index));
    }

    const list = rulesList.map((rule, index) => (
        <li key={rule.name} onClick={() => onClickHandler(index)}>{rule.name}{rule.rules.numberOfNestedQueries}{rule.rules.numberOfResolvers}{rule.rules.numberOfFields}</li>
    ));

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