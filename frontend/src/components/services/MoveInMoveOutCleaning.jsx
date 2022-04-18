import React from "react";
import { NavLink, Link } from "react-router-dom";

function MoveInMoveOutCleaning() {
  return (
    <div className="MoveInMoveOutCleaning">
      <div className="position-relative overflow-hidden p-3 p-md-5 m-0  bg-light move-cleaning-banner">
        <div className="col-md-4 p-lg-5 my-5 box">
          <h1 className="display-4 fw-normal text-black">
            Move In - <br></br> Move Out Cleaning
          </h1>
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
                Move In - Move Out Cleaning
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container mt-5 py-5 justify-content-center">
        <div className="row featurette align-items-center">
          <div className="img-responsive col-md-5 mb-3 text-center">
            <img width={"70%"} src="/Move-in-Move-out-Cleaning-min-2.jpg"></img>
          </div>
          <div className="col-md-7 my-3 align-middle">
            <h2 className="featurette-heading display-6  fs-1">
              Move In/ Move Out Cleaning
            </h2>
            <p className="lead">
              <span className="fw-normal">$300.00 (Approx.)</span>
              <br></br>Relieve some stress of move in/move out clean up with AK
              Janitorial’s cleaning service. We make it smooth and easy for
              everyone to bid adieu to an old house full of memories to feeling
              welcomed in the new home cleaned by the professionals.
            </p>
            <Link
              to={{
                pathname: "/form",
                search: "moveCleaning",
                state: { moveCleaning: true },
              }}
            >
              <span className="btn btn-primary d-block px-1 py-3">
                {" "}
                Book Now
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoveInMoveOutCleaning;
