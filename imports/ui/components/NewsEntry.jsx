import React from 'react';
import PropTypes from 'prop-types';

const NewsEntry = ({ image, title, description }) => {
  return (
    <article className="box">
      <div className="media">
        <aside className="media-left">
          <img src={image} />
        </aside>
        <div className="media-content">
          <h4 className="title">{title}</h4>
          <div className="content">{description}</div>
        </div>
      </div>
    </article>
  );
};

NewsEntry.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};

export default NewsEntry;
