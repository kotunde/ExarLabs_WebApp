import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class UserData extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <label type="text" id="userid" className="bordered">
          {this.props.id}
        </label>
        <label type="text" id="username" className="bordered">
          <Link to={`/users/${this.props.id}`}>{this.props.name}</Link>
        </label>
        <label type="email" id="email" className="bordered">
          {this.props.email}
        </label>
        <button onClick={this.props.handleDelete}> Delete </button>
      </div>
    );
  }
}
