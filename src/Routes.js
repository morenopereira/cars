import React from 'react';
import { object } from 'prop-types';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';

import { routes } from './config/constants';

import Home from './pages/Home/Home';

const Routes = ({ history }) => {
  const { home } = routes;

  return (
    <BrowserRouter>
      <Router history={history}>
        <Switch>
          <Route path={home} component={Home} exact />
        </Switch>
      </Router>
    </BrowserRouter>
  );
};

Routes.propTypes = {
  history: object,
};

export default Routes;
