import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faNewspaper,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NewsEntry from './NewsEntry';

const NewsNotFound = () => (
  <div className="content has-text-centered">
    <p className="title">
      <span className="icon is-large">
        <FontAwesomeIcon icon={faExclamationTriangle} />
      </span>
    </p>
    <p className="subtitle">
      <span>News Not Found</span>
    </p>
  </div>
);

const NewsDisplay = ({ content }) => (
  <div className="column">
    <div className="content">
      {content.map((entry, idx) => (
        <NewsEntry
          key={idx}
          image={entry.image}
          title={entry.title}
          description={entry.description}
          url={entry.url}
          sentiment={entry.sentiment}
        />
      ))}
    </div>
  </div>
);

const Modal = ({ isToggled, closeModal, title, content }) => {
  if (!isToggled) {
    return null;
  }

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-card">
          <header className="modal-card-head">
            {title && (
              <p className="modal-card-title has-text-centered">{title}</p>
            )}
            <a className="delete" onClick={closeModal} />
          </header>
          <section className="modal-card-body">
            {content.length > 0 ? (
              <NewsDisplay content={content} />
            ) : (
              <NewsNotFound />
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isToggled: PropTypes.bool,
  closeModal: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.object)
};

const StyledModal = styled(Modal)`
  opacity: 1;
  transition: opacity 300ms ease-in-out;
`;

const Section = styled.section`
  padding: 0;
`;

function NewsModal({ buttonName, buttonColor = 'is-dark', title, content }) {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <Section className="section is-paddingless">
      <div className="container">
        <div className="has-text-centered content">
          <button
            className={`button is-rounded ${buttonColor}`}
            onClick={() => {
              setIsToggled(!isToggled);
            }}
          >
            <span className="icon is-left">
              <FontAwesomeIcon icon={faNewspaper} />
            </span>
            <span>{buttonName}</span>
          </button>
        </div>
        <StyledModal
          isToggled={isToggled}
          closeModal={() => {
            setIsToggled(!isToggled);
          }}
          title={title}
          content={content}
        />
      </div>
    </Section>
  );
}

NewsModal.propTypes = {
  buttonName: PropTypes.string,
  buttonColor: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.object)
};

export default NewsModal;
