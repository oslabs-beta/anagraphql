import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCurrRule } from '../actions/actions'

const DropDownButton = () => {
    const currRules = useSelector(state => state.rules.rules);
    const [toggle, setToggle] = useState(false);
    const dispatch = useDispatch();
    const listOfRules = currRules.map((rule, index) => (
        <li onClick={() => clickHandler(index)}>{rule.name}</li>
    ));
    const clickHandler = (index) => {
        dispatch(updateCurrRule(index));
        setToggle(false);
    };
    return (
        <div className="dropdown" style={{background: 'red'}}>
            <button onClick={() => toggle ? setToggle(false) : setToggle(true) }>Policies</button>
            {toggle ? (
                <ul>
                    {listOfRules}
                </ul>
            ): (null)}
        </div>
    );
};

export default DropDownButton;