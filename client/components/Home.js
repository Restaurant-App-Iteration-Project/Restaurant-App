import React, { Component } from 'react';
import { Router, Route, Link } from "react-router";
import fetch from 'isomorphic-fetch';

import RestSetup from './RestSetup';
import UserInterface from './UserInterface';

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
        </form>
        <button onClick={() => props.loginClick('register')}>Register</button>
      </div>
    
      // FB OAUTH

      <div>
        <Link to="/restaurants">Restaurants</Link>
      </div>
    );
  }

}

export default Home;
