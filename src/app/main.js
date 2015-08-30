/**
 * Created by Peter on 29/08/15.
 */
require('./main.css');
console.log('Application is loaded!');

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './articles/containers/articles.container.jsx';
import HeaderMenu from './headerMenu/containers/headerMenu.container.jsx';
import miniarticleApp from './articles/reducers.js';
console.log('mini', miniarticleApp());
let store = createStore(miniarticleApp);

let headerMenu = document.getElementById('headerMenu');
React.render(
  <HeaderMenu />,
  headerMenu
);

let rootElement = document.getElementById('app');
React.render(
  // The child must be wrapped in a function
  // to work around an issue in React 0.13.
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  rootElement
);

