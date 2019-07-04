import React, { Fragment } from 'react';

import logo from '../assets/logo.png';
import HeroTitle from '../components/HeroTitle';

function About() {
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
              <p>
                The Visualiza Web-Application is dedicated to provide a
                easy-to-navigate users experience, where users can easily access
                the price of a choosen company
                <br />
                as well as its related financial information such as news and
                financial statement of the interested company <br />
                such information will be provided at the click of a button.
              </p>
            </div>
            <figure className="image container is-128x128">
              <img src={logo} />
            </figure>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default About;
