import React from "react";
import { NavLink } from "react-router-dom";

function MoveInMoveOutCleaning() {
  return (
    <div className="MoveInMoveOutCleaning">
      <div className="position-relative overflow-hidden p-5 p-md-5 m-0  bg-light move-cleaning-banner">
        <div className="col-md-4 p-lg-5 m-5">
          <h1 className="display-4 fw-normal text-white">
            Move In/ Move Out Cleaning
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
                Move In/ Move Out Cleaning
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
            <img width={"70%"} src="/Move-in-Move-out-Cleaning-min-2.jpg"></img>
          </div>
          <div class="col-md-7  align-middle">
            <h2 class="featurette-heading display-6  fs-1">
              Move In/ Move Out Cleaning
            </h2>
            <p class="lead">
              <span className="fw-normal">$300.00 (Approx.)</span>
              <br></br>Relieve some stress of move in/move out clean up with
              Akartar Janitorial’s cleaning service. We make it smooth and easy
              for everyone to bid adieu to an old house full of memories to
              feeling welcomed in the new home cleaned by the professionals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoveInMoveOutCleaning;
