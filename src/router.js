import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./components/404/PageNotFound";
import Layout from "./components/layout.js";
import Todo from "./components/todo/Todo";
import { index } from "./constants/route-paths";

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
