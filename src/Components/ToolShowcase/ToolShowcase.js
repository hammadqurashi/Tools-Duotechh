import React from "react";
import { Link } from "react-router-dom";
import "./toolshowcase.css";

const ToolShowcase = (props) => {
  return (
    <Link className="tool-showcase" to={props.toolShowCaseLink}>
      <img src={props.toolShowCaseImg} alt="" className="tool-showcase-img" />
      <span className="tool-showcase-name">{props.toolShowCaseName}</span>
    </Link>
  );
};

export default ToolShowcase;
