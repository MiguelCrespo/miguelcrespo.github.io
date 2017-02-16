import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import WebFont from 'webfontloader';

// Our application imports
import App from './components/App';
import Home from './components/Home';

// Styles
import './index.scss';

WebFont.load({
    google: {
        families: ['Roboto:300,400,700']
    },
    timeout: 2000
});

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
), document.getElementById('container'));