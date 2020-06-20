import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Home from "../pages/afterLogin/home";
import Dashboard from "../pages/beforeLogin/dashboard";
import Login from "../pages/beforeLogin/login";
import SignUp from "../pages/beforeLogin/signUp";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/" component={Dashboard} exact={true}></PublicRoute>
        <PublicRoute path="/login" component={Login} exact={true}></PublicRoute>
        <PublicRoute
          path="/signUp"
          component={SignUp}
          exact={true}
        ></PublicRoute>
        <PrivateRoute path="/home" component={Home} exact={true}></PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}
