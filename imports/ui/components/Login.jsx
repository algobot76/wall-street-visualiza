import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

function Login() {
  return (
    <form className="box">
      <div className="field">
        <div className="control has-icons-left">
          <input type="email" className="input" placeholder="Email" />
          <span className="icon is-left">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
        </div>
      </div>
      <div className="field">
        <div className="control has-icons-left">
          <input type="password" className="input" placeholder="Password" />
          <span className="icon is-left">
            <FontAwesomeIcon icon={faKey} />
          </span>
        </div>
      </div>
      <div className="field is-grouped is-grouped-centered">
        <div className="control">
          <button type="submit" className="button is-dark">
            Log in
          </button>
        </div>
        <div className="control">
          <button type="button" className="button is-text">
            Make a new account
          </button>
        </div>
      </div>
    </form>
  );
}

export default Login;
