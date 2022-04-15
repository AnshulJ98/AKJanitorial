import React from "react";
import "./Pricing.css";
import { NavLink, Link } from "react-router-dom";

function Pricing() {
  return (
    <div className="pricing">
      <div className="position-relative overflow-hidden p-5 p-md-5 m-0  bg-light pricing-banner">
        <div className="col-md-4 p-lg-5 my-5 box">
          <h1 className="display-4 text-black fw-normal">Pricing</h1>
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
                Pricing
              </li>
            </ol>
          </nav>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
      <div className="text-center mt-5 pt-5">
        <h1 className="display-6  fs-1">
          We are offering the best pricing <br></br>
        </h1>
        <h3 className="display-6 fs-3">to help you</h3>
      </div>
      <div className="text-center">
        <p className="lead ">
          <br></br>
          We have kept our prices reasonable to be affordable<br></br>
          to the masses while providing great service
        </p>
      </div>

      <section className="ftco-section bg-light my-5 py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5 col-xl-4 ftco-animate fadeInUp ftco-animated">
              <div className="block-7">
                <div className="img house-cleaning-img"></div>
                <div className="text-center p-4">
                  <span className="excerpt d-block">House Cleaning</span>
                  <span className="price">
                    <sub>from</sub>
                    <sup>$</sup> <span className="number">200</span>{" "}
                  </span>
                  <ul className="pricing-text mb-5 text">
                    <li>
                      <i className="fs-4 px-2">&bull;</i>Bedroom Deep Cleaning
                    </li>
                    <li>
                      <i className="fs-4 px-2">&bull;</i>Bathroom Deep Cleaning
                    </li>
                    <li>
                      <i className="fs-4 px-2">&bull;</i>Kitchen Deep Cleaning
                    </li>
                    <li>
                      <i className="fs-4 px-2">&bull;</i>Carpet Shampooing
                    </li>
                    <li>
                      <i className="fs-4 px-2">&bull;</i>Living Area Cleaning
                    </li>
                    <li>
                      <i className="fs-4 px-2">&bull;</i>Basement Cleaning
                    </li>
                  </ul>

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
            <div className="col-md-6 col-lg-5 col-xl-4 ftco-animate fadeInUp ftco-animated">
              <div className="block-7">
                <div className="img office-cleaning-img"></div>
                <div className="text-center p-4">
                  <span className="excerpt d-block">Office Cleaning</span>
                  <span className="price">
                    <sub>from</sub>
                    <sup>$</sup> <span className="number">300</span>{" "}
                  </span>
                  <ul className="pricing-text mb-5">
                    <li>
                      <i className="fs-4 px-2">&bull;</i>Dusting/polishing
                      surfaces
                    </li>
                    <li>
                      <i className="fs-4 px-2">&bull;</i>Wiping clean and
                      disinfect door handles
                    </li>
                    <li>
                      <i className="fs-4 px-2">&bull;</i>Cleaning air
                      conditioning vents
                    </li>
                    <li>
                      <i className="fs-4 px-2">&bull;</i>Polishing floors
                    </li>
                    <li>
                      <i className="fs-4 px-2">&bull;</i>Staff washrooms and WCs
                    </li>
                    <li>
                      <i className="fs-4 px-2">&bull;</i>Carpent Shampooing
                    </li>
                  </ul>
                  <NavLink to="/services/officecleaning">
                    <span className="btn btn-primary d-block px-1 py-3">
                      {" "}
                      Book Now
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4 ftco-animate fadeInUp ftco-animated">
              <div className="block-7">
                <div className="img renovation-cleaning-img"></div>
                <div className="text-center p-4">
                  <span className="excerpt d-block">Renovation Cleaning</span>
                  <span className="price">
                    <sub>from</sub>
                    <sup>$</sup> <span className="number">300</span>{" "}
                  </span>
                  <ul className="pricing-text mb-5">
                    <li>
                      <i className="fs-4 px-2">&bull;</i>Vacuuming & Mopping
                      Floors
                    </li>
                    <li>
                      <i className="fs-4 px-2">&bull;</i>Cleaning
                      Air-Conditioner Vents
                    </li>
                    <li>
                      <i className="fs-4 px-2">&bull;</i>Cleaning Kitchen Hoods
                    </li>
                    <li>
                      <i className="fs-4 px-2">&bull;</i>Cleaning Mirror & Glass
                      Surfaces
                    </li>
                    <li>
                      <i className="fs-4 px-2">&bull;</i>Disinfecting The
                      Surfaces
                    </li>
                    <li>
                      <i className="fs-4 px-2">&bull;</i>Kitchen and food prep
                      areas
                    </li>
                  </ul>
                  <NavLink to="/services/renovationcleaning">
                    <span className="btn btn-primary d-block px-1 py-3">
                      {" "}
                      Book Now
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-5 col-xl-4 ftco-animate fadeInUp ftco-animated">
              <div className="block-7">
                <div className="img sanitization-img"></div>
                <div className="text-center p-4">
                  <span className="excerpt d-block">Sanitization</span>
                  <span className="price">
                    <sub>from</sub>
                    <sup>$</sup> <span className="number">150</span>{" "}
                  </span>
                  <ul className="pricing-text mb-5 text">
                    <li>
                      <i className="fs-4 px-2">&bull;</i>Cleaning dirt, dust
                      from surfaces
                    </li>
                    <li>
                      <i className="fs-4 px-2">&bull;</i>Disinfecting to kill
                      germs on surfaces
                    </li>
                    <li>
                      <i className="fs-4 px-2">&bull;</i>Sanitizing all the
                      surfaces and objects
                    </li>
                    <li>
                      <i className="fs-4 px-2">&bull;</i>Handling and Disposing
                      waste
                    </li>
                    <div className="text-white">.</div>
                    <p className="text-white">.</p>
                    <p className="text-white">.</p>
                  </ul>
                  <NavLink to="/services/sanitization">
                    <span className="btn btn-primary d-block px-1 py-3">
                      {" "}
                      Book Now
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4 ftco-animate fadeInUp ftco-animated">
              <div className="block-7">
                <div className="img pressure-washing-img"></div>
                <div className="text-center p-4">
                  <span className="excerpt d-block">Pressure Washing</span>
                  <span className="price">
                    <sub>from</sub>
                    <sup>$</sup> <span className="number">100</span>{" "}
                  </span>
                  <ul className="pricing-text mb-5">
                    <li>
                      <i className="fs-4 px-2">&bull;</i>Washing Driveways
                    </li>
                    <li>
                      <i className="fs-4 px-2">&bull;</i>Washing Decks and
                      Patios
                    </li>
                    <li>
                      <i className="fs-4 px-2">&bull;</i>Washing Bricks and
                      Concrete
                    </li>
                    <li>
                      <i className="fs-4 px-2">&bull;</i>Washing Vinyl
                    </li>
                    <div className="text-white">.</div>
                    <p className="text-white">.</p>
                    <p className="text-white">.</p>
                  </ul>
                  <NavLink to="/services/pressurewashing">
                    <span className="btn btn-primary d-block px-1 py-3">
                      {" "}
                      Book Now
                    </span>
                  </NavLink>
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
                  <span className="price">
                    <sub>from</sub>
                    <sup>$</sup> <span className="number">300</span>{" "}
                  </span>
                  <ul className="pricing-text mb-5">
                    <li>
                      <i className="fs-4 px-2">&bull;</i>Rooms Deep Cleaning
                    </li>
                    <li>
                      <i className="fs-4 px-2">&bull;</i>Dusting/polishing
                      surfaces
                    </li>
                    <li>
                      <i className="fs-4 px-2">&bull;</i>Cleaning
                      Air-Conditioner Vents
                    </li>
                    <li>
                      <i className="fs-4 px-2">&bull;</i>Disinfecting The
                      Surfaces
                    </li>
                    <div className="text-white">.</div>
                    <p className="text-white">.</p>
                    <p className="text-white">.</p>
                  </ul>
                  <NavLink to="/services/moveinmoveoutcleaning">
                    <span className="btn btn-primary d-block px-1 py-3">
                      {" "}
                      Book Now
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-5 col-xl-4 ftco-animate fadeInUp ftco-animated">
              <div className="block-7">
                <div className="img maid-img"></div>
                <div className="text-center p-4">
                  <span className="excerpt d-block">Maid Cleaning</span>
                  <span className="price">
                    <sub>from</sub>
                    <sup>$</sup> <span className="number">35</span>{" "}
                    <sub>/hr</sub>
                  </span>
                  <ul className="pricing-text mb-5 text">
                    <li>
                      <i className="fs-4 px-2">&bull;</i>Bedroom Deep Cleaning
                    </li>
                    <li>
                      <i className="fs-4 px-2">&bull;</i>Bathroom Deep Cleaning
                    </li>
                    <li>
                      <i className="fs-4 px-2">&bull;</i>Kitchen Deep Cleaning
                    </li>
                    <li>
                      <i className="fs-4 px-2">&bull;</i>Carpet Shampooing
                    </li>
                    <div className="text-white">.</div>
                    <p className="text-white">.</p>
                    <p className="text-white">.</p>
                  </ul>
                  <NavLink to="/services/maidcleaning">
                    <span className="btn btn-primary d-block px-1 py-3">
                      {" "}
                      Book Now
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="p-5 m-5">
        <h1 className="display-6 text-center fs-1">
          Frequently Asked Questions <br></br>
        </h1>
        <h1 className="display-6 mt-5 fs-2">
          Residential <br></br>
        </h1>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button lead fs-6 fw-normal"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                What would be Price for Cleaning 1 bedroom?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show lead fs-6 "
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body">Minimum charges of $99</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwoR2">
              <button
                className="accordion-button collapsed lead fs-6 fw-normal"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwoR2"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwoR2"
              >
                What would be Price for Cleaning 1 bathroom?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwoR2"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoR2"
            >
              <div className="accordion-body lead fs-6">
                Minimum charges of $69
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwoR3">
              <button
                className="accordion-button collapsed lead fs-6 fw-normal"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwoR3"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwoR3"
              >
                What would be price for Each additional bedroom after 1 bedroom?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwoR3"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoR3"
            >
              <div className="accordion-body lead fs-6">
                Minimum charges $79
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwoR4">
              <button
                className="accordion-button collapsed lead fs-6 fw-normal"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwoR4"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwoR4"
              >
                What would be price for Each additional bathroom after 1
                bathroom?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwoR4"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoR4"
            >
              <div className="accordion-body lead fs-6">
                Minimum charges $49
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwoR5">
              <button
                className="accordion-button collapsed lead fs-6 fw-normal"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwoR5"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwoR5"
              >
                What would be base price for a home with 1 bedroom and 1
                bathroom?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwoR5"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoR5"
            >
              <div className="accordion-body lead fs-6">
                Minimum charges $200
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwoR6">
              <button
                className="accordion-button collapsed lead fs-6 fw-normal"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwoR6"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwoR6"
              >
                Estimated cost for cleaning a 1BHK apartment?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwoR6"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoR6"
            >
              <div className="accordion-body lead fs-6">
                Minimum charges $199 in surrey and $250 in vancouver
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwoR7">
              <button
                className="accordion-button collapsed lead fs-6 fw-normal"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwoR7"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwoR7"
              >
                Any pricing variations for graveyard shifts?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwoR7"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoR7"
            >
              <div className="accordion-body lead fs-6">+ $25-50</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwoR8">
              <button
                className="accordion-button collapsed lead fs-6 fw-normal"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwoR8"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwoR8"
              >
                How would the pricing for Pressure Washing be calculated? What
                would be pricing per sq. ft.?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwoR8"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoR8"
            >
              <div className="accordion-body lead fs-6">
                Depends on the job a small patio $199-249, Large deck $349-$399
                , pressure washer drive way price depends on the size of the
                driveway and side walk, walkway & depends on how dirty it is .
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwoR9">
              <button
                className="accordion-button collapsed lead fs-6 fw-normal"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwoR9"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwoR9"
              >
                How would the pricing for Sanitization be calculated? What would
                be pricing per sq. ft.?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwoR9"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoR9"
            >
              <div className="accordion-body lead fs-6">$32-$35 per hour</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwoR10">
              <button
                className="accordion-button collapsed lead fs-6 fw-normal"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwoR10"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwoR10"
              >
                How would the pricing for Renovation Cleaning be calculated?
                What would be pricing for 1BHK .?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwoR10"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoR10"
            >
              <div className="accordion-body lead fs-6">
                During renovations 0.55-0.65 sq.ft.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwoR11">
              <button
                className="accordion-button collapsed lead fs-6 fw-normal"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwoR11"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwoR11"
              >
                How would the pricing for New House Cleaning be calculated? What
                would be pricing for 1BHK .?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwoR11"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoR11"
            >
              <div className="accordion-body lead fs-6">
                Final cleaning 0.55-0.65 sq.ft.
              </div>
            </div>
          </div>
        </div>
        <h1 className="display-6  fs-2 mt-5">
          Commercial <br></br>
        </h1>
        <div className="accordion" id="accordionPanelsStayOpenCommercial">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOneC1">
              <button
                className="accordion-button lead fs-6 fw-normal"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOneC1"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOneC1"
              >
                Do you want to have diffentriated pricing options for
                residential and commercial customers?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOneC1"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOneC1"
            >
              <div className="accordion-body lead fs-6">
                Yes , commercial cleaning is based on daily, weekly, bi-weekly,
                monthly.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwoC2">
              <button
                className="accordion-button collapsed lead fs-6 fw-normal"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwoC2"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwoC2"
              >
                How would the pricing be differentiated?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwoC2"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoC2"
            >
              <div className="accordion-body lead fs-6">
                Prices will be calculated by the conditions of the property.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwoC3">
              <button
                className="accordion-button collapsed lead fs-6 fw-normal"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwoC3"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwoC3"
              >
                What would be pricing sq. ft.?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwoC3"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoC3"
            >
              <div className="accordion-body lead fs-6">
                We will be doing Fogging Services also minimum charges of $99 or
                $50 hr if it’s weekly. overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
