import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Modal = ({ isToggled, closeModal, title, content }) => {
  if (!isToggled) {
    return null;
  }

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{title}</p>
            <a className="delete" onClick={closeModal} />
          </header>
          <section className="modal-card-body">
            <div className="content">{content}</div>
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
  content: PropTypes.string
};

const StyledModal = styled(Modal)`
  opacity: 1;
  transition: opacity 300ms ease-in-out;
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
      <section className="section">
        <div className="container">
          <div className="has-text-centered content">
            <button
              className={`button ${buttonColor}`}
              onClick={() => {
                this.toggleModal();
              }}
            >
              {buttonName}
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
      </section>
    );
  }
}

NewsModal.propTypes = {
  buttonName: PropTypes.string,
  buttonColor: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string
};

export default NewsModal;
