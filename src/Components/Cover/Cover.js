import React from "react";
import "./Cover.css";
const Cover = (props) => {
  return (
    <>
      <div className="cover">
        <h1 className="cover_h1">{props.title}</h1>
        <h2 className="cover_h2">{props.description}</h2>
      </div>
    </>
  );
};

export default Cover;
