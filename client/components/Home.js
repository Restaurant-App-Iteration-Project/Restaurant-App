import React, { Component } from 'react';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div id="login">
          <form>
            <input id="username" type="text" placeholder="Username" />
            <input id="password" type="password" placeholder="Password" />
            <input id="phoneNumber" type="phoneNumber" placeholder="Phone Number" />
          </form>
          <button onClick={() => this.props.loginClick('register')}>Register</button>
        </div>
    );
  }

}

export default Home;
