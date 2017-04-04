import React, { Component } from 'react';
import { Router, Route } from "react-router";
import fetch from 'isomorphic-fetch';
import Home from './Home';

function getInitialState() {
  return {
    username: '',
    favorites: [],
    restName: '',
  };
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  loginClick(type) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const data = JSON.stringify({
      username,
      password,
    });
    //console.log('credentials: ', data);
    console.log(type);
    var xhr = new XMLHttpRequest();
    if (type === 'login') xhr.open('POST', '/login');
    
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(data);

    xhr.onreadystatechange = function () {
      var DONE = 4; // readyState 4 means the request is done.
      var OK = 200; // status 200 is a successful return.

      if (xhr.readyState === DONE) {
        if (xhr.status === OK) {
          console.log(username);
          this.setState({
            username: username,
          });
        }
          console.log(xhr.responseText); // 'This is the returned text.'
        } else {
          console.log('Error: ' + xhr.status); // An error occurred during the request.
        }
      }.bind(this);
    };

  render() {
    return (
      <Home />
    );
  }

}

export default App;
