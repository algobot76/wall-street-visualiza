import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NewsEntry from './NewsEntry';
import { fetchHeadlines } from '../actions';

class News extends Component {
  componentDidMount() {
    this.props.dispatch(fetchHeadlines());
  }

  render() {
    const { data } = this.props;
    return (
      <section className="hero is-fullheight has-background-light">
        <div className="hero-body">
          <div className="columns is-multiline">
            {data &&
              data.map((entry, idx) => (
                <NewsEntry
                  key={idx}
                  image={entry.image}
                  title={entry.title}
                  description={entry.description}
                  url={entry.url}
                />
              ))}
          </div>
        </div>
      </section>
    );
  }
}

News.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => ({
  data: state.news.headlines
});

export default connect(mapStateToProps)(News);
