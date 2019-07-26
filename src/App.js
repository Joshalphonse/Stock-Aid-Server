import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import LeaderBoard from "./components/LeaderBoard";


function App() {
  return (
    <div>
      <Switch>

      <Route
      path="/leaderBoard"
      render={ () => <LeaderBoard /> } />
      <Route exact path="/leaderBoard" component={LeaderBoard} />

      <Route
      path="/login"
      render={ () => <Login /> } />
      <Route exact path="/login" component={Login} />

      <Route
            path="/"
            render={ () => <Home /> } />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
