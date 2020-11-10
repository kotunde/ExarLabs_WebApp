import "./Home.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Welcom to the home page!</h2>
        <Link to="/users">Users</Link>
      </div>
    );
  }
}

export default Home;
