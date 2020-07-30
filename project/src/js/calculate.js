import React from "react";
import ReactDOM from "react-dom";

import body from "../components/body";

function createMarkup(b) {
    console.log(b);
    if (b == 0) {
        return { __css: "display:flex;background-color:green;" };
    }
    else if (b >= 1 && b <= 4) {
        return { __css: "display:flex;background-color:green;" };
    }
    else if (b >= 4 && b <= 15) {
        return { __css: "display:flex;background-color:yellow;" };
    }
    else {
        return { __css: "display:flex;background-color:blue;" };
    }


}

export default createMarkup;