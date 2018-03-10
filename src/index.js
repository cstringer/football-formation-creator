import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './utils/configureStore';
import registerServiceWorker from './utils/registerServiceWorker';
import Root from './components/Root';
import './styles/index.css';

ReactDOM.render(
  <Root store={configureStore()}></Root>,
  document.getElementById('root')
);

registerServiceWorker();
