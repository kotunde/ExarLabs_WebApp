import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router,Switch } from 'react-router-dom';
import UserList from './UserList.js';
import Home from './Home';
import UserById from './UserById';

function App() {
  return (
    <Router>
      {/* <div className = "container">
        <p>Let's Add Routing!</p>
      </div> */}
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/users" exact component={UserList}/>
        <Route path="/users/:userId" component={UserById}/>
      </Switch>
    </Router>
  )
};

export default App;