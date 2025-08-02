import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar(props) {
  const location = useLocation();

  // Manual type check
  if (typeof props.title !== "string") {
    throw new Error("Invalid prop `title`: expected a string.");
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-text-width"></i>
          {props.title}
        </Link>

        <ul className="navbar-nav">
          <li>
            <Link
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
              to="/"
            >
              <i className="fas fa-home"></i>
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
              <i className="fas fa-info-circle"></i>
              About
            </Link>
          </li>
          <li>
            <button
              className="theme-toggle"
              onClick={props.toggleMode}
              title="Toggle theme"
            >
              <i
                className={`fas ${
                  props.mode === "light" ? "fa-moon" : "fa-sun"
                }`}
              ></i>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
