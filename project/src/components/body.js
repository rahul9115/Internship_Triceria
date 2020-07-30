import React from 'react';
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import random from "../js/random";
import css from "../css/style.css";
import { Component } from 'react';
import call from "../index";
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




        call(this.state.value);
        event.preventDefault();

    }

    render() {

        return (

            <body>
                <h1>Welcome to the Game</h1>
                <div class="color">

                </div>

                <span id="input" class="input1"  > </span>
                <form onSubmit={this.handleSubmit}>
                    <input type="number" value={this.state.value} onChange={this.handleChange} placeholder="Enter the number here"></input>
                    <button type="submit" value="Submit">Enter</button>
                </form>
            </body>

        );
    }
}


export default Body;
