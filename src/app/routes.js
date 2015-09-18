import React from 'react';

import { Router, DefaultRoute, Route, NotFoundRoute, Redirect } from 'react-router';

import Application from './pages/mainPage/app.js'
import MainPage from './pages/mainPage/mainPage.js'
import NotFoundRouteView from './pages/utils/notFoundRoute.js'
import SearchArticles from './pages/mainSearchPage/searchArticles.js'

function renderRoutes (history) {
  return (
    <Router history={history}>
      <Route component={ Application }>
        <Route path="/" component={ MainPage } />
      </Route>

      <Route path="search" component={ SearchArticles } />
      <Route path="*" component={ NotFoundRouteView }/>
    </Router>
  )
}

export default renderRoutes;

