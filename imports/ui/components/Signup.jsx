import React from 'react';

function Signup() {
  return (
    <form className="box">
      <div className="field">
        <label htmlFor="name" className="label">
          Name
        </label>
        <div className="control">
          <input type="text" className="input" placeholder="Your name" />
        </div>
      </div>
    </form>
  );
}

export default Signup;
