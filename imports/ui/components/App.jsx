import React from 'react';
import Navbar from './Navbar';
import { Grid } from 'semantic-ui-react';
import logo from '../assets/logo.jpg';

function App() {
  return (
    <div>
      <Grid padded>
        <Navbar logoPath={logo} menuItems={['Home', 'About']} />
      </Grid>
    </div>
  );
}

export default App;
