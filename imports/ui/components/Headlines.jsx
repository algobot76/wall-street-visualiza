import React, { Fragment } from 'react';

import HeroTitle from './HeroTitle';
import News from './News';

const Headlines = () => {
  return (
    <Fragment>
      <HeroTitle
        title="Headlines"
        subtitle="Latest financial and business news 🤑🤑🤑"
        color="is-dark"
      />
      <News />
    </Fragment>
  );
};

export default Headlines;
