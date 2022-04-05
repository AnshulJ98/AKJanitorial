import React from "react";
import { NavLink } from "react-router-dom";

function AboutUs() {
  return (
    <div className="about">
      <div className="position-relative overflow-hidden p-5 p-md-5 m-0  bg-light about-banner">
        <div className="col-md-4 p-lg-5 m-5">
          <h1 className="display-4 fw-normal text-white">About Us</h1>
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

              <li class="breadcrumb-item active text-white" aria-current="page">
                About Us
              </li>
            </ol>
          </nav>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
      <div className="text-center mt-5 pt-5">
        <h1 className="display-6  fs-1">
          New generation of cleaning <br></br>
        </h1>
        <h3 className="display-6 fs-3">and restoration</h3>
      </div>
      <div className="text-center">
        <p className="lead ">
          Whether you want to schedule a one off clean for your home,<br></br>a
          weekly visit or even need an emergency call out, or have a commercial
          cleaning need<br></br>
          our team is equipped to meet your needs.
        </p>
      </div>
      <div className="container px-5 py-5 justify-content-center w-75">
        <div class="row g-3 py-5 row-cols-1 row-cols-lg-3 justify-content-center">
          <div class="feature col text-center px-4 edgeTile">
            <div class="feature-icon edgeTile mt-5 mb-3">
              <img
                width="25%"
                className="edgeTile"
                src="Expert-Employee-1-300x300-1.png"
              ></img>
            </div>
            <h2 className="edgeTile display-6  fs-1">Expert Employees</h2>
            <p className="edgeTile lead">
              We have helped clean hundreds of homes and apartments in Lower
              Mainland, Abbotsford, Mission & Vancouver, Surrey
            </p>
          </div>
          <div class="pb-4">
            <div class="feature col text-center middleTile px-4">
              <div class="feature-icon icon-square text-center middleTile mb-3">
                <img
                  width="25%"
                  className="edgeTile mt-5"
                  src="Affordable-Package-1-300x300-2.png"
                ></img>
              </div>
              <h2 className="middleTile text-white display-6  fs-1">
                Affordable Package
              </h2>
              <p className="middleTile text-white lead">
                We provide professional and affordable home cleaning services in
                Lower Mainland, BC. We charge reasonable prices for awesome
                cleaning. What you see is what you get.<br></br>
                <br></br>
                <br></br>
              </p>
            </div>
          </div>
          <div class="feature col edgeTile text-center px-4">
            <div class="feature-icon edgeTile mt-5 mb-3">
              <img
                width="25%"
                className="edgeTile"
                src="100-Satisfaction-300x300-1.png"
              ></img>
            </div>
            <h2 className="edgeTile display-6  fs-1">100% Satisfaction</h2>
            <p className="edgeTile lead">
              We take pride in offering you peace of mind with a 100% Customer
              Satisfaction Guarantee for our professional cleaning service
            </p>
          </div>
        </div>
      </div>
      <div className="container px-5 py-5 justify-content-center w-75">
        <div class="row featurette align-items-center">
          <div class="col-md-7  align-middle">
            <h2 class="featurette-heading display-6  fs-1">
              <span class="text-muted">
                Why Choose Us. <br></br>
              </span>
              Our Expertise Making Places Shine
            </h2>
            <p class="lead">
              At AK Janitorials we believe that we have a duty to adhere to good
              environmental practice and operate in a sustainable manner. We at
              AK Janitorial are committed to helping people make sustainable
              choices in their house.
            </p>
          </div>

          <div class="col-md-5 mg-5 pb-5">
            <div class="feature row edgeTile text-left px-4">
              <div class="feature-icon edgeTile  mb-3">
                <img
                  width="20%"
                  className="edgeTile"
                  src="Expert-Employee-1-300x300-1.png"
                ></img>
              </div>
              <h2 className="edgeTile display-6  fs-1">Expert Cleaning Team</h2>
              <p className="edgeTile lead">
                Cleaning professionals who have helped clean hundreds of places.
              </p>
            </div>
            <div class="feature row edgeTile text-left px-4">
              <div class="feature-icon edgeTile mt-3 ">
                <img
                  width="20%"
                  className="edgeTile"
                  src="Affordable-Package-300x300-1.png"
                ></img>
              </div>
              <h2 className="edgeTile display-6  fs-1">Modest Price</h2>
              <p className="edgeTile lead">
                Price is what you pay. Value is what you get. We believe that
                value is what you're looking for.
              </p>
            </div>
            <div class="feature row edgeTile text-left px-4">
              <div class="feature-icon edgeTile mt-3 mb-3">
                <img
                  width="20%"
                  className="edgeTile"
                  src="100-Satisfaction-300x300-1.png"
                ></img>
              </div>
              <h2 className="edgeTile display-6  fs-1">Reliable Service</h2>
              <p className="edgeTile lead">
                You can rely on the expericnce of our highly skilled team to
                make your place shine like new.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
