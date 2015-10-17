/**
 * Created by Peter on 29/08/15.
 */
require('./main.css');
require("font-awesome-webpack");

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, compose} from 'redux';
import { Provider, connect } from 'react-redux';
import createHashHistory from 'history/lib/createBrowserHistory';
import createBrowserHistory from 'history/lib/createHashHistory';
import configureStore from './utils/configure-store.js';
import HeaderMenu from './containers/headerMenu/containers/headerMenu.container.jsx';
import * as storage from './persistance/storage.js'
import { IntlProvider } from 'react-intl'
import DevTools from './utils/devTools.js'

import { twitterResultsSimple } from './containers/articles/mockTwitterResults.js'
const initialState = {
  application: {
    token: storage.get('token'),
    locale: storage.get('locale') || 'en'
  },
  //user: {
  //  tokens: {} /*'manage_account'*/,
  //  //fetchingAuth: false
  //}
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

  //TODO IntlProvider doesnt work with 0.14
  //<IntlProvider key="intl" {...intlData}>
  //{renderRoutes.bind(null, props.history)}
  //</IntlProvider>

  const rootChildren = [
    <div key='intl'>{renderRoutes.bind(null, props.history)()}</div>
  ]
  const __DEVTOOLS__ = process.env.DEVTOOLS;
  if (__DEVTOOLS__) {
    rootChildren.push(
      <DevTools key='dev-tools'/>
    )
  }
  return rootChildren
}

import renderRoutes from './routes.js';

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

ReactDOM.render(
  <Provider store={store}>
    <Root history={history} />
  </Provider>
  , document.getElementById('app'))



