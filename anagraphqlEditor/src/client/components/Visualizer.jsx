import React from 'react';
import { useSelector } from 'react-redux';
import d3DataCreator from '../utility/d3DataCreator';
import Graph from './Graph';

const Visualizer = () => {
  const data = d3DataCreator(useSelector(state => state.query.schema));
  return (
    <div>
      <Graph data={data} />
    </div>
  );
};

export default Visualizer;
