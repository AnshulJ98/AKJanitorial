import React from "react";
import { NavLink } from "react-router-dom";

function Sanitization() {
  return (
    <div className="sanitization">
      <div className="position-relative overflow-hidden p-5 p-md-5 m-0  bg-light sanitization-banner">
        <div className="col-md-4 p-lg-5 m-5">
          <h1 className="display-4 fw-normal text-white">Maid Cleaning</h1>
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
                Maid Cleaning
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
            <h2 class="featurette-heading display-6  fs-1">Maid Cleaning</h2>
            <p class="lead">
              <span className="fw-normal">Starting From $35.00/hr</span>
              <br></br>Need some extra help after the weekend's party. We at AK
              Janitorial are here to provide the very help you need to make your
              place spotless. Our maid cleaning services include dusting around
              the place, taking care of garbage and overall cleaning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sanitization;
