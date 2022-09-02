import React from "react";
import PropTypes from "prop-types";

Button.propTypes = {
    variant: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.string,  
}
Button.defaultProps = {
    variant: "",
    size: "",
    color: "",
    children: ""
}

export default function Button(props) {
    const { children } = props;
    return <button className="btn">{children}</button>;
}
