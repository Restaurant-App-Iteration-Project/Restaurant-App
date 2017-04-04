import fetch from 'isomorphic-fetch';
import { Link } from "react-router";
import React, { Component } from 'react';
import RestInterface from './RestInterface';

const RestSetup = (props) => {
    
  return (
    <form onSubmit=''>
      <input type='text' placeholder='Enter restaurant name' ref='restName'></input>
      <input type='password' placeholder='Enter restaurant password' ref='restPassword'></input>
      <button><a href="#waitList">Login</a></button>
    </form>

    <form onSubmit=''>
      <input type='text' placeholder='Enter restaurant name' ref='newName'></input>
      <input type='password' placeholder='Enter restaurant password' ref='newPassword'></input>
      <button>SignUp</button>
    </form>

  );
}

export default RestSetup;
