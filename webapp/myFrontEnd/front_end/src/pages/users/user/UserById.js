import React, { Component } from "react";
import axios from "axios";
import "./UserById.css";
import UserService from "../../../api/services/UserService";
import { Link } from "react-router-dom";

class UserById extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      email: "",
      error: null,
    };
  }

  handleError = (error) => {
    this.setState({
      error: error?.message || "Something went wrong. Try again!",
    });
  };

  componentDidMount = () => {
    UserService.getById(this.props.match.params.userId)
      .then((response) => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
        });
      })
      .catch(this.handleError);
  };

  render() {
    return (
      <div id="user">
        <Link to="/users">Back</Link>
        <h3>Requested user: </h3>

        {this.state.error ? (
          <div>
            <h4 className="error-text">{this.state.error}</h4>
          </div>
        ) : (
          <div>
            <label type="text" id="userid" className="bordered">
              {this.state.id}
            </label>
            <label type="text" id="username" className="bordered">
              {this.state.name}
            </label>
            <label type="email" id="email" className="bordered">
              {this.state.email}
            </label>
          </div>
        )}
      </div>
    );
  }
}

export default UserById;
