// Components/NavBar2.js

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../components/Navbar1.css";
import "../components/Navbar2.css";

function NavBar2() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary main-nav">
        <div className="container-fluid nav2">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeLink === "/" ? "active" : ""}`}
                  // onClick={() => handleNavLinkClick("/")}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "/Entertainment" ? "active" : ""
                  }`}
                  // onClick={() => handleNavLinkClick("/Entertainment")}
                  to="/Entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "/Technology" ? "active" : ""
                  }`}
                  // onClick={() => handleNavLinkClick("/Technology")}
                  to="/Technology"
                >
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "/Sports" ? "active" : ""
                  }`}
                  // onClick={() => handleNavLinkClick("/Sports")}
                  to="/Sports"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "/Business" ? "active" : ""
                  }`}
                  // onClick={() => handleNavLinkClick("/Business")}
                  to="/Business"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "/Health" ? "active" : ""
                  }`}
                  // onClick={() => handleNavLinkClick("/Health")}
                  to="/Health"
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "/Science" ? "active" : ""
                  }`}
                  // onClick={() => handleNavLinkClick("/Science")}
                  to="/Science"
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "/Portfolio" ? "active" : ""
                  }`}
                  // onClick={() => handleNavLinkClick("/Portfolio")}
                  to="https://github.com/Souhar-dya/Personal_portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "/Portfolio" ? "active" : ""
                  }`}
                  // onClick={() => handleNavLinkClick("/logout")}
                  to="/signup"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar2;
