import React, { Fragment } from "react";
import Navbar from "./Navbar";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./../pages/Home";
import About from "../pages/About";
import Blog from "./../pages/Blog";
import Banner from "./../home/Banner";
import Footer from "./Footer";

const Router = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Banner />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
};

export default Router;
