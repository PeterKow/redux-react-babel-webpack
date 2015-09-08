/**
 * Created by Peter on 29/08/15.
 */
require('./main.css');
console.log('Application is loaded!');

import React from 'react';
import { createStore, combineReducers, compose} from 'redux';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { Provider } from 'react-redux';
import App from './articles/containers/articles.container.js';
import HeaderMenu from './headerMenu/containers/headerMenu.container.jsx';
import miniarticleApp from './articles/reducers.js';


const finalCreateStore = compose(
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  createStore
);

const store = finalCreateStore(miniarticleApp);

let headerMenu = document.getElementById('headerMenu');
React.render(
  <HeaderMenu />,
  headerMenu
);

let rootElement = document.getElementById('app');
React.render(
  // The child must be wrapped in a function
  // to work around an issue in React 0.13.
  <div>
    <Provider store={store}>
      {() => <App />}
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store}
                monitor={LogMonitor} />
    </DebugPanel>
  </div>,
  rootElement
);

