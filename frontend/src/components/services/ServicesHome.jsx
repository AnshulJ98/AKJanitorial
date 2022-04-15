import React from "react";
import "./ServicesHome.css";
import { NavLink } from "react-router-dom";

function ServicesHome() {
  return (
    <div className="serviceshome">
      <div className="position-relative overflow-hidden p-5 p-md-5 m-0  bg-light services-home-banner">
        <div className="col-md-4 p-lg-5 my-5 box">
          <h1 className="display-4 fw-normal text-black">Services</h1>
          <hr className="text-black fs-1 fw-bold" width="50%"></hr>

          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <NavLink className="text-black" to="/">
                  Home
                </NavLink>
              </li>

              <li
                className="breadcrumb-item active text-black"
                aria-current="page"
              >
                Services
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container text-center mt-5 pt-5">
        <h1 className="display-6  fs-1">
          Why choose our services ?<br></br>
        </h1>
      </div>
      <div className="container text-center w-md-100 w-lg-50 mb-5 pb-2 justify-content-center">
        <p className="lead">
          AK Janitorial is a local business based in lower mainland. We have
          expanded our cleaning services to an extent where we became a massive
          cleaning firm which provides services all over Canada.
        </p>
      </div>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5 col-xl-4 ftco-animate fadeInUp ftco-animated">
              <div className="block-7">
                <div className="img house-cleaning-img"></div>
                <div className="text-center p-4">
                  <span className="excerpt d-block">House Cleaning</span>

                  <p className="lead ">
                    <br></br>
                    AK Janitorial will provide the very touch of a professional
                    that you need to get a clean and fresh feel in your home.
                  </p>

                  <NavLink
                    className="btn btn-primary d-block px-1 py-3 my-4"
                    to="/services/housecleaning"
                  >
                    {" "}
                    Book Now
                  </NavLink>

                  <NavLink to="/services/housecleaning"> Read More</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4 ftco-animate fadeInUp ftco-animated">
              <div className="block-7">
                <div className="img office-cleaning-img"></div>
                <div className="text-center p-4">
                  <span className="excerpt d-block">Office Cleaning</span>
                  <p className="lead ">
                    <br></br>
                    AK Janitorial is at your service to make your workplace tidy
                    and uplift the mental wellbeing of all the employees.
                  </p>

                  <NavLink
                    className="btn btn-primary d-block px-1 py-3 my-4"
                    to="/services/officecleaning"
                  >
                    {" "}
                    Book Now
                  </NavLink>
                  <NavLink to="/services/officecleaning"> Read More</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4 ftco-animate fadeInUp ftco-animated">
              <div className="block-7">
                <div className="img renovation-cleaning-img"></div>
                <div className="text-center p-4">
                  <span className="excerpt d-block">Renovation Cleaning</span>
                  <p className="lead ">
                    <br></br>
                    Gave Your house a makeover? But left a Big Mess? No Worries!
                    AK Janitorial is here to help. From dust to debris we clean
                    it all.
                  </p>
                  <NavLink
                    className="btn btn-primary d-block px-1 py-3 my-4"
                    to="/services/renovationcleaning"
                  >
                    {" "}
                    Book Now
                  </NavLink>
                  <NavLink to="/services/renovationcleaning">
                    {" "}
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4 ftco-animate fadeInUp ftco-animated">
              <div className="block-7">
                <div className="img sanitization-img"></div>
                <div className="text-center p-4">
                  <span className="excerpt d-block">Sanitization</span>
                  <p className="lead ">
                    <br></br>
                    With AK Janitorial’s service you get that peace of mind
                    where we make sure that the spaces are sanitized and safe
                    for use.
                  </p>
                  <NavLink
                    className="btn btn-primary d-block px-1 py-3 my-4"
                    to="/services/sanitization"
                  >
                    {" "}
                    Book Now
                  </NavLink>
                  <NavLink to="/services/sanitization"> Read More</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4 ftco-animate fadeInUp ftco-animated">
              <div className="block-7">
                <div className="img pressure-washing-img"></div>
                <div className="text-center p-4">
                  <span className="excerpt d-block">Pressure Washing</span>
                  <p className="lead ">
                    <br></br>
                    AK Janitorial’s pressure washing services makes sure that
                    you have one less stubborn stain to worry about in day to
                    day life.
                  </p>
                  <NavLink
                    className="btn btn-primary d-block px-1 py-3 my-4"
                    to="/services/pressurewashing"
                  >
                    {" "}
                    Book Now
                  </NavLink>
                  <NavLink to="/services/pressurewashing"> Read More</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4 ftco-animate fadeInUp ftco-animated">
              <div className="block-7">
                <div className="img moving-cleaning-img"></div>
                <div className="text-center p-4">
                  <span className="excerpt d-block">
                    Move In/ Move Out Cleaning
                  </span>
                  <p className="lead ">
                    <br></br>
                    Relieve some stress of move in/move out clean up. Just focus
                    on your belongings and leave the cleaning to AK Janitorials.
                  </p>

                  <NavLink
                    className="btn btn-primary d-block px-1 py-3 my-4"
                    to="/services/moveinmoveoutcleaning"
                  >
                    {" "}
                    Book Now
                  </NavLink>
                  <NavLink to="/services/moveinmoveoutcleaning">
                    {" "}
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4 ftco-animate fadeInUp ftco-animated">
              <div className="block-7">
                <div className="img maid-img"></div>
                <div className="text-center p-4">
                  <span className="excerpt d-block">Maid Cleaning</span>
                  <p className="lead ">
                    <br></br>
                    Need some extra help after the weekend's party. We at AK
                    Janitorial are here to make your place spotless.
                  </p>
                  <div className="text-white">.</div>

                  <NavLink
                    className="btn btn-primary d-block px-1 py-3 my-4"
                    to="/services/maidcleaning"
                  >
                    {" "}
                    Book Now
                  </NavLink>
                  <NavLink to="/services/maidcleaning"> Read More</NavLink>
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
