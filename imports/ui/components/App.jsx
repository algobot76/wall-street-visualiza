import React from 'react';
import Navbar from './Navbar';
import { Grid } from 'semantic-ui-react';
import Chart from './Chart';
import logo from '../assets/logo.jpg';
import data from '../assets/dummy_stock_prices';

function App() {
  return (
    <div>
      <Grid padded>
        <Navbar logoPath={logo} menuItems={['Home', 'About']} />
        <Chart data={data} title="Stock Market Chart (2016)" />
      </Grid>
    </div>
  );
}

export default App;
