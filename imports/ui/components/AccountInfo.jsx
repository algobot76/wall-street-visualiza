import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

const Buttons = styled.div`
  margin-top: 1.2rem;
`;

function AccountInfo() {
  const [canEdit, setCanEdit] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <form className="container">
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
                <input ref={nameRef} type="text" className="input" />
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
                <input ref={emailRef} type="email" className="input" />
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
            <div className="field">
              <div className="control">
                <button
                  onClick={() => setCanEdit(true)}
                  type="button"
                  className="button is-dark"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </Buttons>
    </form>
  );
}

export default AccountInfo;
