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
      <div className="section has-text-centered">
        <div className="content has-text-centered is-large">
          <p>
            xxxx
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
