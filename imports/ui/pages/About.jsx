import React, { Fragment } from 'react';

import HeroTitle from '../components/HeroTitle';

const About = () => {
  return (
    <Fragment>
      <HeroTitle
        title="About"
        subtitle="Learn more about Wall St Visualiza 😘"
        color="is-dark"
      />
      <section className="hero has-text-centered has-background-light is-fullheight">
        <div className="hero-head">
          <div className="container">
            <div className="content has-text-centered is-large">
              <p>xxxx</p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
