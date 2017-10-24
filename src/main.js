import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ko from 'react-intl/locale-data/ko';
import ja from 'react-intl/locale-data/ja';
import th from 'react-intl/locale-data/th';
import zh from 'react-intl/locale-data/zh';
import inLocale from 'react-intl/locale-data/in';
import createStore from './store/createStore';
import AppContainer from './containers/AppContainer';

// Support Safari
if (!global.Intl) {
  require.ensure([ // allows for code splitting
    'intl',
    'intl/locale-data/jsonp/en.js'
  ], (require) => {
    // requires like this will just initialize them, and the modules set the globals
    require('intl');
    require('intl/locale-data/jsonp/en.js');
  });
}

// ========================================================
// Store Instantiation
// ========================================================
const initialState = {};
const store = createStore(initialState);

// ========================================================
// Internationalization Instantiation
// ========================================================
addLocaleData([...en, ...ko, ...ja, ...th, ...zh, ...inLocale]);

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root');

let render = () => {
  const routes = require('./routes/index').default(store);

  ReactDOM.render(
    <AppContainer store={store} routes={routes} />,
    MOUNT_NODE
  );
};

// This code is excluded from production bundle
if (__SANDBOX__) {
  if (module.hot) {
    // Development render functions
    const renderApp = render;
    const renderError = (error) => {
      const RedBox = require('redbox-react').default;

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE);
    };

    // Wrap render in try/catch
    render = () => {
      try {
        renderApp();
      } catch (error) {
        console.error(error);
        renderError(error);
      }
    };

    // Setup hot module replacement
    module.hot.accept('./routes/index', () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE);
        render();
      }));
  }
}

// ========================================================
// Go!
// ========================================================
render();
