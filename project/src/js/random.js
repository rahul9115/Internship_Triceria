import React from "react";
import ReactDOM from "react-dom";

import body from "../components/body";
import blue from "../components/blue"
import something from "./intialize";
var m;
function createMarkup() {
    createMarkup.counter = localStorage.getItem("rahul1234");
    console.log(createMarkup.counter);

    if (!createMarkup.counter) {
        createMarkup.counter = 0;

    }

    createMarkup.counter++;

    console.log(createMarkup.counter);
    if (createMarkup.counter == 1) {
        m = 0;
        localStorage.setItem("rahul1234", createMarkup.counter);
    } else {
        var obj = JSON.parse(localStorage.getItem('numb1234'));
        m = obj.m;
    }
    m = m + 1;
    var b = { "m": m };

    var json = JSON.stringify(b);
    localStorage.setItem("numb1234", json);
    let l = m * 100;

    var a = Math.floor(Math.random() * l);
    if (a >= 0 && a <= l) {
        return [{ __html: "Enter a number  between 1 to " + l }, a, createMarkup.counter];

    }

}

export default createMarkup;