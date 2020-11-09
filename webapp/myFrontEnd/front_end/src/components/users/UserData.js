import React, { Component } from "react";
import axios from "axios";

export default class UserData extends Component {
  constructor(user) {
    super();
    this.state = {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }

  handleDeleteButton = () => {
    let currentComponent = this;
    axios
      .delete(`users/${currentComponent.state.id}`)
      .then((response) => {
        console.log(response.data);
        console.log("ok");
      })
      .catch((error) => {
        console.log("not ok");
      });
  };

  render() {
    return (
      <div>
        <form>
          <label type="text" id="userid" className="bordered">
            {this.state.id}
          </label>
          <label type="text" id="username" className="bordered">
            {this.state.name}
          </label>
          <label type="email" id="email" className="bordered">
            {this.state.email}
          </label>
          <button onClick={this.handleDeleteButton}> Delete </button>
        </form>
      </div>
    );
  }
}
