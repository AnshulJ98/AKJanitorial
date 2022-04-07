import React from "react";
import { NavLink } from "react-router-dom";

function PressureWashing() {
  return (
    <div className="pressure-washing">
      <div className="position-relative overflow-hidden p-5 p-md-5 m-0  bg-light pressure-washing-banner">
        <div className="col-md-4 p-lg-5 m-5">
          <h1 className="display-4 fw-normal text-white">Pressure Washing</h1>
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
                Pressure Washing
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
            <img width={"70%"} src="/Pressure-Washing-min-1024x683.jpg"></img>
          </div>
          <div class="col-md-7  align-middle">
            <h2 class="featurette-heading display-6  fs-1">Pressure Washing</h2>
            <p class="lead">
              <span className="fw-normal">$100.00 (Approx.)</span>
              <br></br>Some moments and some stains are stubborn in our lives.
              AK Janitorial’s pressure washing services makes sure that you have
              one less stubborn thing to worry about in day to day life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PressureWashing;
