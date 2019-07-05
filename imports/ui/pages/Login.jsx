import React from 'react';
import LoginForm from '../components/LoginForm';

function Login() {
  return (
    <section className="hero is-dark is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
              <LoginForm signupPath="/signup" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
