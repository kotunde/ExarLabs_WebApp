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
            console.log(response.data);
            this.setState
            ({
                greeting: response.data
            });
        });

        
    };

    render()
    {
        return(
            <div>
                <h1>{this.state.greeting}</h1>
                <button onClick={this.handleButtonClick}>Get greeting </button>
            </div>
        );
    }
}