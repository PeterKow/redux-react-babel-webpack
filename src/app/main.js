/**
 * Created by Peter on 29/08/15.
 */
require('./main.css');
console.log('Application is loaded!');

import React, { PropTypes } from 'react';

import { createStore, combineReducers, compose} from 'redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { Provider, connect } from 'react-redux';
import createHashHistory from 'history/lib/createBrowserHistory';
import createBrowserHistory from 'history/lib/createHashHistory';
import configureStore from './utils/configure-store.js';
import HeaderMenu from './containers/headerMenu/containers/headerMenu.container.jsx';
import miniarticleApp from './containers/articles/reducers.js';
import * as storage from './persistance/storage.js'



import { IntlProvider } from 'react-intl'

import { twitterResultsSimple } from './containers/articles/mockTwitterResults.js'
const initialState = {
  application: {
    token: storage.get('token'),
    locale: storage.get('locale') || 'en',
    user: { permissions: [/*'manage_account'*/] }
  }
}
initialState.miniarticles = twitterResultsSimple;
initialState.visibilityFilter = "SHOW_ALL";

const store = configureStore(initialState)

const history = process.env.NODE_ENV === 'production' ?
  createHashHistory() :
  createBrowserHistory();

function getRootChildren (props) {
  const intlData = {
    locale: props.application.locale,
    //messages: i18n[props.application.locale]
  }
  const rootChildren = [
    <IntlProvider key="intl" {...intlData}>
      {renderRoutes.bind(null, props.history)}
    </IntlProvider>
  ]

  const __DEVTOOLS__ = true;
  if (__DEVTOOLS__) {
    const { DevTools, DebugPanel, LogMonitor } =
      require('redux-devtools/lib/react')
    rootChildren.push(
      <DebugPanel key="debug-panel" top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    )
  }
  return rootChildren
}


import renderRoutes from './routes.js';


//<Redirect from="/account" to="/account/profile" />
//<Route path="stargazers" component={GithubStargazers}>
//  <Route path=':username/:repo' component={GithubRepo} />
//  <Route path=':username' component={GithubUser} />
//  </Route>
//    <Route path="about" component={About} />
//    <Route path="account" component={Account} onEnter={requireAuth}>
//      <Route path="profile" component={AccountHome} />
//      <Route path="secret-area" component={SuperSecretArea} />
//    </Route>
//    <Route path="login" component={Login} />
//    <Route path="logout" onEnter={logout} />

function requireAuth (nextState, redirectTo) {
  const state = store.getState()
  const isLoggedIn = Boolean(state.application.token)
  if (!isLoggedIn)
    redirectTo('/login', {
      nextPathname: nextState.location.pathname
    })
}

function logout (nextState, redirectTo) {
  store.dispatch({ type: constants.LOG_OUT })
  redirectTo('/login')
}

@connect(({ application }) => ({ application }))
class Root extends React.Component {
  static propTypes = {
    application: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render () {
    return (
      <div>{getRootChildren(this.props)}</div>
    )
  }
}

React.render(
  <Provider store={store}>
    {() => <Root history={history} />}
  </Provider>
  , document.getElementById('app'))



