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
        <NavLink
          className="display-6  fs-1 fw-normal text-decoration-none navbar-toggler border-0"
          to="/"
        >
          {" "}
          AK Janitorial{" "}
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
          className="collapse navbar-collapse justify-content-around"
          id="navbarNavDropdown"
        >
          <div className="justify-content-center">
            <ul className="navbar-nav px-2">
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
                    <NavLink
                      className="nav-link"
                      to="/services/pressurewashing"
                    >
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
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/services/maidcleaning">
                      Maid Cleaning
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
          <div id="call-us" className="nav-item nav-pill px-2 call-us">
            <NavLink
              className="nav-link text-white pull-right"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Call Us
            </NavLink>
          </div>

          <div
            className="modal fade"
            id="exampleModal"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body text-center">
                  <h1 className="display-6  fs-1">Call Us Now</h1>
                  <p className="display-6  fs-3 p-3">
                    <i className="fas fa-phone me-3"></i> + 1 604-537-6712
                  </p>
                  <p className="display-6  fs-3 p-3">
                    <i className="fas fa-phone me-3"></i> + 1 778-713-6712
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
