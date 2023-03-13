import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useLocation, useNavigationType } from "react-router-dom";

const Navbar = (props) => {
  const location = useLocation();

  const [modebtn, setmodebtn] = useState("moon");
  const [hamburger, sethamburger] = useState("bars");
  const [mobileNav, setmobileNav] = useState("-100%");

  const togglebtn = () => {
    return modebtn === "moon" ? setmodebtn("sun") : setmodebtn("moon");
  };

  function mobileMenu() {
    sethamburger((state) => (state === "bars" ? "xmark" : "bars"));
    setmobileNav((state) => (state === "-100%" ? "0" : "-100%"));
  }
  const navType = useNavigationType();
  useEffect(() => {
    sethamburger("bars");
    setmobileNav("-100%");
    if (navType !== "POP") {
      window.scrollTo({
        top: 0,
      });
    }
    props.setProgress(100);
    // eslint-disable-next-line
  }, [location]);
  return (
    <nav className="navBar">
      <i
        className={`mobile-nav-icon fa-solid fa-${hamburger}`}
        onClick={mobileMenu}
      ></i>
      <span className="webtitle">
        <Link className="navSiteTitle" to="/">
          Tools DuoTechh
        </Link>
      </span>
      <ul className="navbar-ul" style={{ left: mobileNav }}>
        <li>
          <Link
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`nav-link ${
              location.pathname === "/about" ? "active" : ""
            }`}
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <a
            className="nav-link  "
            href="https://duotechh.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            Main Website
          </a>
        </li>
        <li>
          <button
            onClick={togglebtn}
            className="themeToggleBtn"
            title="Switch Mode (Light / Dark)"
          >
            <i className={`fa-solid fa-${modebtn}`}></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
