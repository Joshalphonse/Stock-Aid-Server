import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import Home from './components/Home'
import './App.css';

function App() {
  return (
    <div>
      <Switch>
      <Route
            path="/"
            render={ () => <Home /> } />
      </Switch>

    </div>
  );
}

export default App;
