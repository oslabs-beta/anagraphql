import {
  UPDATE_CURR_RULE, SAVE_CONFIGURATION, UPDATE_NESTED_QUERIES,
  UPDATE_RESOLVERS, UPDATE_FIELDS, UPDATE_SHALLOW_RESOLVERS,
  UPDATE_SPECIFIC_RESOLVERS, DELETE_RULE,
} from '../constants/actionTypes';

const initialState = {
  currRule: queryRules || {
    shallowResolvers: {},
    specificResolvers: {},
  },
  SERVER_RULES: queryRules,
  rules: [],
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
      return {
        ...state,
        currRule: {
          ...state.currRule,
          shallowResolvers: { ...state.currRule.shallowResolvers, ...action.payload },
        },
      };
    case UPDATE_SPECIFIC_RESOLVERS:
      return {
        ...state,
        currRule: {
          ...state.currRule,
          specificResolvers: { ...state.currRule.specificResolvers, ...action.payload },
        },
      };
    case DELETE_RULE: {
      if (action.payload.length === 2) {
        const temp = {};
        temp[action.payload[0]] = { ...state.currRule[action.payload[0]] };
        delete temp[action.payload[0]][action.payload[1]];
        return {
          ...state,
          currRule: {
            ...state.currRule,
            ...temp,
          },
        };
      }

      const temp = { ...state, currRule: { ...state.currRule } };
      delete temp.currRule[action.payload[0]];
      return temp;
    }
    default:
      return state;
  }
};

export default rulesReducer;
