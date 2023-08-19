import React, { useState } from "react";
import "./css/Header.scss";
import { NavLink } from "react-bootstrap";
import Button from "./button/Button";
import { Link } from "react-router-dom";
const Header = () => {
  const [color, setColor] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // scroll color change
  const changeColor = () => {
    if (window.scrollY >= 56) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? " fixed-top navbar-scrolled " : " fixed-top "}>
      <nav className="container d-md-flex align-items-center navbar-container">
        <div className="logo fs-3">Coding Master</div>

        <div className="icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars fdf"></i>
          )}
        </div>

        <ul
          className={
            isMobile
              ? "show navbar-container ul-container"
              : "navbar-container ul-container ms-auto pt-2"
          }
        >
          <li className="li-container">
            <a className="links " href="#home">
              Home
            </a>
          </li>

          <li className="li-container">
            <label for="btn-1" className="show">
              Features+
            </label>
            <a className="links" href="#about">
              About
            </a>
            <input type="checkbox" id="btn-1" />
            <ul className="bg-dropdown ul-container">
              <li className="li-container">
                <Link className="links" href="#">
                  Feature 1
                </Link>
              </li>
              <li className="li-container">
                <Link className="links" href="#">
                  Feature 2
                </Link>
              </li>
              <li className="li-container pb-3">
                <Link className="links" href="#">
                  Feature 3
                </Link>
              </li>
            </ul>
          </li>

          <li className="li-container">
            <label for="btn-2" className="show ">
              Services+
            </label>
            <a className="links" href="#features">
              Services
            </a>
            <input type="checkbox" id="btn-2" />
            <ul className="bg-dropdown ul-container">
              <li className="li-container">
                <Link className="links" href="#">
                  Project Management
                </Link>
              </li>
              <li className="li-container">
                <Link className="links" href="#">
                  Project Management
                </Link>
              </li>
              <li className="li-container">
                <Link className="links" href="#">
                  Mobile App Development
                </Link>
              </li>
              <li className="li-container pb-3">
                <Link className="links" href="#">
                  Search Engine Optimization
                </Link>
              </li>
            </ul>
          </li>

          <li className="li-container">
            <a className="links">
             Technologies
            </a>
          </li>
          <li className="li-container">
            <a className="links" to="/career">
              Careers
            </a>
          </li>
        
          <button className="btn  mt-2 btn-nav-link rounded-0 fw-bold">
            Get In Touch
          </button>
          {/* <Link className="links">
            <Button label={"Get in touch"} />
          </Link> */}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
