import React, { Component} from "react";
import axios from "axios";

export default class UserData extends Component
{
    constructor()
    {
        super();
        this.state = 
        {
            greeting: "Not hello"
        };
    }

    handleButtonClick = () =>
    {
        axios.get("/users").then(response =>
        {
            console.log(response);
            this.setState
            ({
                greeting: response.data.name
            });
        });
    };

    handleDeleteButton = () =>
    {
        //axios.post
    };

    handleEditButton = () =>
    {
        //axios.post
    };

    render()
    {
        return(
            <div>
                <form>
                    <input type="text" id="userid" ></input>
                    <input type="text" id="username" ></input>
                    <input type="email" id="email" ></input>
                    <button onClick={this.handleDeleteButton}> Delete </button>
                    <button onClick={this.handleEditButton}> Edit </button>
                </form>
            </div>
        );
    }
}