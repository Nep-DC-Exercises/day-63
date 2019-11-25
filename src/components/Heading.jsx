import React from "react";

const defaultStyle = {
    fontSize: "24px",
    lineHeight: "18px"
};

const Heading = props => {
    return <h1 style={props.style ? props.style : defaultStyle}>{props.text}</h1>;
};

export default Heading;
