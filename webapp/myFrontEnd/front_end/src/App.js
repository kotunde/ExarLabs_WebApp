import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import UserList from "./pages/users/UserList";
import Home from "./pages/home/Home";
import UserById from "./pages/users/user/UserById";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users" exact component={UserList} />
        <Route path="/users/:userId" component={UserById} />
      </Switch>
    </Router>
  );
}

export default App;
