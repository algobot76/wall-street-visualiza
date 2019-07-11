import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import PublicRoute from './helpers/PublicRoute';
import PrivateRoute from './helpers/PrivateRoute';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import About from './pages/About';
import Visualiza from './pages/Visualiza';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

import logo from './assets/logo.png';

function App() {
  return (
    <Router>
      <div>
        <Navbar logo={logo} />
        <Switch>
          <PublicRoute exact path="/" component={Login} />
          <PublicRoute path="/signup" component={Signup} />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/about" component={About} />
          <PrivateRoute path="/visualiza" component={Visualiza} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default hot(module)(App);
