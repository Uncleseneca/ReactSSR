import React from 'react';
import { renderRoutes } from 'react-router-config';

import { fetchCurrentUser } from './actions';
import Header from './components/Header';

const App = ({ route }) => (
  <div>
    <Header />
    {renderRoutes(route.routes)}
  </div>
);

const loadData = store => store.dispatch(fetchCurrentUser());

export default {
  loadData,
  component: App,
};
