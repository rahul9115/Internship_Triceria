import React from "react";
import ReactDOM from "react-dom";

import body from "../components/body";
import blue from "../components/blue"
import something from "./intialize";
var m = 0;
function createMarkup() {

    var obj = JSON.parse(localStorage.getItem('my2'));
    m = obj.m;

    m = m + 1;
    var b = { "m": m };
    console.log(b.m)
    var json = JSON.stringify(b);
    localStorage.setItem("my2", json);
    let l = m * 100;

    var a = Math.floor(Math.random() * l);
    if (a >= 0 && a <= l) {
        return [{ __html: "Enter a number  between 1 to " + l }, a, m];

    }

}

export default createMarkup;