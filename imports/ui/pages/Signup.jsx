import React, { useEffect } from 'react';
import SignupForm from '../components/SignupForm';

function Signup() {
  useEffect(() => {
    document.body.classList.remove('has-navbar-fixed-top');
  }, []);

  return (
    <section className="hero is-dark is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
              <SignupForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
