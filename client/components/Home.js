import React, { Component } from 'react';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="login-page">
        <div className="form" id="login">
          <form className="login-form">
            <input id="username" type="text" placeholder="Username"></input>
              <input id="password" type="password" placeholder="Password"></input>
                <input id="phoneNumber" type="phoneNumber" placeholder="Phone Number"></input>
                  <button onClick={() => this.props.registerClick('register')}>Register</button>
              </form>
            </div>
          </div>
            );
  }

}

export default Home;
