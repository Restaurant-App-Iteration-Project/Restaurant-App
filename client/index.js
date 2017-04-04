import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import ReactDOM from "react-dom";

import { render } from 'react-dom';
import App from './components/App';
import restSetup from './components/restComponents/restSetup';
import userSetup from './components/userComponents/userSetup';

const app = document.getElementById('root');
// var hashHistory = ReactRouter.hashHistory;
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}></Route>
    
    <Route path="/home" name="home" component={homeLayout}></Route>
    <Route path="/restaurants" name="restaurants" component={restLogin}></Route>
    <Route path="/guestWait" name="guestWait" component={WaitPage}></Route>
    <Route path="/guestOptions" name="guestOptions" component={GuestOptions}></Route>
    <Route path="/waitList" name="waitList" component={TablePage}></Route>
  </Router>
  
  ,
app);



