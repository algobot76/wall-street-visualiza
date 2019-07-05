import React, { Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
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
import history from './helpers/history';

let isAuthenticated = false;
Tracker.autorun(() => {
  isAuthenticated = !!Meteor.userId();
  // console.log(`is authenticated ${isAuthenticated}`);
  // const unauthenticatedPages = ['/', 'signup'];
  // const authenticatedPages = ['/home', '/about', '/visualiza'];
  // const pathname = history.location.pathname;
  // const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  // const isAuthenticatedPage = authenticatedPages.includes(pathname);
  // const isNotFoundPage = !isUnauthenticatedPage && !isAuthenticatedPage;
  // if (isUnauthenticatedPage && isAuthenticated) {
  //   history.goBack();
  // }
});

function App() {
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
