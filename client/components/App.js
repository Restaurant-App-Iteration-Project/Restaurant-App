import React, { Component } from 'react';
import Home from './Home';
import Register from './Register';
import RegisterRestaurant from './restComponents/RegisterRestaurant';
import UserInterface from './userComponents/UserInterface';

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
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    const xhr = new XMLHttpRequest();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log(username);
    const data = JSON.stringify({
      username,
      password,
    });
    xhr.open('POST', '/login', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(data);
    xhr.onreadystatechange = function() {
      console.log('RESPONSE RESPONSE' + xhr.responseText);
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log('I WANT TO SET THIS STATE');
        this.setState({
          view: 'userInterface',
        });
      } else {
        console.log('Error: ' + xhr.status);
      }
    };
  }

  handleClick(type) {
    let xhr = new XMLHttpRequest();
    if (type === 'register') xhr.open('POST', '/register');    
    else if (type === 'login') xhr.open('POST', '/login');
    else if (type === 'register-page') return this.setState({ view: 'register' });
    else if (type === 'home-page') return this.setState({ view: 'home' });
    else if (type === 'register-rest') return this.setState({ view: 'register-rest' });
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    let data;
    if (this.state.view === 'register') {
      const phoneNumber = document.getElementById('phoneNumber').value;
      data = JSON.stringify({
        username,
        password,
        phoneNumber,
      });
    } else {
      data = JSON.stringify({
        username,
        password,
      });
    } 
    if (this.state.view === 'register-rest') {
      const restaurantName = document.getElementById('rest-name').value;
      const phoneNumber = document.getElementById('phoneNumber').value;
      const address = document.getElementById('address').value;
      data = JSON.stringify({
        username,
        password,
        restaurantName,
        phoneNumber,
        address,
      });
    }
    // console.log('credentials: ', data);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(data);

    xhr.onreadystatechange = function() {
      const DONE = 4; // readyState 4 means the request is done.
      const OK = 200; // status 200 is a successful return.
      if (xhr.readyState === DONE) {
        if (xhr.status === OK) {
          if (this.state.view === 'home') {
            this.setState({
              view: 'userInterface',
            });
          } else if (this.state.view === 'register') {
            this.setState({
              view: 'home',
            });
          } else if (this.state.view === 'register-rest') {
            this.setState({
              view: 'register-rest',
            });
          }
        } else {
          console.log('State: ' + this.state.username);
          console.log('Error: ' + xhr.status); // An error occurred during the request.
        }
        }
      }.bind(this);
    };
  
  render() {
    let page;
    if (this.state.view === 'home') {
      page = <Home handleLogin={this.handleLogin} handleClick={this.handleClick} />
    } else if (this.state.view === 'register') {
      page = <Register handleClick={this.handleClick} />
    } else if (this.state.view === 'register-rest') {
      page = <RegisterRestaurant handleClick={this.handleClick} />
    } else if (this.state.view === 'userInterface') {
      page = <UserInterface handleClick={this.handleClick} />
    }
    return (
      <div>
        { page }
      </div>
    );
  }

}

export default App;
