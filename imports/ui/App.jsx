import React, { Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import About from './pages/About';
import Visualiza from './pages/Visualiza';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

import logo from './assets/logo.png';
import history from './helpers/history';

function App({ isAuthenticated }) {
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

  return (
    <Router history={history}>
      <div>
        <Navbar logo={logo} />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
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

export default withTracker(() => {
  return {
    isAuthenticated: !!Meteor.userId()
  };
})(App);
