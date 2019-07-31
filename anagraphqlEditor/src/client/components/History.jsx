import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCurrResponse, updateCurrAnagraph } from '../actions/actions';

const History = () => {
  const responseList = useSelector(state => state.response.responseList);
  const anagraphList = useSelector(state => state.response.anagraphList);

  const dispatch = useDispatch();
  const handleUpdate = (ind) => {
    dispatch(updateCurrResponse(responseList[ind]));
    dispatch(updateCurrAnagraph(anagraphList[ind]));
  };
  const buttons = responseList.map((cv, i) => <button id={i} type="button" onClick={e => handleUpdate(e.currentTarget.id)} />);

  return (
    <div className="history">
      {buttons}
    </div>
  );
};

export default History;
