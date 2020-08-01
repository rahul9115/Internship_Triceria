import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import Body from "./body";
import { connect } from "react-redux";
import css from "../css/style.css"




const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>


class yellow extends Component {

    render() {
        return (
            <div class="container">
                <div class="color" style={{ backgroundColor: "yellow" }}>
                </div >
                <span>Little more guesses.</span>
            </div>
        );
    }

};
export default yellow;

