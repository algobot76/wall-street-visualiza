import React from 'react';
import PropTypes from 'prop-types';

function Loading({ text }) {
  return (
    <div className="pageloader">
      <span className="title">{text}</span>
    </div>
  );
}

Loading.propTypes = {
  text: PropTypes.string
};

export default Loading;
