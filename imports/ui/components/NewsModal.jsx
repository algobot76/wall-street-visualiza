import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import NewsEntry from './NewsEntry';

const NewsNotFound = () => (
  <div className="content has-text-centered">
    <p className="title">News Not Found</p>
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

class NewsModal extends Component {
  state = {
    isToggled: false
  };

  toggleModal() {
    this.setState({
      isToggled: !this.state.isToggled
    });
  }

  render() {
    const { buttonName, buttonColor = 'is-dark', title, content } = this.props;

    return (
      <Section className="section">
        <div className="container">
          <div className="has-text-centered content">
            <button
              className={`button is-rounded ${buttonColor}`}
              onClick={() => {
                this.toggleModal();
              }}
            >
              <span className="icon is-left">
                <FontAwesomeIcon icon={faNewspaper} />
              </span>
              <span>{buttonName}</span>
            </button>
          </div>
          <StyledModal
            isToggled={this.state.isToggled}
            closeModal={() => {
              this.toggleModal();
            }}
            title={title}
            content={content}
          />
        </div>
      </Section>
    );
  }
}

NewsModal.propTypes = {
  buttonName: PropTypes.string,
  buttonColor: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.object)
};

export default NewsModal;
