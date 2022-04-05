import React from "react";
import { NavLink } from "react-router-dom";

function Sanitization() {
  return (
    <div className="sanitization">
      <div className="position-relative overflow-hidden p-5 p-md-5 m-0  bg-light sanitization-banner">
        <div className="col-md-4 p-lg-5 m-5">
          <h1 className="display-4 fw-normal text-white">Sanitization</h1>
          <hr
            className="text-white fs-1 fw-bold"
            alignSelf="center"
            width="50%"
          ></hr>

          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <NavLink className="text-white" to="/">
                  Home
                </NavLink>
              </li>
              <li class="breadcrumb-item">
                <NavLink className="text-white" to="/services/serviceshome">
                  Services
                </NavLink>
              </li>

              <li class="breadcrumb-item active text-white" aria-current="page">
                Sanitization
              </li>
            </ol>
          </nav>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
      <div className="container px-5 mt-5 py-5 justify-content-center w-75">
        <div class="row featurette align-items-center">
          <div class="img-responsive col-md-5">
            <img width={"70%"} src="/Sanitization-min-300x200.jpg"></img>
          </div>
          <div class="col-md-7  align-middle">
            <h2 class="featurette-heading display-6  fs-1">Sanitization</h2>
            <p class="lead">
              <span className="fw-normal">$150.00 (Approx.)</span>
              <br></br>These are uncertain times and during these times we want
              surety that the places we get into are free of microbes. With AK
              Janitorial’s service you get that peace of mind where we make sure
              that the spaces are sanitized and safe for use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sanitization;
