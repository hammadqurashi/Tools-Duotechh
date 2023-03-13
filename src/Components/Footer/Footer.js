import React from "react";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer">
        <div className="footer-content">
          <h1 className="footer-h1">Tools Duotechh</h1>
          <p className="footer-p">
            "Discover a wide range of free online web tools at Tools Duotechh -
            simplify your daily tasks and enhance your productivity with our
            user-friendly and efficient tools."
          </p>
        </div>
        <div className="footer-bottom">
          <span className="footer-copyright">
            Copyright &#169; {year}
            {"  "}-{"  "}
            <span className="company-name">DuoTechh</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
