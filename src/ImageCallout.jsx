/// SECOND LESSON - REACT children CHALLENGE ///

import React from "react";

function ImageCallout(props) {
    return (
        <div className="callout">
            <img src={props.img} width="100%"/>
            <figcaption>{props.caption}</figcaption>
        </div>
    )
};
export default ImageCallout;

/// END OF SECOND LESSON - REACT children CHALLENGE ///