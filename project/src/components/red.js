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

            <div class="color" style={{ backgroundColor: "red" }}>
            </div >
        );
    }

};
export default red;

