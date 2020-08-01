import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import Body from "./body";
import { connect } from "react-redux";
import css from "../css/style.css"




const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>


class blue extends Component {

    render() {
        return (
            <div class="container">
                <div class="color" style={{ backgroundColor: "blue" }}>
                </div >
                <span>Your far</span>
            </div>
        );
    }

};
export default blue;

