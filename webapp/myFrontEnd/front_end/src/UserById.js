import React, { Component} from "react";
import axios from "axios";

class UserById extends Component {

    constructor(user)
    {
        super();
        this.state = {
            id: user.id,
            name: user.name,
            email: user.email,
        }
    }

    componentDidMount = () => {
        let currentComponent = this;
        axios.get(`/users/${currentComponent.props.match.params.userId}`).then(response =>
          {
              console.log(response.data);
              currentComponent.setState
              ({
                  id: response.data.id,
                  name: response.data.name,
                  email: response.data.email
              });
          });
      }

    render() {
      return (
        <div>
            <form>
                <label type="text" id="userid" >{this.state.id}</label>
                <label type="text" id="username" >{this.state.name}</label>
                <label type="email" id="email" >{this.state.email}</label>
            </form>
        </div>
      )
    }
  }
  
  export default UserById;