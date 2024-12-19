import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = ({ to, children }) => {
  return (
    <Link to={to} style={buttonStyle}>
      {children}
    </Link>
  );
};

// Styling untuk link-button
const buttonStyle = {
  display: "inline-block",
  padding: "10px 20px",
  margin: "10px 0",
  backgroundColor: "#2575fc",
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
  borderRadius: "5px",
};

export default ButtonLink;
