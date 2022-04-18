import React from "react";
import { NavLink, Link } from "react-router-dom";

function Sanitization() {
  return (
    <div className="sanitization">
      <div className="position-relative overflow-hidden p-3 p-md-5 m-0  bg-light sanitization-banner">
        <div className="col-md-4 p-lg-5 my-5 box">
          <h1 className="display-4 fw-normal text-black">Maid Cleaning</h1>
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
                Maid Cleaning
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container mt-5 py-5 justify-content-center">
        <div className="row featurette align-items-center">
          <div className="img-responsive col-md-5  mb-3 text-center">
            <img width={"70%"} src="/Sanitization-min-300x200.jpg"></img>
          </div>
          <div className="col-md-7 my-3 align-middle">
            <h2 className="featurette-heading display-6  fs-1">
              Maid Cleaning
            </h2>
            <p className="lead">
              <span className="fw-normal">Starting From $35.00/hr</span>
              <br></br>Need some extra help after the weekend's party. We at AK
              Janitorial are here to provide the very help you need to make your
              place spotless. Our maid cleaning services include dusting around
              the place, taking care of garbage and overall cleaning.
            </p>
            <Link
              to={{
                pathname: "/form",
                search: "houseCleaning",
                state: { houseCleaning: true },
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

export default Sanitization;
