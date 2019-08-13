import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { updateCurrRule } from '../actions/actions'

const DropDownButton = () => {
    const currRules = useSelector(state => state.rules.rules);
    console.log(currRules);
    const dispatch = useDispatch();
    const clickHandler = (index) => {
        dispatch(updateCurrRule(index));
    };
    const listOfRules = currRules.map((rule, index) => (
        <Dropdown.Item as="button" onClick={() => clickHandler(index)}>{rule.name}</Dropdown.Item>
    ));
    return (
        <div id="dropdown">
            <DropdownButton id="dropbtn" title="Policies">
                <div id="myDropdown" className="dropdown-content">
                    {listOfRules}
                </div>
            </DropdownButton>
        </div>
    );
};

export default DropDownButton;