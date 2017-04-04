import React, { Component } from 'react';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div id="login">
          <form>
            <input id="username" type="text" placeholder="Username" />
            <input id="password" type="password" placeholder="Password" />
          </form>
          <button onClick={() => props.loginClick('register')}>Register</button>
        </div>
      
        // FB OAUTH

      </div>
    );
  }

}

export default Home;
