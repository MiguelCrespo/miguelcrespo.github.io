import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={LandingCities} />
      <Route path="/:city" component={Home} />
      <Route path="/:city/:establishmentUrl" component={EstablishmentView} />
    </Route>
  </Router>
), document.getElementById('container'));