/* global __DEVTOOLS__ */
/* global __DEVTOOLS__ */
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from '../middleware/logger'
import { persistState } from 'redux-devtools';
import combinedReducer from '../app.reducers.js'
import DevTools from './devTools.js'

let combinedCreateStore
const storeEnhancers = []

//todo: add it to webpack global config
const __DEVTOOLS__ =  process.env.DEVTOOLS;
if (__DEVTOOLS__) {
  storeEnhancers.push(DevTools.instrument())
  storeEnhancers.push(persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)))
}
combinedCreateStore = compose(...storeEnhancers)(createStore)


const finalCreateStore = applyMiddleware(thunk, logger)(combinedCreateStore)

export default function configureStore (initialState) {

  const store = finalCreateStore(combinedReducer, initialState)

  if (module.hot)
  // Enable Webpack hot module replacement for reducers
    module.hot.accept('../app.reducers.js', () => {
      const nextRootReducer = require('../app.reducers.js')
      store.replaceReducer(nextRootReducer)
    })

  return store
}
