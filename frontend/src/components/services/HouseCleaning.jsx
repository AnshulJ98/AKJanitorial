import React from "react";
import { NavLink } from "react-router-dom";

function HouseCleaning() {
  return (
    <div className="homecleaning">
      <div className="position-relative overflow-hidden p-5 p-md-5 m-0  bg-light house-cleaning-banner">
        <div className="col-md-4 p-lg-5 m-5">
          <h1 className="display-4 fw-normal text-white">House Cleaning</h1>
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
                House Cleaning
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
            <img
              width={"70%"}
              src="/House_Calls_Michigan_City_Frost_House_living.jpg"
            ></img>
          </div>
          <div class="col-md-7  align-middle">
            <h2 class="featurette-heading display-6  fs-1">House Cleaning</h2>
            <p class="lead">
              <span className="fw-normal">$200.00 (Approx.)</span>
              <br></br>Price may vary as per the detail. For the times you need
              a touch of a professional to get a clean and fresh feel in your
              home, AK Janitorial will be there for you to take a load off from
              your hands.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HouseCleaning;
