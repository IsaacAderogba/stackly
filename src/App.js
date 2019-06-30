import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/views/login/Login";
import Signup from "./components/views/signup/Signup";
import Dashboard from "./components/views/dashboard/Dashboard";
import Profile from "./components/views/profile/Profile";

function App() {
  return (
    <>
      <Route exact path="/" render={routeProps => <Signup {...routeProps} />} />
      <Route
        exact
        path="/login"
        render={routeProps => <Login {...routeProps} />}
      />
      <Route
        exact
        path="/dashboard"
        render={routeProps => <Dashboard {...routeProps} />}
      />
      <Route
        exact
        path="/profile"
        render={routeProps => <Profile {...routeProps} />}
      />
    </>
  );
}

export default App;
