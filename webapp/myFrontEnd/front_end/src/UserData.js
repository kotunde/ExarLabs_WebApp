import React, { Component} from "react";
import axios from "axios";

export default class UserData extends Component
{
    constructor(user)
    {
        super();
        this.state = {
            id: user.id,
            name: user.name,
            email: user.email,
        }
        
    }

    handleDeleteButton = () =>
    {
        let currentComponent = this;
        axios
        .delete(`/users/${currentComponent.state.id}`).then(response =>
            {
                console.log(response.data);
                console.log("ok");
            })
            .catch(error => {
                console.log("not ok");
                //console.log(JSON.stringify(error, null, 2));
            });
            
    };

    render()
    {
        return(
            <div>
                <form>
        {/* <input type="text" id="userid" >{this.state.id}</input>
        <input type="text" id="username" >{this.state.name}</input>
        <input type="email" id="email" >{this.state.email}</input> */}
                    <label type="text" id="userid" >{this.state.id}</label>
                    <label type="text" id="username" >{this.state.name}</label>
                    <label type="email" id="email" >{this.state.email}</label>
                    <button onClick={this.handleDeleteButton}> Delete </button>
                </form>
            </div>
        );
    }
}