import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import rootReducer from './reducers';
import Routes from './Routes';

const store = createStore(rootReducer, window.INITIAL_STATE, applyMiddleware(thunk)); // eslint-disable-line no-undef

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'), // eslint-disable-line no-undef
);
