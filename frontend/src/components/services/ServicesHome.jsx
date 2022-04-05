import React from "react";
import "./ServicesHome.css";
import { NavLink } from "react-router-dom";

function ServicesHome() {
  return (
    <div className="serviceshome">
      <div className="position-relative overflow-hidden p-5 p-md-5 m-0  bg-light services-home-banner">
        <div className="col-md-4 p-lg-5 m-5">
          <h1 className="display-4 fw-normal text-white">Services</h1>
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
                Services
              </li>
            </ol>
          </nav>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
      <div className="text-center mt-5 pt-5">
        <h1 className="display-6  fs-1">
          Why choose our services ?<br></br>
        </h1>
      </div>
      <div className="text-center">
        <p className="lead ">
          <br></br>
          AK Janitorial is a local business based in lower mainland. <br></br>{" "}
          We have expanded our cleaning services to an extent <br></br> where we
          became a massive cleaning firm which provides services<br></br> all
          over Canada.
        </p>
      </div>

      <section class="ftco-section bg-light">
        <div class="container">
          <div class="row justify-content-center pb-5 mb-3">
            <div class="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated"></div>
          </div>
          <div class="row">
            <div class="col-md-4 ftco-animate fadeInUp ftco-animated">
              <div class="block-7">
                <div class="img house-cleaning-img"></div>
                <div class="text-center p-4">
                  <span class="excerpt d-block">House Cleaning</span>

                  <p className="lead ">
                    <br></br>
                    For the times you need a touch of a professional to get a
                    clean and fresh feel in your home, AK Janitorial will be
                    there for you to take a load off from your hands
                  </p>

                  <NavLink
                    class="btn btn-primary d-block px-1 py-3"
                    to="/services/housecleaning"
                  >
                    {" "}
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
            <div class="col-md-4 ftco-animate fadeInUp ftco-animated">
              <div class="block-7">
                <div class="img office-cleaning-img"></div>
                <div class="text-center p-4">
                  <span class="excerpt d-block">Office Cleaning</span>
                  <p className="lead ">
                    <br></br>
                    It has been scientifically proven that when we work in a
                    tidy place, productivity shoots up. AK Janitorial is at your
                    service to help you go the extra mile every single day.
                  </p>

                  <NavLink
                    class="btn btn-primary d-block px-1 py-3"
                    to="/services/officecleaning"
                  >
                    {" "}
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
            <div class="col-md-4 ftco-animate fadeInUp ftco-animated">
              <div class="block-7">
                <div class="img renovation-cleaning-img"></div>
                <div class="text-center p-4">
                  <span class="excerpt d-block">Renovation Cleaning</span>
                  <p className="lead ">
                    <br></br>
                    Gave Your house a makeover? But left a Big Mess? No Worries!
                    AK Janitorial will make sure nothing stays behind which is
                    not meant to stay there. From dust to debris we clean it
                    all.
                  </p>

                  <NavLink
                    class="btn btn-primary d-block px-1 py-3"
                    to="/services/renovationcleaning"
                  >
                    {" "}
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 ftco-animate fadeInUp ftco-animated">
              <div class="block-7">
                <div class="img sanitization-img"></div>
                <div class="text-center p-4">
                  <span class="excerpt d-block">Sanitization</span>
                  <p className="lead ">
                    <br></br>
                    These are uncertain times and during these times we want
                    assurance that the places we get into are free of germs.
                    With AK Janitorial’s service you get that peace of mind
                    where we make sure that the spaces are sanitized and safe
                    for use.
                  </p>

                  <NavLink
                    class="btn btn-primary d-block px-1 py-3"
                    to="/services/sanitization"
                  >
                    {" "}
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
            <div class="col-md-4 ftco-animate fadeInUp ftco-animated">
              <div class="block-7">
                <div class="img pressure-washing-img"></div>
                <div class="text-center p-4">
                  <span class="excerpt d-block">Pressure Washing</span>
                  <p className="lead ">
                    <br></br>
                    Some moments and some stains are stubborn in our lives. AK
                    Janitorial’s pressure washing services makes sure that you
                    have one less stubborn thing to worry about in day to day
                    life.
                  </p>

                  <NavLink
                    class="btn btn-primary d-block px-1 py-3"
                    to="/services/pressurewashing"
                  >
                    {" "}
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
            <div class="col-md-4 ftco-animate fadeInUp ftco-animated">
              <div class="block-7">
                <div class="img moving-cleaning-img"></div>
                <div class="text-center p-4">
                  <span class="excerpt d-block">
                    Move In/ Move Out Cleaning
                  </span>
                  <p className="lead ">
                    <br></br>
                    Relieve some stress of move in/move out clean up with AK
                    Janitorial’s cleaning service. We make it smooth and easy
                    for everyone to leave your old house behind, to feeling
                    welcomed in the new home cleaned by the professionals.
                  </p>

                  <NavLink
                    class="btn btn-primary d-block px-1 py-3"
                    to="/services/moveinmoveoutcleaning"
                  >
                    {" "}
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 ftco-animate fadeInUp ftco-animated">
              <div class="block-7">
                <div class="img maid-img"></div>
                <div class="text-center p-4">
                  <span class="excerpt d-block">Maid Cleaning</span>
                  <p className="lead ">
                    <br></br>
                    These are uncertain times and during these times we want
                    surety that the places we get into are free of microbes.
                    With AK Janitorial’s service you get that peace of mind
                    where we make sure that the spaces are sanitized and safe
                    for use.
                  </p>

                  <NavLink
                    class="btn btn-primary d-block px-1 py-3"
                    to="/services/maidcleaning"
                  >
                    {" "}
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesHome;
