import React from 'react';
import { useSelector } from 'react-redux';

const ResponseViewer = () => {
  const response = useSelector(state => state.response.currResponse);
  return (
    <p>{JSON.stringify(response, null, 4)}</p>
  );
};

export default ResponseViewer;
