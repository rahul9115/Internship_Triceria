import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import Body from "./body";
import { connect } from "react-redux";
import css from "../css/style.css"




const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>


class green extends Component {

    render() {
        return (
            <div class="container">
                <div class="color" style={{ backgroundColor: "green" }}>

                </div >
                <div><a href="/">Take up new challenge</a></div>
            </div>
        );
    }

};
export default green;

