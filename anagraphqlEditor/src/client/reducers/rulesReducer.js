import {
    UPDATE_CURR_RULE, SAVE_CONFIGURATION, UPDATE_NESTED_QUERIES, UPDATE_RESOLVERS, UPDATE_FIELDS
} from '../constants/actionTypes';

const initialState = {
    currRule: {
        numberOfNestedQueries: 1,
        numberOfResolvers: 1,
        numberOfFields: 1
    },
    rules: []
};

const rulesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_CONFIGURATION:
            return {
                ...state,
                rules: [...state.rules, action.payload]
            };
        case UPDATE_CURR_RULE:
            return {
                ...state,
                currRule: {...state.rules[action.payload].rules}
            };
        case UPDATE_NESTED_QUERIES:
            return {
                ...state,
                currRule: {
                    ...state.currRule,
                    numberOfNestedQueries: action.payload
                }
            };
        case UPDATE_FIELDS:
            return {
                ...state,
                currRule: {
                    ...state.currRule,
                    numberOfFields: action.payload
                }
            };
        case UPDATE_RESOLVERS:
            return {
                ...state,
                currRule: {
                    ...state.currRule,
                    numberOfResolvers: action.payload
                }
            };
        default:
            return state;
    }
};

export default rulesReducer;