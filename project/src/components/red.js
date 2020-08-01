import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import Body from "./body";
import { connect } from "react-redux";
import css from "../css/style.css"




const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>


class red extends Component {

    render() {
        return (

            <div class="container">
                <div class="color" style={{ backgroundColor: "red" }}>
                </div >
                <span>Your Almost there guess a number nearby.</span>
            </div>
        );
    }

};
export default red;

