import React from 'react';
import PropTypes from 'prop-types';

import NewsEntry from './NewsEntry';

const News = ({ data }) => {
  return (
    <section className="section">
      <div className="columns is-multiline">
        <div className="column is-12-tablet is-6-desktop is-4-widescreen">
          {data &&
            data.map((entry, idx) => (
              <NewsEntry
                key={idx}
                image={entry.image}
                title={entry.title}
                description={entry.description}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

News.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

export default News;
