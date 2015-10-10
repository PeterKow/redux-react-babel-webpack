import React from 'react';

import { Router, DefaultRoute, Route, NotFoundRoute, Redirect } from 'react-router';

import Application from './pages/mainPage/app.js'
import MainPage from './pages/mainPage/mainPage.js'
import NotFoundRouteView from './pages/utils/notFoundRoute.js'
import SearchArticles from './pages/mainSearchPage/searchArticles.js'
import Login from './pages/loginPage/loginPage.js'
import ProfilePage from './pages/profilePage/profilePage.js'
// Browser history
// TODO; decide history url style
import createHistory from 'history/lib/createBrowserHistory';
import createHashHistory from 'history/lib/createHashHistory';

function requireAuth(nextState, replaceState) {
  if (!localStorage.token)
    replaceState({ nextPathname: nextState.location.pathname }, '/login')
}

function renderRoutes (history) {
  var historyNew = createHistory({
    queryKey: false
  });
  return (
    <Router history={historyNew}>
      <Route component={ Application }>
        <Route path="/" component={ MainPage } onEnter={requireAuth}/>
      </Route>

      <Route path="profileme" component={ ProfilePage } />
      <Route path="login" component={ Login } />
      <Route path="search" component={ SearchArticles }/>
      <Route path="*" component={ NotFoundRouteView }/>
    </Router>
  )
}

export default renderRoutes;

