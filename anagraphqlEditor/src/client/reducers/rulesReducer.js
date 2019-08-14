import {
  UPDATE_CURR_RULE, SAVE_CONFIGURATION, UPDATE_NESTED_QUERIES,
  UPDATE_RESOLVERS, UPDATE_FIELDS, UPDATE_SHALLOW_RESOLVERS,
  UPDATE_SPECIFIC_RESOLVERS, DELETE_RULE, UPDATE_CLIENT_RULES,
} from '../constants/actionTypes';

const initialState = {
  currRule: queryRules || {
    shallowResolvers: {},
    specificResolvers: {},
  },
  CLIENT_RULES: {
    shallowResolvers: {},
    specificResolvers: {},
  },
  SERVER_RULES: queryRules || {
    shallowResolvers: {},
    specificResolvers: {},
  },
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
        currRule: action.payload,
      };
    case UPDATE_NESTED_QUERIES:
      return {
        ...state,
        CLIENT_RULES: {
          ...state.CLIENT_RULES,
          maxNested: action.payload,
        },
      };
    case UPDATE_FIELDS:
      return {
        ...state,
        CLIENT_RULES: {
          ...state.CLIENT_RULES,
          totalFields: action.payload,
        },
      };
    case UPDATE_RESOLVERS:
      return {
        ...state,
        CLIENT_RULES: {
          ...state.CLIENT_RULES,
          totalResolvers: action.payload,
        },
      };
    case UPDATE_SHALLOW_RESOLVERS:
      return {
        ...state,
        CLIENT_RULES: {
          ...state.CLIENT_RULES,
          shallowResolvers: { ...state.CLIENT_RULES.shallowResolvers, ...action.payload },
        },
      };
    case UPDATE_SPECIFIC_RESOLVERS:
      return {
        ...state,
        CLIENT_RULES: {
          ...state.CLIENT_RULES,
          specificResolvers: { ...state.CLIENT_RULES.specificResolvers, ...action.payload },
        },
      };
    case DELETE_RULE: {
      if (action.payload.length === 2) {
        const temp = {};
        temp[action.payload[0]] = { ...state.CLIENT_RULES[action.payload[0]] };
        delete temp[action.payload[0]][action.payload[1]];
        return {
          ...state,
          CLIENT_RULES: {
            ...state.CLIENT_RULES,
            ...temp,
          },
        };
      }

      const temp = { ...state, CLIENT_RULES: { ...state.CLIENT_RULES } };
      delete temp.CLIENT_RULES[action.payload[0]];
      return temp;
    }
    case UPDATE_CLIENT_RULES:
      return {
        ...state,
        CLIENT_RULES: action.payload,
      };
    default:
      return state;
  }
};

export default rulesReducer;
