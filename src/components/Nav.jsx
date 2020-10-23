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
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="/#">
            <img src={logo} width="112" height="28" alt="logo" />
          </a>
          {
            <div className="navbar-item mobile-buttons">
              <div className="buttons">
                <button className="button login-button" href="/#">
                  Log in
                </button>
                <button className="button sign-button" href="/#">
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
            href="/#"
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
            <div className="navbar-item has-dropdown is-hoverable">
              <a
                className="navbar-link is-arrowless"
                href="/#"
                onClick={() => {
                  setFirstActiveDropDown(!isFirstActiveDropDown);
                }}
              >
                One
              </a>

              <div
                className={`navbar-dropdown ${
                  isFirstActiveDropDown ? "is-hidden" : ""
                }`}
              >
                <a className="navbar-item" href="/#">
                  About
                </a>
                <a className="navbar-item" href="/#">
                  Jobs
                </a>
                <a className="navbar-item" href="/#">
                  Contact
                </a>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a
                className="navbar-link is-arrowless"
                href="/#"
                onClick={() => {
                  setSecondActiveDropDown(!isSecondActiveDropDown);
                }}
              >
                Two
              </a>

              <div
                className={`navbar-dropdown ${
                  isSecondActiveDropDown ? "is-hidden" : ""
                }`}
              >
                <a className="navbar-item" href="/#">
                  About
                </a>
                <a className="navbar-item" href="/#">
                  Jobs
                </a>
                <a className="navbar-item" href="/#">
                  Contact
                </a>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a
                className="navbar-link is-arrowless"
                href="/#"
                onClick={() => {
                  setThirdActiveDropDown(!isThirdActiveDropDown);
                }}
              >
                Three
              </a>

              <div
                className={`navbar-dropdown ${
                  isThirdActiveDropDown ? "is-hidden" : ""
                }`}
              >
                <a className="navbar-item" href="/#">
                  About
                </a>
                <a className="navbar-item" href="/#">
                  Jobs
                </a>
                <a className="navbar-item" href="/#">
                  Contact
                </a>
              </div>
            </div>

            <div className={`navbar-item nav-buttons`}>
              <div className="buttons">
                <button className="button login-button" href="/#">
                  Log in
                </button>
                <button className="button sign-button" href="/#">
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

