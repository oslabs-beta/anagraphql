import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCurrRule } from '../actions/actions';

const DropDownListOfRules = () => {
    const lookAtState = useSelector(state => state.rules.rules);
    const [displayMenu, changeDisplayMenu] = useState(false);
    
    const dispatch = useDispatch();
    const list = lookAtState.map((rule, index) => (
        <li key={rule.name} onClick={() => onClickHandler(index)}>{rule.name}{rule.rules.numberOfNestedQueries}{rule.rules.numberOfResolvers}{rule.rules.numberOfFields}</li>
    ));

    const onClickHandler = (index) => {
        dispatch(updateCurrRule(index));
        changeDisplayMenu(false);
    }

    return (
        <div className="dropdown" style={{background: 'red'}}>
            <button onClick={() => changeDisplayMenu(true)}>Policies</button>
            {displayMenu ? (
                <ul>
                    {list}
                </ul>
            ): (null)}
        </div>
    )
};

export default DropDownListOfRules;