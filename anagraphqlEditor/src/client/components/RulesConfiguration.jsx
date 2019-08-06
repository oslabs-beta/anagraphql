import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    saveConfiguration, updateCurrRule, updateFields, updateNestedQueries, updateResolvers
  } from '../actions/actions';

const RulesConfiguration = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <p>Number of nested queries</p>
            <input type="range" min="1" max="20" onChange={(e) => {dispatch(updateNestedQueries(e.target.value))}} id="numberOfNestedQueries"/>
            <p>Number of resolvers</p>
            <input type="range" min="1" max="20" onChange={(e) => {dispatch(updateResolvers(e.target.value))}} id="numberOfResolvers"/>
            <p>Number of fields</p>
            <input type="range" min="1" max="20" onChange={(e) => {dispatch(updateFields(e.target.value))}} id="numberOfFields"/>
            <button>Save</button>
        </div>
    );
};

export default RulesConfiguration;