import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';

import logo from './assets/logo.png';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar logo={logo} />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
