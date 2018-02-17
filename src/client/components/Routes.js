import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';

const Routes = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/hi" component={() => 'Hi'} />
  </div>
);

export default Routes;
