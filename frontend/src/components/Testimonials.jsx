import React from "react";
import { NavLink } from "react-router-dom";

function Testimonials() {
  return (
    <div className="testimonials">
      <div className="position-relative overflow-hidden p-5 p-md-5 m-0  bg-light testimonials-banner">
        <div className="col-md-4 p-lg-5 m-5">
          <h1 className="display-4 fw-normal text-white">Testimonials</h1>
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
                Testimonials
              </li>
            </ol>
          </nav>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
      <div className="text-center mt-5 pt-5">
        <h1 className="display-6  fs-1">
          What out clients say <br></br>
        </h1>
        <h3 className="display-6 fs-3">about us?</h3>
      </div>
      <div className="text-center">
        <p className="lead ">
          Over the course of our 3 years journey, we've been <br></br> able to
          successfully establish our presence in the cleaning business <br></br>{" "}
          with a strong customer base.
        </p>
      </div>

      <div className="container px-5 mt-5 py-5 justify-content-center w-75">
        <div class="row featurette align-items-center">
          <div class="img-responsive col-md-5">
            <img width={"70%"} src="/Move-in-Move-out-Cleaning-min-2.jpg"></img>
          </div>
          <div class="col-md-7  align-middle">
            <h2 class="featurette-heading display-6  fs-1">Testimonials</h2>
            <p class="lead">
              TestimonialsTestimonialsTestimonialsTestimonials <br></br>{" "}
              TestimonialsTestimonialsTestimonialsTestimonials <br></br>{" "}
              TestimonialsTestimonialsTestimonialsTestimonialsTestimonials{" "}
              <br></br>{" "}
              TestimonialsTestimonialsTestimonialsTestimonialsTestimonials
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
