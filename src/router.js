import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter,
} from 'react-router-dom';

import { index } from './constants/route-paths';

import Layout from './components/layout.js';
import Todo from './components/todo/Todo';
import PageNotFound from './components/404/PageNotFound';

const Router = ({ match }) => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path={index} component={Todo} exact />
        <Route component={PageNotFound} exact />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Router;
