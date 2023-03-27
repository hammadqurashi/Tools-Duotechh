import React, { useRef } from "react";
import "./alert.css";
const Alert = (props) => {
  const { message, report } = props;

  const alertref = useRef(null);

  const dismissAlert = () => {
    alertref.current.style.display = "none";
  };

  return (
    <div className="alert" ref={alertref}>
      <div className="top">
        <i className="fa-solid fa-xmark alert-cross" onClick={dismissAlert}></i>
      </div>
      <div className="bottom">
        <span className="alert-report-box">
          <i
            className={`alert-report fa-sharp fa-solid fa-circle-${
              report === "success" ? "check" : "xmark"
            }`}
          ></i>
        </span>
        <span className="alert-message">{message}</span>
      </div>
    </div>
  );
};

export default Alert;
