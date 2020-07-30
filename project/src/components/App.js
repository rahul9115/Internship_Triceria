import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import Body from "./body";
import { connect } from "react-redux";





const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>


class App extends Component {

    render() {
        return (

            <div className="container" >
                <BrowserRouter>
                    <div>


                        <Route exact path='/' component={Body} />


                    </div>
                </BrowserRouter>

            </div >
        );
    }

};
export default App;

