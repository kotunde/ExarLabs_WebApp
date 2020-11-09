import UserData from "../../components/users/UserData";
import React, { Component } from "react";

import "./UserList.css";
import UserService from "../../api/services/UserService";

class UserList extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      // store the error state through render-cycles
      error: null,
      // edit form states
      name: "",
      email: "",
      id: "",
      // add form state
      newName: "",
      newEmail: "",
    };
    // bind the methods to get access in the render function
    this.handleAddButton.bind(this);
    this.handleEditButton.bind(this);
    this.handleChange.bind(this);
    this.handleDelete.bind(this);
  }

  handleChange = (key, value) => {
    // little generic hack
    this.setState({ [key]: value });
  };

  handleError = (error) => {
    this.setState({
      error: error?.message || "Something went wrong. Try again!",
    });
  };

  getUsers = () => {
    UserService.getAll()
      .then((response) => {
        this.setState({
          users: response.data,
          error: null,
        });
      })
      .catch(this.handleError);
  };

  componentDidMount = () => {
    // get the users initially
    this.getUsers();
  };

  handleAddButton = () => {
    // get input data
    const { newName: name, newEmail: email } = this.state;
    UserService.create({ name, email })
      .then(() => {
        // reset form
        this.setState({ newName: "", newEmail: "" });
        // sync the frontend with the backend
        this.getUsers();
      })
      .catch(this.handleError);
  };

  handleDelete = (id) => {
    UserService.delete(id)
      .then(() => {
        // remove the user on fronted
        this.setState({
          users: this.state.user.filter((user) => user.id !== id),
        });
      })
      .catch(this.handleError);
  };

  handleEditButton = () => {
    // edit the user by id
    const {
      name,
      id /* Do not change the id of a document! */,
      email,
    } = this.state;
    UserService.update({ email, name })
      .then(() => {
        // update the user on frontend
        this.setState({
          users: this.state.user.map((user) =>
            user.id === this.state.id
              ? { ...user, name: this.state.name, email: this.state.email }
              : user
          ),
          // reset input fields
          name: "",
          id: "",
          email: "",
        });
      })
      .catch(this.handleError);
  };

  render() {
    return (
      <div>
        <div id="userlist">
          {this.state.users.map((user) => (
            <UserData
              handleDelete={() => this.handleDelete(user.id)}
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
            />
          ))}
        </div>

        {/* Error handling */}
        <div>
          <h3 className="error-text">{this.state.error}</h3>
        </div>

        <hr />
        <div id="adduser">
          <h3> Add new user:</h3>
          <label>Name : </label>
          <input
            type="text"
            value={this.state.newName}
            onChange={(e) => this.handleChange("newName", e.target.value)}
            className="inputbox"
          ></input>
          <br />
          <label>Email : </label>
          <input
            type="email"
            value={this.state.newEmail}
            onChange={(e) => this.handleChange("newEmail", e.target.value)}
            className="inputbox"
          ></input>
          <br />
          <button onClick={this.handleAddButton} id="addbutton">
            Add
          </button>
        </div>

        <hr />
        <div>
          <h3>Edit user:</h3>
          <label> ID of user : </label>
          <input
            type="text"
            value={this.state.id}
            onChange={(e) => this.handleChange("id", e.target.value)}
            className="inputbox"
          ></input>
          <br />
          <label>Edited name : </label>
          <input
            type="text"
            value={this.state.name}
            onChange={(e) => this.handleChange("name", e.target.value)}
            className="inputbox"
          ></input>
          <br />
          <label>Edited Email : </label>
          <input
            type="email"
            value={this.state.email}
            onChange={(e) => this.handleChange("email", e.target.value)}
            className="inputbox"
          ></input>
          <br />
          <button onClick={this.handleEditButton}> Edit</button>
        </div>
      </div>
    );
  }
}

export default UserList;
