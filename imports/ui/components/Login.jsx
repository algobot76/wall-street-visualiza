import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { Meteor } from 'meteor/meteor';

function Login() {
  const [error, setError] = useState('');

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onSubmit = e => {
    e.preventDefault();

    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    Meteor.loginWithPassword({ email }, password, err => {
      if (err) {
        setError('Unable to login. Check email and password.');
      } else {
        setError('');
      }
    });
  };

  return (
    <form onSubmit={e => onSubmit(e)} className="box">
      <div className="field">
        <div className="control has-icons-left">
          <input
            ref={emailRef}
            type="email"
            className="input"
            placeholder="Email"
          />
          <span className="icon is-left">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
        </div>
      </div>
      <div className="field">
        <div className="control has-icons-left">
          <input
            ref={passwordRef}
            type="password"
            className="input"
            placeholder="Password"
          />
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
