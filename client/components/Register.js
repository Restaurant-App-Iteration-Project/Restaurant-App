import React from 'react';

const Register = (props) => {

  return (
    <div className="container">
      <div className="form" id="login">
        <form className="login-form">
          <input id="username" type="text" placeholder="Username"></input>
          <input id="password" type="password" placeholder="Password"></input>
          <input id="phoneNumber" type="phoneNumber" placeholder="Phone Number"></input>
          <button onClick={() => this.props.handleClick('register')}>Register</button>
        </form>
        <p className="message">Already registered? <a onClick={() => this.props.handleClick('login-page')} href="#">Log in</a></p>
      </div>
    </div>
  );

}

export default Register;
