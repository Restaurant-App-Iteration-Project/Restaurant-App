import React, { Component } from 'react';
import Home from './Home';

function getInitialState() {
  return {
    username: '',
    restName: '',
    lastUpdated: null,
  };
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.loginClick = this.loginClick.bind(this);
  }

  loginClick(type) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const data = JSON.stringify({
      username,
      password,
      phoneNumber,
    });
    //console.log('credentials: ', data);
    var xhr = new XMLHttpRequest();
    // if (type === 'login') xhr.open('POST', '/login');
    if (type === 'register') xhr.open('POST', '/register');    
    
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(data);

    xhr.onreadystatechange = function () {
      var DONE = 4; // readyState 4 means the request is done.
      var OK = 200; // status 200 is a successful return.

      if (xhr.readyState === DONE) {
        console.log('Ready State', xhr.readyState)
        if (xhr.status === OK) {
          console.log(username);
          this.setState({
            username: username,
          });
        }  else {
          console.log('State: ' + this.state.username);
          console.log('Error: ' + xhr.status); // An error occurred during the request.
        }
        }
      }.bind(this);
    };

  render() {
    return (
      <Home loginClick={this.loginClick}/>
    );
  }

}

export default App;
