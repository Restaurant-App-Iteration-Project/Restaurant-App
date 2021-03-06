import React, { PropTypes } from 'react';

const Register = (props) => {
  console.log(props.handleClick);
  return (
    <div className="container">
      <div className="form" id="login">
        <form className="login-form">
          <input id="username" type="text" placeholder="Username"></input>
          <input id="password" type="password" placeholder="Password"></input>
          <input id="phoneNumber" type="phoneNumber" placeholder="Phone Number"></input>
          <button onClick={() => props.handleClick('register')}>Register</button>
        </form>
        <p className="message">Already registered? <a onClick={() => props.handleClick('home-page')} href="#">Log in</a></p>
      </div>
    </div>
  );

}

Register.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Register;
