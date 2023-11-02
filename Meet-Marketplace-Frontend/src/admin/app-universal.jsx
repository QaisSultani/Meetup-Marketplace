import React from "react";
import config from "config";
import { useSelector } from "react-redux";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/header/index";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Profile from "./pages/profile";
import ForgotPassword from "./pages/forgotpassword";

const AppUniversal = function (props) {
  const isAdminLoggedIn = useSelector((state) => state.isAdminLoggedIn);
  return (
    <Router basename={`${config.publicPath}`}>
      <div className="main-wrapper">
        <Route render={(props) => <Header {...props} />} />

        <Switch>
          <Route
            path="/admin/login"
            exact
            component={!isAdminLoggedIn ? Login : Dashboard}
          />
          <Route
            path="/admin/forgotPassword"
            exact
            component={!isAdminLoggedIn ? ForgotPassword : Dashboard}
          />
          <Route
            path="/admin"
            exact
            component={isAdminLoggedIn ? Dashboard : Login}
          />
          
          {isAdminLoggedIn && (
            <>
              <Route path="/admin/profile" exact component={Profile} />
            </>
          )}
        </Switch>
      </div>
    </Router>
  );
};

export default AppUniversal;

