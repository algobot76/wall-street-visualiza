import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Accounts } from 'meteor/accounts-base';

const Error = styled.p`
  color: #dc143c;
`;

function Signup() {
  const [error, setError] = useState('');

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onSubmit = e => {
    e.preventDefault();

    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    const profile = { name };

    Accounts.createUser({ email, password, profile }, err => {
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
        <label htmlFor="name" className="label">
          Name
        </label>
        <div className="control has-icons-left">
          <input
            ref={nameRef}
            type="text"
            className="input"
            placeholder="e.g. John Doe"
          />
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
            ref={emailRef}
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
          <input ref={passwordRef} type="password" className="input" />
          <span className="icon is-left">
            <FontAwesomeIcon icon={faKey} />
          </span>
        </div>
      </div>
      <div className="field">
        <Error>{error}</Error>
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
