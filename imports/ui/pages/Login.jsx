import React, { useEffect } from 'react';
import LoginForm from '../components/LoginForm';

function Login() {
  useEffect(() => {
    document.body.classList.remove('has-navbar-fixed-top');
  }, []);

  return (
    <section className="hero is-dark is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
