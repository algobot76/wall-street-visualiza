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
              <p>The Visualiza Web-Application is dedicated to provide a easy-to-navigate 
                <br>users experience, where users can easily access the price of a choosen company</br>
                <br>as well as its related financial information such as news and financial statement of the interested company </br>
                <br>such information will be provided at the click of a button. </br>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
