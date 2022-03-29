import React from "react";
import { NavLink } from "react-router-dom";

function RenovationCleaning() {
  return (
    <div className="home">
      <div className="position-relative overflow-hidden p-5 p-md-5 m-0  bg-light renovation-cleaning-banner">
        <div className="col-md-4 p-lg-5 m-5">
          <h1 className="display-4 fw-normal text-white">
            Renovation Cleaning
          </h1>
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
                Renovation Cleaning
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
            <img width={"70%"} src="/Renovation-Cleaning-min-300x200.jpg"></img>
          </div>
          <div class="col-md-7  align-middle">
            <h2 class="featurette-heading display-6  fs-1">
              Renovation Cleaning
            </h2>
            <p class="lead">
              <span className="fw-normal">$300.00 (Approx.)</span>
              <br></br>Gave Your house a makeover? But left a Big Mess? No
              Worries! <br></br>AK Janitorial will make sure nothing stays
              behind which is not meant to stay there. From dust to debris we
              clean it all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RenovationCleaning;
