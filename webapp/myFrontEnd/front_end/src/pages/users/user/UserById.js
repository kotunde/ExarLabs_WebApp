import React, { Component } from "react";
import axios from "axios";
import "./UserById.css";

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

  componentDidMount = () => {
    axios
      .get(`/users/${this.props.match.params.userId}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
        });
      })
      .catch((error) => {
        this.setState({
          error: error?.message || "Something went wrong. Try again!",
        });
      });
  };

  render() {
    return (
      <div id="user">
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
