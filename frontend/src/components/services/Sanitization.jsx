import React from "react";
import { NavLink } from "react-router-dom";

function Sanitization() {
  return (
    <div className="sanitization">
      <div className="position-relative overflow-hidden p-3 md-5 m-0  bg-light sanitization-banner">
        <div className="col-md-4 p-lg-5 my-5 box">
          <h1 className="display-4 fw-normal text-black">Sanitization</h1>
          <hr className="text-black fs-1 fw-bold" width="50%"></hr>

          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <NavLink className="text-black" to="/">
                  Home
                </NavLink>
              </li>
              <li className="breadcrumb-item">
                <NavLink className="text-black" to="/services/serviceshome">
                  Services
                </NavLink>
              </li>

              <li
                className="breadcrumb-item active text-black"
                aria-current="page"
              >
                Sanitization
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container mt-5 py-5 justify-content-center ">
        <div className="row featurette align-items-center">
          <div className="img-responsive col-md-5 mb-3 text-center">
            <img width={"70%"} src="/Sanitization-min-300x200.jpg"></img>
          </div>
          <div className="col-md-7  align-middle">
            <h2 className="featurette-heading display-6  fs-1">Sanitization</h2>
            <p className="lead">
              <span className="fw-normal">$150.00 (Approx.)</span>
              <br></br>These are uncertain times and during these times we want
              surety that the places we get into are free of microbes. With AK
              Janitorial’s service you get that peace of mind where we make sure
              that the spaces are sanitized and safe for use.
            </p>
            <NavLink
              className="btn btn-primary  px-4 py-3 my-4 "
              to="/services/sanitization"
            >
              {" "}
              Book Now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sanitization;
