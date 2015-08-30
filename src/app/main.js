/**
 * Created by Peter on 29/08/15.
 */
require('./main.css');
console.log('Application is loaded!');

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './articles/containers/articlers.container.jsx';
import HeaderMenu from './headerMenu/containers/headerMenu.container.jsx';
//import todoApp from './reducers';
//let store = createStore(todoApp);

let headerMenu = document.getElementById('headerMenu');
React.render(
  <HeaderMenu />,
  headerMenu
);

let rootElement = document.getElementById('app');
React.render(
  // The child must be wrapped in a function
  // to work around an issue in React 0.13.
  //<Provider store={store}>
  //  {() => <App />}
  //</Provider>,
  //<HeaderMenu />,
  <App />,
  rootElement
);

