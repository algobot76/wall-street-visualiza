import React from 'react';
import Navbar from './Navbar';
import { Grid } from 'semantic-ui-react';

function App() {
  const logo =
    'https://raw.githubusercontent.com/algobot76/wall-street-visualiza/master/logo.jpg';
  return (
    <div>
      <Grid padded>
        <Navbar logoPath={logo} menuItems={['Home', 'About']} />
      </Grid>
    </div>
  );
}

export default App;
