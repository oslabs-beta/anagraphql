import {
  UPDATE_CURR_RULE, SAVE_CONFIGURATION, UPDATE_NESTED_QUERIES,
  UPDATE_RESOLVERS, UPDATE_FIELDS, UPDATE_SHALLOW_RESOLVERS,
} from '../constants/actionTypes';

const initialState = {
  currRule: queryRules || {
    shallowResolvers: {},
    specificResolvers: {},
  },
  rules: queryRules ? [{ name: 'SERVER CONFIG', rules: queryRules }] : [],
};


const rulesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CONFIGURATION:
      return {
        ...state,
        rules: [...state.rules, action.payload],
      };
    case UPDATE_CURR_RULE:
      return {
        ...state,
        currRule: { ...state.rules[action.payload].rules },
      };
    case UPDATE_NESTED_QUERIES:
      return {
        ...state,
        currRule: {
          ...state.currRule,
          maxNested: action.payload,
        },
      };
    case UPDATE_FIELDS:
      return {
        ...state,
        currRule: {
          ...state.currRule,
          totalFields: action.payload,
        },
      };
    case UPDATE_RESOLVERS:
      return {
        ...state,
        currRule: {
          ...state.currRule,
          totalResolvers: action.payload,
        },
      };
    case UPDATE_SHALLOW_RESOLVERS:
      // console.log({ ...state.shallowResolvers, ...action.payload });
      return {
        ...state,
        currRule: {
          ...state.currRule,
          shallowResolvers: { ...state.currRule.shallowResolvers, ...action.payload },
        },
      };
    default:
      return state;
  }
};

export default rulesReducer;
