import React, { useState, useEffect } from 'react';
import './Nav.scss';
import logo from '../assets/logo.png';

export default function Nav() {
  const [isActive, setIsActive] = useState(false);
  const [isFirstActiveDropDown, setFirstActiveDropDown] = useState(true);
  const [isSecondActiveDropDown, setSecondActiveDropDown] = useState(true);
  const [isThirdActiveDropDown, setThirdActiveDropDown] = useState(true);
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
      setFirstActiveDropDown(true);
      setSecondActiveDropDown(true);
      setThirdActiveDropDown(true);
      setIsActive(false);
    }
    

    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  })

  return (
    <>
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main navigation"
        id="#"
      >
        <div className="navbar-brand">
          <a className="navbar-item navbar-item--logo" href="#">
            <img
              src={logo}
              width={`${dimensions.width <= 760 ? "70" : "112"}`}
              height={`${dimensions.width <= 760 ? "18" : "28"}`}
              alt="logo"
            />
          </a>
          {
            <div className="navbar-item mobile-buttons">
              <div
                className={`buttons ${
                  dimensions.width <= 760 ? "are-small" : ""
                }`}
              >
                <button className="button login-button" href="#">
                  Log in
                </button>
                <button className="button sign-button" href="#">
                  Sign up
                </button>
              </div>
            </div>
          }

          <a
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            href="#"
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            <div
              className="navbar-item has-dropdown is-hoverable"
              onClick={() => {
                setFirstActiveDropDown(!isFirstActiveDropDown);
                setSecondActiveDropDown(true);
                setThirdActiveDropDown(true);
              }}
            >
              <a className="navbar-link is-arrowless" href="#">
                <div className="iconame">
                  <span className="icon is-medium ico">
                    <i className="far fa-user ico" />
                  </span>
                  <span>One</span>
                </div>
                <i
                  className={`fas fa-plus ico ${
                    isFirstActiveDropDown ? "" : "ico-x"
                  }`}
                />
              </a>

              <div
                className={`navbar-dropdown ${
                  isFirstActiveDropDown ? "is-hidden" : ""
                }`}
              >
                <a className="navbar-item navbar-item--light" href="#">
                  About
                </a>
                <a className="navbar-item navbar-item--light" href="#">
                  Jobs
                </a>
                <a className="navbar-item navbar-item--light" href="#">
                  Contact
                </a>
              </div>
            </div>

            <div
              className="navbar-item has-dropdown is-hoverable"
              onClick={() => {
                setSecondActiveDropDown(!isSecondActiveDropDown);
                setThirdActiveDropDown(true);
                setFirstActiveDropDown(true);
              }}
            >
              <a className="navbar-link is-arrowless" href="#">
                <div className="iconame">
                  <span className="icon is-medium ico">
                    <i className="fas fa-money-check-alt ico" />
                  </span>
                  <span>Two</span>
                </div>
                <i
                  className={`fas fa-plus ico ${
                    isSecondActiveDropDown ? "" : "ico-x"
                  }`}
                ></i>
              </a>

              <div
                className={`navbar-dropdown ${
                  isSecondActiveDropDown ? "is-hidden" : ""
                }`}
              >
                <a className="navbar-item navbar-item--light" href="#">
                  About
                </a>
                <a className="navbar-item navbar-item--light" href="#">
                  Jobs
                </a>
                <a className="navbar-item navbar-item--light" href="#">
                  Contact
                </a>
              </div>
            </div>

            <div
              className="navbar-item has-dropdown is-hoverable"
              onClick={() => {
                setThirdActiveDropDown(!isThirdActiveDropDown);
                setSecondActiveDropDown(true);
                setFirstActiveDropDown(true);
              }}
            >
              <a className="navbar-link is-arrowless" href="#">
                <div className="iconame">
                  <span className="icon is-medium ico">
                    <i className="fas fa-university ico"></i>
                  </span>
                  <span>Three</span>
                </div>
                <i
                  className={`fas fa-plus ico ${
                    isThirdActiveDropDown ? "" : "ico-x"
                  }`}
                ></i>
              </a>
              <div
                className={`navbar-dropdown ${
                  isThirdActiveDropDown ? "is-hidden" : ""
                }`}
              >
                <a className="navbar-item navbar-item--light" href="#">
                  About
                </a>
                <a className="navbar-item navbar-item--light" href="#">
                  Jobs
                </a>
                <a className="navbar-item navbar-item--light" href="#">
                  Contact
                </a>
              </div>
            </div>

            <div className={`navbar-item nav-buttons`}>
              <div className="buttons">
                <button className="button login-button" href="#">
                  Log in
                </button>
                <button className="button sign-button" href="#">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

