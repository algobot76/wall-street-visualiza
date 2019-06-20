import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Visualiza from './pages/Visualiza';

import logo from './assets/logo.png';

class App extends Component {
  componentDidMount() {
    document.body.classList.add('has-navbar-fixed-top');
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar logo={logo} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/visualiza" component={Visualiza} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
