import React from 'react';
import PropTypes from 'prop-types';

const HeroTitle = ({ title = '', subtitle = '', color = '' }) => {
  return (
    <section className={`hero ${color}`}>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">{title}</h1>
          <h2 className="subtitle">{subtitle}</h2>
        </div>
      </div>
    </section>
  );
};

HeroTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  color: PropTypes.oneOf([
    'is-primary',
    'is-info',
    'is-success',
    'is-warning',
    'is-danger',
    'is-light',
    'is-dark'
  ])
};

export default HeroTitle;
