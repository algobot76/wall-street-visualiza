import React from 'react';
import PropTypes from 'prop-types';

function Loading({ text }) {
  return (
    <div className="container has-text-centered">
      <progress className="progress is-large is-dark" max={100} />
      <span className="title">{text}</span>
    </div>
  );
}

Loading.propTypes = {
  text: PropTypes.string
};

export default Loading;
