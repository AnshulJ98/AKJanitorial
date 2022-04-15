import React from "react";
import { NavLink } from "react-router-dom";

function PressureWashing() {
  return (
    <div className="pressure-washing">
      <div className="position-relative overflow-hidden p-3 p-md-5 m-0  bg-light pressure-washing-banner">
        <div className="col-md-4 p-lg-5 my-5 box">
          <h1 className="display-4 fw-normal text-black">Pressure Washing</h1>
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
                Pressure Washing
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container mt-5 py-5 justify-content-center">
        <div className="row featurette align-items-center">
          <div className="img-responsive col-md-5 mb-3 text-center">
            <img width={"70%"} src="/Pressure-Washing-min-1024x683.jpg"></img>
          </div>
          <div className="col-md-7 my-3 align-middle">
            <h2 className="featurette-heading display-6  fs-1">
              Pressure Washing
            </h2>
            <p className="lead">
              <span className="fw-normal">$100.00 (Approx.)</span>
              <br></br>Some moments and some stains are stubborn in our lives.
              AK Janitorial’s pressure washing services makes sure that you have
              one less stubborn thing to worry about in day to day life.
            </p>
            <NavLink
              className="btn btn-primary  px-4 py-3 my-4 "
              to="/services/pressurewashing"
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

export default PressureWashing;
