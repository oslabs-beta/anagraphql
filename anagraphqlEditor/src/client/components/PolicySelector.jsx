import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCurrRule } from '../actions/actions';

const PolicySelector = () => {
  const [option, setOption] = useState('MERGE');
  const { CLIENT_RULES, SERVER_RULES } = useSelector(state => state.rules);
  const dispatch = useDispatch();
  const update = (str) => {
    setOption(str);
    switch (str) {
      case 'SERVER':
        dispatch(updateCurrRule(SERVER_RULES));
        break;
      case 'CLIENT':
        dispatch(updateCurrRule(CLIENT_RULES));
        break;
      case 'MERGE':
        dispatch(updateCurrRule({
          ...SERVER_RULES,
          ...CLIENT_RULES,
          shallowResolvers: {
            ...SERVER_RULES.shallowResolvers,
            ...CLIENT_RULES.shallowResolvers,
          },
          specificResolvers: {
            ...SERVER_RULES.specificResolvers,
            ...CLIENT_RULES.specificResolvers,
          },
        }));
        break;
      default:
        dispatch(updateCurrRule(CLIENT_RULES));
    }
  };
  useEffect(() => update(option), [option]);
  return (
    <div id="options">
      <div className="radio-options">
        <input
          onChange={e => update(e.currentTarget.value)}
          type="radio"
          id="server"
          name="server"
          value="SERVER"
          checked={option === 'SERVER'}
        />
        <label htmlFor="server">Server Rules</label>
      </div>
      <div className="radio-options">
        <input
          onChange={e => update(e.currentTarget.value)}
          type="radio"
          id="client"
          name="client"
          value="CLIENT"
          checked={option === 'CLIENT'}
        />
        <label htmlFor="client">Client Rules</label>
      </div>
      <div className="radio-options">
        <input
          onChange={e => update(e.currentTarget.value)}
          type="radio"
          id="merge"
          name="merge"
          value="MERGE"
          checked={option === 'MERGE'}
        />
        <label htmlFor="merge">Merge Rules</label>
      </div>
    </div>
  );
};

export default PolicySelector;
