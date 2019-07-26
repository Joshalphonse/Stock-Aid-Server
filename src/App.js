import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";


function App() {
  return (
    <div>
      <Switch>
      <Route
      path="/login"
      render={ () => <Login /> } />
      <Route exact path="/login" component={Login} />

      <Route
            path="/"
            render={ () => <Home /> } />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
