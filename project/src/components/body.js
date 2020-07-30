import React from 'react';
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import random from "../js/random";

import { Component } from 'react';
class Body extends Component {
    componentDidMount() {
        const script = document.createElement("script");

        script.src = "../js/random";
        script.async = true;

        document.body.appendChild(script);
    }
    render() {

        return (

            <body>
                <h1>Welcome to the Game</h1>
                <div class="color">

                </div>

                <span id="input" class="input1"  > </span>
                <input type="number" placeholder="Enter the number here"></input>

            </body>

        );
    }
}


export default Body;
