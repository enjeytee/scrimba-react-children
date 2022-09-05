/// SECOND LESSON - REACT children CHALLENGE ///

import React from "react";

function EmailCallout(props) {
    return (
        <div className="callout">
            <h1>{props.header}</h1>
            <input type="email" placeholder="Enter email"/>
            <button>{props.btnText}</button>
        </div>
    )
};
export default EmailCallout;

/// SECOND LESSON - REACT children CHALLENGE ///