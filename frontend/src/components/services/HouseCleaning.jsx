import React from "react";
import { NavLink } from "react-router-dom";

function HouseCleaning() {
  return (
    <div className="homecleaning">
      <div className="position-relative overflow-hidden p-3 p-md-5 m-0  bg-light house-cleaning-banner">
        <div className="col-md-4 my-5 box">
          <h1 className="display-4 fw-normal text-black">House Cleaning</h1>
          <hr
            className="text-black fs-1 fw-bold"
            alignSelf="center"
            width="50%"
          ></hr>

          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <NavLink className="text-black" to="/">
                  Home
                </NavLink>
              </li>
              <li class="breadcrumb-item">
                <NavLink className="text-black" to="/services/serviceshome">
                  Services
                </NavLink>
              </li>

              <li class="breadcrumb-item active text-black" aria-current="page">
                House Cleaning
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container mt-5 py-5 justify-content-center ">
        <div class="row featurette align-items-center">
          <div class="img-responsive col-md-5 mb-3 text-center">
            <img
              width={"70%"}
              src="/House_Calls_Michigan_City_Frost_House_living.jpg"
            ></img>
          </div>
          <div class="col-md-7 my-3 align-middle">
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
