import React from 'react';
import Navbar from './Navbar';
import { Grid } from 'semantic-ui-react';

function App() {
  return (
    <div>
      <Grid padded>
        <Navbar menuItems={['foo', 'bar']} />
      </Grid>
    </div>
  );
}

export default App;
