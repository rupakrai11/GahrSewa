import React, { Fragment } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./../pages/Home";
import About from "../pages/About";
import Blog from "./../pages/Blog";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import Dashboard from "../admin/Dashboard";
import PageNotFound from "../pages/PageNotFound";
import New from "./New";
import Service from "../pages/Service";
import Dashboard1 from "./../admin/Dashboard1";
import View_Users from "../admin/View_Users";
import Add_Users from "../admin/Add_Users";
import UserRegistration from "../pages/UserRegistration";

const Router = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/registration" component={Registration} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/dashboard1" component={Dashboard1} />
          <Route path="/service" component={Service} />
          <Route path="/new" component={New} />
          <Route path="/view_users" component={View_Users} />
          <Route path="/userregistrationform" component={Add_Users} />
          <Route path="/userregistration" component={UserRegistration} />

          <Route component={PageNotFound}></Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};

export default Router;
