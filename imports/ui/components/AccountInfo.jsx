import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Accounts } from 'meteor/accounts-base';
import { withTracker } from 'meteor/react-meteor-data';

const Buttons = styled.div`
  margin-top: 1.2rem;
`;

function AccountInfo({ user }) {
  const [canEdit, setCanEdit] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (user) {
      setEmail(user.emails[0].address);
      setName(user.profile.name);
    }
  }, [user]);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onSubmit = e => {
    e.preventDefault();
    setCanEdit(false);
  };

  return (
    <form onSubmit={e => onSubmit(e)} className="container">
      <fieldset disabled={!canEdit}>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label htmlFor="name" className="label">
              Name
            </label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control has-icons-left">
                <input
                  ref={nameRef}
                  type="text"
                  className="input"
                  defaultValue={name}
                />
                <span className="icon is-left">
                  <FontAwesomeIcon icon={faUser} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label htmlFor="email" className="label">
              Email
            </label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control has-icons-left">
                <input
                  ref={emailRef}
                  type="email"
                  className="input"
                  defaultValue={email}
                />
                <span className="icon is-left">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label htmlFor="password" className="label">
              Password
            </label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control has-icons-left">
                <input ref={passwordRef} type="password" className="input" />
                <span className="icon is-left">
                  <FontAwesomeIcon icon={faKey} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <Buttons>
        <div className="field is-horizontal">
          <div className="field-label" />
          <div className="field-body">
            <div className="field is-grouped">
              {!canEdit ? (
                <div className="control">
                  <button
                    onClick={() => setCanEdit(true)}
                    type="button"
                    className="button is-dark"
                  >
                    Edit
                  </button>
                </div>
              ) : null}
              {canEdit ? (
                <>
                  <div className="control">
                    <button type="submit" className="button is-info">
                      Update
                    </button>
                  </div>
                  <div className="control">
                    <button
                      onClick={() => setCanEdit(false)}
                      type="button"
                      className="button is-danger"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </Buttons>
    </form>
  );
}

AccountInfo.propTypes = {
  user: PropTypes.object
};

export default withTracker(() => {
  return {
    user: Accounts.user()
  };
})(AccountInfo);
