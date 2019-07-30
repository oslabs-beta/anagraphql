import React from 'react';
import { useSelector } from 'react-redux';

const ResponseViewer = () => {
  const response = useSelector(state => state.response.currResponse);
  return (
    <div>{JSON.stringify(response, null, 4)}</div>
  );
};

export default ResponseViewer;
