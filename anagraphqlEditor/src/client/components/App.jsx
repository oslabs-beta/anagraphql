import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import SideBar from './SideBar';


const App = () => (
  <div id="App">
    <div id="topnav" />
    <Router>
      <SideBar />
    </Router>
  </div>
);

export default App;
