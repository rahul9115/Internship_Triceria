import React from "react";
import ReactDOM from "react-dom";

import body from "../components/body";
function createMarkup() {
    var a = Math.floor(Math.random() * 100)
    if (a >= 0 && a <= 100) {
        return { __html: "Enter number between 1 to 100" };
    } else {
        return { __html: "" };
    }
}
export default createMarkup;