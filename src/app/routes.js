import React from 'react';
import { DefaultRoute, Route, NotFoundRoute, Redirect } from 'react-router';

import mainApp from './mainPage/app.js'
import mainPage from './mainPage/mainPage.js'

const routes = (
  <Route name="app" path="/" handler={mainApp}>
    <DefaultRoute handler={mainPage} />

    <Redirect from="search" to="/" />
  </Route>
);

export default routes;



//<NotFoundRoute handler={require('./components/notFoundPage')} />
//<Route name="authors" handler={require('./components/authors/authorPage')} />
//<Route name="about" handler={require('./components/about/aboutPage')} />
//<Redirect from="awthurs" to="authors" />
//<Redirect from="about/*" to="about" />