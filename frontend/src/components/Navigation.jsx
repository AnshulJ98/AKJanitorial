import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Navigation() {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fs-5">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            className="img-responsive"
            width="60%"
            src="/Thumbnail.png"
          ></img>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/aboutus">
                About Us
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li className="nav-item">
                  <NavLink className="nav-link" to="/services/serviceshome">
                    All Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/services/housecleaning">
                    House Cleaning
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/services/officecleaning">
                    Office Cleaning
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/services/sanitization">
                    Sanitization
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/services/pressurewashing">
                    Pressure Washing
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/services/renovationcleaning"
                  >
                    Renovation Cleaning
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/services/moveinmoveoutcleaning"
                  >
                    Move In/ Move Out Cleaning
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pricing">
                Pricing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/testimonials">
                Testimonials
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contactus">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <span className="nav-item nav-pill mx-5 px-2 call-us">
          <NavLink className="nav-link text-white" to="#">
            Call Us
          </NavLink>
        </span>
      </div>
    </nav>
  );
}

export default Navigation;
