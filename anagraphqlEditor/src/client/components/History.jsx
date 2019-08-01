import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCurrResponse, updateCurrAnagraph, updateQuery } from '../actions/actions';

const History = () => {
  const responseList = useSelector(state => state.response.history.response);
  const anagraphList = useSelector(state => state.response.history.anagraph);
  const queryList = useSelector(state => state.response.history.query);

  const dispatch = useDispatch();
  const handleUpdate = (ind) => {
    dispatch(updateCurrResponse(responseList[ind]));
    dispatch(updateCurrAnagraph(anagraphList[ind]));
    dispatch(updateQuery(queryList[ind]));
  };
  // const buttons = responseList.map((cv, i) => <button id={i} type="button" onClick={e => handleUpdate(e.currentTarget.id)} />);
  const buttons = responseList.map((cv, i) => (
    <svg height="50" width="50">
      <circle id={i} cx="25" cy="25" r="20" stroke="black" strokeWidth="2" fill="pink" onClick={e => handleUpdate(e.currentTarget.id)} />
    </svg>
  ));

  return (
    <div className="history">
      {buttons}
    </div>
  );
};

export default History;
