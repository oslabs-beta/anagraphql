import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Animated } from 'react-animated-css';
import { updateCurrResponse, updateCurrAnagraph, updateQuery } from '../actions/actions';
// import play from '../play.svg';

const History = ({ handleQuery, hasErrors }) => {
  const responseList = useSelector(state => state.response.history.response);
  const anagraphList = useSelector(state => state.response.history.anagraph);
  const queryList = useSelector(state => state.response.history.query);

  const dispatch = useDispatch();
  const handleUpdate = (e) => {
    const ind = e.target.value;
    // document.querySelectorAll('.current').forEach(cv => cv.removeAttribute('class'));
    // e.currentTarget.parentElement.parentElement.setAttribute('class', 'current');
    dispatch(updateCurrResponse(responseList[ind]));
    dispatch(updateCurrAnagraph(anagraphList[ind]));
    dispatch(updateQuery(queryList[ind]));
  };
  let slider = 'Timeline will be built after a query...';
  if (responseList.length > 0) {
    slider = <input onChange={handleUpdate} type="range" min="1" max={responseList.length} id="timeline" className="historySlider" list="historyList" />;
  }

  const markers = responseList.map((x, i) => (
    <svg height="20" width="5">
      <rect id={i} height="20" width="5" style={{ fill: '#888', borderRadius: 3 }} />
    </svg>
  ));

  return (
    <div className="history">
      <div className="timelineFlex">
        <div className="historyTimeline">
          <div className="marker">
            {markers}
          </div>
          {slider}
        </div>
        <button type="button" onClick={handleQuery} disabled={hasErrors} style={{ cursor: 'grab' }}>Send Query</button>
      </div>
    </div>
  );
};

export default History;
