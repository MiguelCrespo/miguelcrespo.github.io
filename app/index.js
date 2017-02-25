import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import WebFont from 'webfontloader';
import offlinePluginRuntime from 'offline-plugin/runtime';

// Our application imports
import App from './components/App';
import Home from './components/Home';

// Styles
import './index.scss';

WebFont.load({
  google: {
    families: [
      'Roboto:300,400,700'
    ]
  },
  custom: {
    families: [
      'FontAwesome'
    ],
    urls: [
      'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
    ]
  },
  timeout: 2000
});

offlinePluginRuntime.install();

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
    </Route>
  </Router>
), document.getElementById('container'));