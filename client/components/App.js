import React, { Component } from 'react';
import Home from './Home';
import Register from './Register';

function getInitialState() {
  return {
    username: '',
    restName: '',
    lastUpdated: null,
    view: 'home',
  };
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(type) {
    if (type === 'register') xhr.open('POST', '/register');    
    else if (type === 'login') xhr.open('POST', '/login');
    else if (type === 'register-page') return this.setState({ view: 'register' });
    else if (type === 'login-page') return this.setState({ view: 'login' });
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const data = JSON.stringify({
      username,
      password,
      phoneNumber,
    });
    // console.log('credentials: ', data);
    let xhr = new XMLHttpRequest();
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(data);

    xhr.onreadystatechange = function () {
      var DONE = 4; // readyState 4 means the request is done.
      var OK = 200; // status 200 is a successful return.

      if (xhr.readyState === DONE) {
        console.log('Ready State', xhr.readyState);
        if (xhr.status === OK) {
          console.log(username);
          this.setState({
            view: 'register',
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
    let page;
    if (this.state.view === 'home') {
      page = <Home handleClick={this.handleClick} />
    } else if (this.state.view === 'register') {
      page = <Register handleClick={this.handleClick} />
    }
    return (
      <div>
        { page }
      </div>
    );
  }

}

export default App;
