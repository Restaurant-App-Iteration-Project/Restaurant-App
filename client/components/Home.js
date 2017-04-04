import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="form" id="login">
          <form className="login-form">
            <input id="username" type="text" placeholder="Username"></input>
            <input id="password" type="password" placeholder="Password"></input>
            <button onClick={() => this.props.handleClick('login')}>Log in</button>
          </form>
          <p className="message">Not registered? <a onClick={() => this.props.handleClick('register-page')} href="#">Create an account</a></p>
        </div>
      </div>
    );
  }

}

export default Home;
