import React from 'react';

import Navbar from './Navbar';
import ChartContainer from './ChartContainer';

import logo from '../assets/logo.png';

const App = () => {
  return (
    <div>
      <Navbar logo={logo} />
      <ChartContainer />
    </div>
  );
};

export default App;
