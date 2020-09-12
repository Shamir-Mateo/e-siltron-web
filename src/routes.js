import React, { Component } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";

import ContactUs from './views/ContactUs';
import Dashboard from './views/Dashboard';
import Enquiry from './views/Enquiry';
import Products from './views/Products';
import history from './history';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" component={Dashboard} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/products" component={Products} />
          <Route path="/enquiry" component={Enquiry} />
          <Route path="/contactus" component={ContactUs} />
          {/* <Redirect from="/" to="dashboard" /> */}
        </Switch>
      </Router>
    )
  }
}
