import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger/Hamburger";

function Navigation() {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <img src={require("./New-logo.png")} alt="" />
        </Link>
      </div>

      <ul className="ul-nav-link">
        <li className="li-nav-links">
          <Link
            className="nav-links"
            to="/home"
            style={{ textDecoration: "none" }}
          >
            Home
          </Link>
        </li>
        <li className="li-nav-links">
          <Link
            className="nav-links"
            to="/projects"
            style={{ textDecoration: "none" }}
          >
            Projects
          </Link>
        </li>
        <li className="li-nav-links">
          <Link
            className="nav-links"
            to="/skills"
            style={{ textDecoration: "none" }}
          >
            Skills
          </Link>
        </li>
        <li className="li-nav-links">
          <Link
            className="nav-links"
            to="/contact"
            style={{ textDecoration: "none" }}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="hamburger" id="hamburger">
        <Hamburger />
      </div>
    </div>
  );
}

export default Navigation;
