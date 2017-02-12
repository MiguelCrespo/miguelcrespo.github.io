import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

// Our application imports
import App from './components/App';
import Home from './components/Home';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
), document.getElementById('container'));