import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import random from "../src/js/random";
import thunk from 'redux-thunk';
import check from "../src/js/calculate";
import body from "./components/body";
import { createStore, applyMiddleware } from 'redux';

var a = random();
console.log("This is the random number", a[1]);

var m;

ReactDOM.render(<App />, document.querySelector('#root'));
ReactDOM.render(<span dangerouslySetInnerHTML={a[0]}></span>, document.getElementById("input"));
function call(b) {

    var ans = Math.abs(b - a[1]);
    console.log(ans);
    m = check(ans);

    return m;

}
ReactDOM.render(<App />, document.querySelector('#root'));
export default call;


