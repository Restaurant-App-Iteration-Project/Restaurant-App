import React, { PropTypes } from 'react';

const Home = (props) => {

  return (
    <div className="container">
      <div className="form" id="login">
        <form className="login-form">
          <input id="username" type="text" placeholder="Username"></input>
          <input id="password" type="password" placeholder="Password"></input>
          <button onClick={() => props.handleClick('login')}>Log in</button>
        </form>
        <p className="message">Not registered?</p>
        <p>  <a onClick={() => props.handleClick('register-page')} href="#">Create a user account</a></p>
        <p>  <a onClick={() => props.handleClick('register-rest')} href="#">Create a restaurant account</a></p>
      </div>
    </div>
  );

}

Home.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Home;
