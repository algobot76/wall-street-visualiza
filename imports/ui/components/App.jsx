import React from 'react';

import Navbar from './Navbar';
import Chart from './Chart';

import logo from '../assets/logo.png';

const data = [
  { date: 'Dec 02', price: 109.9 },
  { date: 'Dec 05', price: 109.11 },
  { date: 'Dec 06', price: 109.95 },
  { date: 'Dec 07', price: 111.03 },
  { date: 'Dec 08', price: 112.12 },
  { date: 'Dec 09', price: 113.95 },
  { date: 'Dec 12', price: 113.3 },
  { date: 'Dec 13', price: 115.19 },
  { date: 'Dec 14', price: 115.19 },
  { date: 'Dec 15', price: 115.82 },
  { date: 'Dec 16', price: 115.97 },
  { date: 'Dec 19', price: 116.64 },
  { date: 'Dec 20', price: 116.95 },
  { date: 'Dec 21', price: 117.06 },
  { date: 'Dec 22', price: 116.29 },
  { date: 'Dec 23', price: 116.52 },
  { date: 'Dec 27', price: 117.26 },
  { date: 'Dec 28', price: 116.76 },
  { date: 'Dec 29', price: 116.73 },
  { date: 'Dec 30', price: 115.82 }
];

const title = 'Chart Title';

const App = () => {
  return (
    <div>
      <Navbar logo={logo} />
      <Chart data={data} title={title} />
    </div>
  );
};

export default App;
