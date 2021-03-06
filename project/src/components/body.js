import React from 'react';
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import random from "../js/random";
import css from "../css/style.css";
import { Component } from 'react';
import call from "../index";
import Blue from "../components/blue"
import Intial from "../components/intial";

import icon from "../assets/img/favicon.ico";
var M = <Intial />;

class Body extends Component {

    constructor(props) {
        super(props);
        this.state = { value: 'coconut' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        M = call(this.state.value);
        this.setState({ value: "    " });
        this.render();



    }
    render() {

        console.log({ M });

        return (

            <body>
                <div class="container">
                    <div class="outer">

                        <h1 class="heading">Welcome to the Game</h1>
                        <div class="answer">{M}</div>

                        <span id="input" class="input1"  > </span>

                        <input class="input1" type="number" value={this.state.value} onChange={this.handleChange} placeholder="Enter the number here"></input>
                        <button onClick={this.handleSubmit} value="Submit" >Enter</button>

                    </div>


                </div>
            </body >

        );
        this.render();
    }









}


export default Body;
