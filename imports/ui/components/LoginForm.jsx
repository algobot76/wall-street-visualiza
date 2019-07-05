import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';

const Error = styled.p`
  color: #dc143c;
`;

function LoginForm({ signupPath }) {
  const [error, setError] = useState('');

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onSubmit = e => {
    e.preventDefault();

    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    Meteor.loginWithPassword({ email }, password, err => {
      if (err) {
        setError(err.reason);
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
      {error && (
        <div className="field">
          <Error>{error}</Error>
        </div>
      )}
      <div className="field is-grouped is-grouped-centered">
        <div className="control">
          <button type="submit" className="button is-dark">
            Log in
          </button>
        </div>
        <div className="control">
          <button type="button" className="button is-text">
            <Link to={signupPath}>Make a new account</Link>
          </button>
        </div>
      </div>
    </form>
  );
}

LoginForm.propTypes = {
  signupPath: PropTypes.string
};

export default LoginForm;
