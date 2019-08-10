import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    updateFields, updateNestedQueries, updateResolvers
} from '../actions/actions';

const RulesConfiguration = () => {
    const nestedQueriesLimit = useSelector(state => state.rules.currRule.numberOfNestedQueries);
    const resolverLimit = useSelector(state => state.rules.currRule.numberOfResolvers);
    const fieldLimit = useSelector(state => state.rules.currRule.numberOfFields);
    const dispatch = useDispatch();
    return (
        <div>
            <p>Number of nested queries</p>
            <input type="range" min="1" max="20" value={nestedQueriesLimit} onChange={(e) => {dispatch(updateNestedQueries(e.target.value))}} id="numberOfNestedQueries"/>{nestedQueriesLimit}
            <p>Number of resolvers</p>
            <input type="range" min="1" max="20" value={resolverLimit} onChange={(e) => {dispatch(updateResolvers(e.target.value))}} id="numberOfResolvers"/>{resolverLimit}
            <p>Number of fields</p>
            <input type="range" min="1" max="20" value={fieldLimit} onChange={(e) => {dispatch(updateFields(e.target.value))}} id="numberOfFields"/>{fieldLimit}
        </div>
    )
};

export default RulesConfiguration;