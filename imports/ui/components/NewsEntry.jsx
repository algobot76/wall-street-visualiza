import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const SentimentEmoji = ({ sentiment }) => {
  switch (sentiment) {
    case 'Positive':
      return (
        <span role="img" aria-label="happy">
          🥰
        </span>
      );
    case 'Neutral':
      return (
        <span role="img" aria-label="expressionless">
          😑
        </span>
      );
    case 'Negative':
      return (
        <span role="img" aria-label="vomiting">
          🤮
        </span>
      );
    default:
      return (
        <span role="img" aria-label="thinking">
          🤔
        </span>
      );
  }
};

SentimentEmoji.propTypes = {
  sentiment: PropTypes.string
};

const Title = styled.a`
  :hover {
    text-decoration: underline;
  }
`;

function NewsEntry({ image, title, description, url, sentiment }) {
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
        {sentiment && (
          <aside className="media-right">
            <SentimentEmoji sentiment={sentiment} />
          </aside>
        )}
      </div>
    </article>
  );
}

NewsEntry.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  sentiment: PropTypes.string
};

export default NewsEntry;
