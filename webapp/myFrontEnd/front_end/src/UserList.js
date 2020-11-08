import UserData from "./UserData";
import React, { Component} from "react";
import axios from "axios";
import './UserList.css'
import { render } from '@testing-library/react';

class UserList extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount = () => {
    let currentComponent = this;
    axios.get("/users").then(response =>
      {
          console.log(response.data);
          currentComponent.setState
          ({
              users: response.data
          });
      });
  }

  handleAddButton = () => {
    //let currentComponent = this;
    // get input data
    var name_value = document.getElementById("add_username_id").value;
    var email_value = document.getElementById("add_email_id").value;

    console.log(name_value)
    console.log(email_value)

    axios.post("/users", {
      name: name_value,
      email: email_value
    }).then(response =>
      {
          console.log(response);
          // clear input fields
          document.getElementById("add_username_id").value = '';
          document.getElementById("add_email_id").value = '';

          // reload page
          window.location.reload(false);
      }, (error) => {
        console.log(error);
      });
  };

  handleEditButton = () =>
  {
    //let currentComponent = this;
    // get input data
    var id_value = document.getElementById("edit_userid_id").value;
    var name_value = document.getElementById("edit_username_id").value;
    var email_value = document.getElementById("edit_email_id").value;

    axios.put(`/users/${id_value}`, {
      name: name_value,
      email: email_value
    }).then(response =>
      {
          console.log(response);
          // clear input fields
          document.getElementById("edit_userid_id").value = '';
          document.getElementById("edit_username_id").value = '';
          document.getElementById("edit_email_id").value = '';

          window.location.reload(false);
      }, (error) => {
        console.log(error);
      });

  };

  render() {
    return (
      <div>
          <div id ="userlist">
            {this.state.users.map(user => {
            console.log(user.id);
            return (
                <UserData
                key = {user.id}
                id={user.id}
                name={user.name}
                email={user.email} />
            );
            })}
            </div>

            <hr/>
            <div id= "adduser">
            <h3> Add new user:</h3>
            <label >Name : </label>
            <input type="text" id="add_username_id" className="inputbox" ></input> <br/>
            <label >Email : </label>
            <input type="email" id="add_email_id" className="inputbox" ></input> <br/>
            <button onClick={this.handleAddButton} id = "addbutton"> Add</button>
            </div>

            <hr/>
            <div>
            <h3>Edit user:</h3>
            <label > ID of user : </label>
            <input type="text" id="edit_userid_id" className="inputbox" ></input> <br/>
            <label >Edited name : </label>
            <input type="text" id="edit_username_id" className="inputbox" ></input> <br/>
            <label >Edited Email : </label>
            <input type="email" id="edit_email_id" className="inputbox" ></input> <br/>
            <button onClick={this.handleEditButton}> Edit</button>
            </div>

      </div>
    );
  }
}

export default UserList;