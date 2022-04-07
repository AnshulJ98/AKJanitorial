import React from "react";
import "./Pricing.css";
import { NavLink } from "react-router-dom";

function Pricing() {
  return (
    <div className="pricing">
      <div className="position-relative overflow-hidden p-5 p-md-5 m-0  bg-light pricing-banner">
        <div className="col-md-4 p-lg-5 m-5">
          <h1 className="display-4 fw-normal text-white">Pricing</h1>
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

      <section class="ftco-section bg-light my-5 py-5">
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
                  <span class="price">
                    <sub>from</sub>
                    <sup>$</sup> <span class="number">200</span>{" "}
                    <sub>approx.</sub>
                  </span>
                  <ul class="pricing-text mb-5 text">
                    <li>
                      <i class="fa-sm fa-circle mx-2"></i>Bedroom Deep Cleaning
                    </li>
                    <li>
                      <i class="fa-sm fa-circle mx-2"></i>Bathroom Deep Cleaning
                    </li>
                    <li>
                      <i class="fa-sm fa-circle mx-2"></i>Kitchen Deep Cleaning
                    </li>
                    <li>
                      <i class="fa-sm fa-circle mx-2"></i>Carpet Shampooing
                    </li>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                  </ul>

                  <NavLink
                    class="btn btn-primary d-block px-1 py-3"
                    to="/services/housecleaning"
                  >
                    <span class="btn btn-primary d-block px-1 py-3">
                      {" "}
                      Book Now
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div class="col-md-4 ftco-animate fadeInUp ftco-animated">
              <div class="block-7">
                <div class="img office-cleaning-img"></div>
                <div class="text-center p-4">
                  <span class="excerpt d-block">Office Cleaning</span>
                  <span class="price">
                    <sub>from</sub>
                    <sup>$</sup> <span class="number">300</span>{" "}
                    <sub>approx.</sub>
                  </span>
                  <ul class="pricing-text mb-5">
                    <li>
                      <i class="fa-sm fa-circle mx-2"></i>Dusting/polishing
                      surfaces
                    </li>
                    <li>
                      <i class="fa-sm fa-circle mx-2"></i>Wiping clean and
                      disinfect door handles
                    </li>
                    <li>
                      <i class="fa-sm fa-circle mx-2"></i>Cleaning air
                      conditioning vents
                    </li>
                    <li>
                      <i class="fa-sm fa-circle mx-2"></i>Polishing floors
                    </li>
                    <li>
                      <i class="fa-sm fa-circle mx-2"></i>Staff washrooms and
                      WCs
                    </li>
                    <li>
                      <i class="fa-sm fa-circle mx-2"></i>Staff washrooms and
                      WCs
                    </li>
                    Kitchen and food prep areas
                  </ul>
                  <NavLink
                    class="btn btn-primary d-block px-1 py-3"
                    to="/services/officecleaning"
                  >
                    <span class="btn btn-primary d-block px-1 py-3">
                      {" "}
                      Book Now
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div class="col-md-4 ftco-animate fadeInUp ftco-animated">
              <div class="block-7">
                <div class="img renovation-cleaning-img"></div>
                <div class="text-center p-4">
                  <span class="excerpt d-block">Renovation Cleaning</span>
                  <span class="price">
                    <sub>from</sub>
                    <sup>$</sup> <span class="number">300</span>{" "}
                    <sub>approx.</sub>
                  </span>
                  <ul class="pricing-text mb-5">
                    <li>
                      <i class="fa-sm fa-circle mx-2"></i>Vacuuming & Mopping
                      Floors
                    </li>
                    <li>
                      <i class="fa-sm fa-circle mx-2"></i>Cleaning
                      Air-Conditioner Vents & Kitchen Hoods
                    </li>
                    <li>
                      <i class="fa-sm fa-circle mx-2"></i>Cleaning Mirror &
                      Glass Surfaces
                    </li>
                    <li>
                      <i class="fa-sm fa-circle mx-2"></i>Disinfecting The
                      Surfaces
                    </li>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                  </ul>
                  <NavLink
                    class="btn btn-primary d-block px-1 py-3"
                    to="/services/renovationcleaning"
                  >
                    <span class="btn btn-primary d-block px-1 py-3">
                      {" "}
                      Book Now
                    </span>
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
                  <span class="price">
                    <sub>from</sub>
                    <sup>$</sup> <span class="number">150</span>{" "}
                    <sub>approx.</sub>
                  </span>
                  <ul class="pricing-text mb-5 text">
                    <li>
                      <i class="fa-sm fa-circle mx-2"></i>Cleaning dirt, dust,
                      and germs from surfaces
                    </li>
                    <li>
                      <i class="fa-sm fa-circle mx-2"></i>Disinfecting to kill
                      germs on surfaces
                    </li>
                    <li>
                      <i class="fa-sm fa-circle mx-2"></i>Sanitizing all the
                      surfaces and objects
                    </li>
                    <li>
                      <i class="fa-sm fa-circle mx-2"></i>Handling and Disposing
                      waste
                    </li>
                  </ul>
                  <NavLink
                    class="btn btn-primary d-block px-1 py-3"
                    to="/services/sanitization"
                  >
                    <span class="btn btn-primary d-block px-1 py-3">
                      {" "}
                      Book Now
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div class="col-md-4 ftco-animate fadeInUp ftco-animated">
              <div class="block-7">
                <div class="img pressure-washing-img"></div>
                <div class="text-center p-4">
                  <span class="excerpt d-block">Pressure Washing</span>
                  <span class="price">
                    <sub>from</sub>
                    <sup>$</sup> <span class="number">100</span>{" "}
                    <sub>approx.</sub>
                  </span>
                  <ul class="pricing-text mb-5">
                    <li>
                      <i class="fa-sm fa-circle mx-2"></i>Washing Driveways
                    </li>
                    <li>
                      <i class="fa-sm fa-circle mx-2"></i>Washing Decks and
                      Patios
                    </li>
                    <li>
                      <i class="fa-sm fa-circle mx-2"></i>Washing Bricks and
                      Concrete
                    </li>
                    <li>
                      <i class="fa-sm fa-circle mx-2"></i>Washing Vinyl
                    </li>
                  </ul>
                  <NavLink
                    class="btn btn-primary d-block px-1 py-3"
                    to="/services/pressurewashing"
                  >
                    <span class="btn btn-primary d-block px-1 py-3">
                      {" "}
                      Book Now
                    </span>
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
                  <span class="price">
                    <sub>from</sub>
                    <sup>$</sup> <span class="number">300</span>{" "}
                    <sub>approx.</sub>
                  </span>
                  <ul class="pricing-text mb-5">
                    <li>
                      <i class="fa-sm fa-circle mx-2"></i>Rooms Deep Cleaning
                    </li>
                    <li>
                      <i class="fa-sm fa-circle mx-2"></i>Dusting/polishing
                      surfaces
                    </li>
                    <li>
                      <i class="fa-sm fa-circle mx-2"></i>Cleaning
                      Air-Conditioner Vents
                    </li>
                    <li>
                      <i class="fa-sm fa-circle mx-2"></i>Disinfecting The
                      Surfaces
                    </li>
                  </ul>
                  <NavLink
                    class="btn btn-primary d-block px-1 py-3"
                    to="/services/moveinmoveoutcleaning"
                  >
                    <span class="btn btn-primary d-block px-1 py-3">
                      {" "}
                      Book Now
                    </span>
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
                  <span class="price">
                    <sub>from</sub>
                    <sup>$</sup> <span class="number">30</span> <sub>/hr</sub>
                  </span>
                  <ul class="pricing-text mb-5 text">
                    <li>
                      <i class="fa-sm fa-circle mx-2"></i>Cleaning dirt, dust,
                      and germs from surfaces
                    </li>
                    <li>
                      <i class="fa-sm fa-circle mx-2"></i>Disinfecting to kill
                      germs on surfaces
                    </li>
                    <li>
                      <i class="fa-sm fa-circle mx-2"></i>Sanitizing all the
                      surfaces and objects
                    </li>
                    <li>
                      <i class="fa-sm fa-circle mx-2"></i>Handling and Disposing
                      waste
                    </li>
                  </ul>
                  <NavLink
                    class="btn btn-primary d-block px-1 py-3"
                    to="/services/maidcleaning"
                  >
                    <span class="btn btn-primary d-block px-1 py-3">
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
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button
                class="accordion-button lead fs-6 fw-normal"
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
              class="accordion-collapse collapse show lead fs-6 "
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div class="accordion-body">Minimum charges of $99</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwoR2">
              <button
                class="accordion-button collapsed lead fs-6 fw-normal"
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
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoR2"
            >
              <div class="accordion-body lead fs-6">Minimum charges of $69</div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwoR3">
              <button
                class="accordion-button collapsed lead fs-6 fw-normal"
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
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoR3"
            >
              <div class="accordion-body lead fs-6">Minimum charges $79</div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwoR4">
              <button
                class="accordion-button collapsed lead fs-6 fw-normal"
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
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoR4"
            >
              <div class="accordion-body lead fs-6">Minimum charges $49</div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwoR5">
              <button
                class="accordion-button collapsed lead fs-6 fw-normal"
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
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoR5"
            >
              <div class="accordion-body lead fs-6">Minimum charges $200</div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwoR6">
              <button
                class="accordion-button collapsed lead fs-6 fw-normal"
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
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoR6"
            >
              <div class="accordion-body lead fs-6">
                Minimum charges $199 in surrey and $250 in vancouver
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwoR7">
              <button
                class="accordion-button collapsed lead fs-6 fw-normal"
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
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoR7"
            >
              <div class="accordion-body lead fs-6">+ $25-50</div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwoR8">
              <button
                class="accordion-button collapsed lead fs-6 fw-normal"
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
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoR8"
            >
              <div class="accordion-body lead fs-6">
                Depends on the job a small patio $199-249, Large deck $349-$399
                , pressure washer drive way price depends on the size of the
                driveway and side walk, walkway & depends on how dirty it is .
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwoR9">
              <button
                class="accordion-button collapsed lead fs-6 fw-normal"
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
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoR9"
            >
              <div class="accordion-body lead fs-6">$32-$35 per hour</div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwoR10">
              <button
                class="accordion-button collapsed lead fs-6 fw-normal"
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
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoR10"
            >
              <div class="accordion-body lead fs-6">
                During renovations 0.55-0.65 sq.ft.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwoR11">
              <button
                class="accordion-button collapsed lead fs-6 fw-normal"
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
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoR11"
            >
              <div class="accordion-body lead fs-6">
                Final cleaning 0.55-0.65 sq.ft.
              </div>
            </div>
          </div>
        </div>
        <h1 className="display-6  fs-2 mt-5">
          Commercial <br></br>
        </h1>
        <div class="accordion" id="accordionPanelsStayOpenCommercial">
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOneC1">
              <button
                class="accordion-button lead fs-6 fw-normal"
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
              class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOneC1"
            >
              <div class="accordion-body lead fs-6">
                Yes , commercial cleaning is based on daily, weekly, bi-weekly,
                monthly.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwoC2">
              <button
                class="accordion-button collapsed lead fs-6 fw-normal"
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
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoC2"
            >
              <div class="accordion-body lead fs-6">
                Prices will be calculated by the conditions of the property.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwoC3">
              <button
                class="accordion-button collapsed lead fs-6 fw-normal"
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
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoC3"
            >
              <div class="accordion-body lead fs-6">
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
