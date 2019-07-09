import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NewsEntry from './NewsEntry';
import { fetchHeadline } from '../actions';

function News() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHeadline());
  }, []);

  const data = useSelector(state => state.headlines.entries);

  return (
    <section className="hero is-fullheight has-background-light">
      <div className="hero-body">
        <div className="columns is-multiline">
          {data &&
            data.map((entry, idx) => (
              <div
                key={idx}
                className="column is-12-tablet is-6-desktop is-4-widescreen"
              >
                <NewsEntry
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

export default News;
