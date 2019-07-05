import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import NewsEntry from './NewsEntry';
import { fetchHeadlines } from '../actions/headlineActions';

function News() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHeadlines());
  }, []);

  const data = useSelector(state => state.news.headlines);

  return (
    <section className="hero is-fullheight has-background-light">
      <div className="hero-body">
        <div className="columns is-multiline">
          {data &&
            data.map((entry, idx) => (
              <div className="column is-12-tablet is-6-desktop is-4-widescreen">
                <NewsEntry
                  key={idx}
                  image={entry.image}
                  title={entry.title}
                  description={entry.description}
                  url={entry.url}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

News.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

export default News;
