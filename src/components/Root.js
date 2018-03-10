import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import App from '../containers/App';

function Root({ store }) {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={App} />
        </div>
      </Router>
    </Provider>
  );
}

export default Root;
