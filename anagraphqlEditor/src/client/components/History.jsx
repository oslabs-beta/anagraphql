import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCurrResponse, updateCurrAnagraph, updateQuery } from '../actions/actions';
import { Animated } from 'react-animated-css';

const History = () => {
  const responseList = useSelector(state => state.response.history.response);
  const anagraphList = useSelector(state => state.response.history.anagraph);
  const queryList = useSelector(state => state.response.history.query);

  const dispatch = useDispatch();
  const handleUpdate = (e) => {
    const ind = e.target.id;
    document.querySelectorAll('#current').forEach(cv=>cv.removeAttribute('id'))
    e.currentTarget.parentElement.parentElement.setAttribute('id', 'current')
    dispatch(updateCurrResponse(responseList[ind]));
    dispatch(updateCurrAnagraph(anagraphList[ind]));
    dispatch(updateQuery(queryList[ind]));
  };
  // const buttons = responseList.map((cv, i) => <button id={i} type="button" onClick={e => handleUpdate(e.currentTarget.id)} />);
  const buttons = responseList.map((cv, i) => (
    <Animated animationIn="fadeInUp" >
    <svg height="50" width="50">
        <circle id={i} cx="25" cy="25" r="20" stroke="black" strokeWidth="2" fill={cv["String"] === "Rule violation"? "red" : "pink"} onClick={handleUpdate} />
    </svg>
    </Animated>
  ));

  return (
    <div className="history">
      {buttons}
    </div>
  );
};

export default History;
