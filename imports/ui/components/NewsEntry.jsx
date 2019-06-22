import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Title = styled.a`
  :hover {
    text-decoration: underline;
  }
`;

const NewsEntry = ({ image, title, description, url }) => {
  return (
    <article className="box">
      <div className="media">
        <aside className="media-left">
          <img src={image} width="80" />
        </aside>
        <div className="media-content">
          <Title
            href={url ? url : ''}
            target="_blank"
            className="title is-5 is-spaced is-marginless"
          >
            {title}
          </Title>
          <div className="content is-small">{description}</div>
        </div>
      </div>
    </article>
  );
};

NewsEntry.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string
};

export default NewsEntry;
