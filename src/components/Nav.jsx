import React, { useState } from 'react';
import './Nav.scss';
import logo from '../assets/logo.png'

export default function Nav() {
  const [isActive, setisActive] = useState(false);

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/#">
          <img src={logo} width="112" height="28" alt="logo" />
        </a>

        <div className="navbar-item">
          <div className="buttons">
            <button className="button" href="/#">
              Sign up
            </button>
            <button className="button is-warning" href="/#">
              Log in
            </button>
          </div>
        </div>
        <a
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          href="/#"
          onClick={() => {
            setisActive(!isActive);
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
          <a className="navbar-item" href="/#">
            One
          </a>
          <a className="navbar-item" href="/#">
            Two
          </a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link is-arrowless" href="/#">
              Three
            </a>

            <div className="navbar-dropdown">
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

          <div className="navbar-item">
            <div className="buttons">
              <button className="button" href="/#">
                Sign up
              </button>
              <button className="button is-warning" href="/#">
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

