import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import About from './pages/About';
import Visualiza from './pages/Visualiza';
import NotFound from './pages/NotFound';

import logo from './assets/logo.png';

let isAuthenticated = false;
Tracker.autorun(() => {
  isAuthenticated = !!Meteor.userId();
});

function App() {
  return (
    <Router>
      <div>
        <Navbar logo={logo} />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/about" component={About} />
          <PrivateRoute path="/visualiza" component={Visualiza} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default App;
