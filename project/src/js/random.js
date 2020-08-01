import React from "react";
import ReactDOM from "react-dom";

import body from "../components/body";
import blue from "../components/blue"
import something from "./intialize";
var m;
function createMarkup() {
    createMarkup.counter = localStorage.getItem("counter1");
    console.log(createMarkup.counter);
    if (typeof createMarkup.counter == 'undefined') {

        createMarkup.counter = 0;

    }
    if (!createMarkup.counter) {
        createMarkup.counter = 0;
    }
    console.log(createMarkup.counter);
    createMarkup.counter++;


    if (createMarkup.counter == 1) {
        m = 0;
        console.log(m);
    } else {
        var obj = JSON.parse(localStorage.getItem('number3'));
        m = obj.m;
    }
    m = m + 1;
    var b = { "m": m };
    console.log(b.m)
    var json = JSON.stringify(b);
    localStorage.setItem("number3", json);
    let l = m * 100;

    var a = Math.floor(Math.random() * l);
    if (a >= 0 && a <= l) {
        return [{ __html: "Enter a number  between 1 to " + l }, a, createMarkup.counter];

    }

}

export default createMarkup;