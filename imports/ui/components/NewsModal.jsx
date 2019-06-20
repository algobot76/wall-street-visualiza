import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewsModal extends Component {
  state = {
    isToggled: false
  };

  toggleModel() {
    this.setState(prev => {
      return {
        isToggled: !prev.isToggled
      };
    });
  }

  render() {
    const { title, content } = this.props;
    if (!this.state.isToggled) {
      return null;
    } else {
      return (
        <div
          className="modal is-active has-background-dark"
          style={{ opacity: 1, transition: 'opacity 300ms ease-in-out' }}
        >
          <div className="modal-background" onClick={this.toggleModel} />
          <div className="modal-card">
            <div className="modal-card-head">
              <p className="modal-card-title">{title}</p>
              <button
                className="delete"
                aria-label="close"
                onClick={this.toggleModel}
              />
            </div>
            <section className="modal-card-body">
              <div className="content">{content}</div>
            </section>
          </div>
        </div>
      );
    }
  }
}

NewsModal.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
};

export default NewsModal;
