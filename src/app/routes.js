import React from 'react';

import { Router, DefaultRoute, Route, NotFoundRoute, Redirect } from 'react-router';

import Application from './pages/mainPage/app.js'
import MainPage from './pages/mainPage/mainPage.js'
import NotFoundRouteView from './pages/utils/notFoundRoute.js'
import SearchArticles from './pages/mainSearchPage/searchArticles.js'
import Login from './pages/loginPage/loginPage.js'

function requireAuth(nextState, replaceState) {
  //if (!auth.loggedIn())
  if (true)
    replaceState({ nextPathname: nextState.location.pathname }, '/login')
}

function renderRoutes (history) {
  return (
    <Router history={history}>
      <Route component={ Application }>
        <Route path="/" component={ MainPage } onEnter={requireAuth}/>
      </Route>

      <Route path="login" component={ Login } />
      <Route path="search" component={ SearchArticles } />
      <Route path="*" component={ NotFoundRouteView }/>
    </Router>
  )
}

export default renderRoutes;

