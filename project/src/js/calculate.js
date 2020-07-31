import React from "react";
import ReactDOM from "react-dom";

import body from "../components/body";
import Blue from "../components/blue";
import Red from "../components/red";
import Yellow from "../components/yellow";
import Green from "../components/green";

function createMarkup(b) {
    console.log(b);
    if (b == 0) {

        return <Green />;
    }
    else if (b >= 1 && b <= 4) {

        return <Red />;
    }
    else if (b >= 4 && b <= 15) {

        return <Yellow />;
    }
    else {

        return <Blue />;
    }


}

export default createMarkup;