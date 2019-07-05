import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons';

function Signup() {
  return (
    <form className="box">
      <div className="field">
        <label htmlFor="name" className="label">
          Name
        </label>
        <div className="control has-icons-left">
          <input type="text" className="input" placeholder="e.g. John Doe" />
          <span className="icon is-left">
            <FontAwesomeIcon icon={faUser} />
          </span>
        </div>
      </div>
      <div className="field">
        <label htmlFor="email" className="label">
          Email
        </label>
        <div className="control has-icons-left">
          <input
            type="email"
            className="input"
            placeholder="e.g. john.doe@example.com"
          />
          <span className="icon is-left">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
        </div>
      </div>
      <div className="field">
        <label htmlFor="password" className="label">
          Password
        </label>
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
            Sign up
          </button>
        </div>
        <div className="control">
          <button type="button" className="button is-dark">
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default Signup;
