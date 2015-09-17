/* global __DEVTOOLS__ */
/* global __DEVTOOLS__ */
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from '../middleware/logger'

import { devTools, persistState } from 'redux-devtools';
import persistenceStore from '../persistance/store.js'
import reducers from '../containers/articles/reducers.js'

let combinedCreateStore
const storeEnhancers = [persistenceStore]

//todo: add it to webpack global config
const __DEVTOOLS__ =  true;
if (__DEVTOOLS__) {
  const { devTools } = require('redux-devtools')
  storeEnhancers.push(devTools())
  storeEnhancers.push(persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)))
}
combinedCreateStore = compose(...storeEnhancers)(createStore)

//const finalCreateStore = compose(
//  devTools(),
//
//  createStore
//);

//const store = finalCreateStore(miniarticleApp);

const finalCreateStore = applyMiddleware(thunk, logger)(combinedCreateStore)
//const combinedReducer = combineReducers(reducers)
const combinedReducer = reducers

export default function configureStore (initialState) {

  const store = finalCreateStore(combinedReducer, initialState)

  if (module.hot)
  // Enable Webpack hot module replacement for reducers
    module.hot.accept('../containers/articles/reducers', () => {
      const nextRootReducer = require('../containers/articles/reducers')
      store.replaceReducer(nextRootReducer)
    })

  return store
}
