import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewRule } from '../actions/actions';

const RulesDisplay = () => {
    const rulesList = useSelector(state => state.rules.rules);
    const dispatch = useDispatch();

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(addNewRule(e.target.firstChild.value));
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