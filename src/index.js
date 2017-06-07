import React from 'react';
import App from './App.js';
import Member from './member/Member.js'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/member" component={Member} />
    </Switch>
  </Router>
), document.getElementById('root'));