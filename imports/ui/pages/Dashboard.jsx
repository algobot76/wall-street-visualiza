import React from 'react';

import AccountInfo from '../components/AccountInfo';

function Dashboard() {
  return (
    <section className="hero is-light is-fullheight">
      <div className="hero-body">
        <div className="container">
          <AccountInfo />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
