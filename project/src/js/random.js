import React from "react";
import ReactDOM from "react-dom";

import body from "../components/body";
import blue from "../components/blue"

function createMarkup() {
    var a = Math.floor(Math.random() * 100);
    if (a >= 0 && a <= 100) {
        return [{ __html: "Enter a number  between 1 to 100" }, a];

    }

}

export default createMarkup;