import React from "react";
import { NavLink } from "react-router-dom";

function ContactUs() {
  return (
    <div className="contact">
      <div className="position-relative overflow-hidden p-5 p-md-5 m-0  bg-light contact-banner">
        <div className="col-md-4 p-lg-5 m-5">
          <h1 className="display-4 fw-normal text-white">Contact Us</h1>
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
                Contact Us
              </li>
            </ol>
          </nav>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
      <div className="container px-5 py-5 justify-content-center w-75">
        <div class="row featurette align-items-center">
          <div class="col-md-7  align-middle">
            <h2 class="featurette-heading display-6  fs-3">
              <span class="text-muted fs-4">
                Contact Information <br></br>
              </span>
              Have Any Questions?<br></br>
              Contact Us
            </h2>
            <div class="col d-flex align-items-start py-2">
              <img
                width="8%"
                className="edgeTile"
                src="Contact-us-Phone-300x300.png"
              ></img>
              <div className="mx-5">
                <span class="text-muted fs-6">
                  Phone <br></br>
                </span>
                <p>604-537-6712, 778-713-6712</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <img
                width="8%"
                className="edgeTile"
                src="Contact-us-Email-300x300.png"
              ></img>
              <div className="mx-5">
                <span class="text-muted fs-6">
                  Email Address <br></br>
                </span>
                <p>akartar@hotmail.com</p>
              </div>
            </div>
            <div class="col d-flex align-items-start py-2">
              <img
                width="8%"
                className="edgeTile"
                src="Contact-us-Location-300x300.png"
              ></img>
              <div className="mx-5">
                <span class="text-muted fs-6">
                  Location <br></br>
                </span>
                <p>
                  Lower mainland, Abbotsford, Mission, North Vancouver, West
                  Vancouver
                </p>
              </div>
            </div>
            <a
              className="lead"
              target={"_blank"}
              href="https://maps.app.goo.gl/HDfixCLF5L6EE4NL7"
            >
              Check Out Our Reviews on Google.
            </a>
          </div>

          <div class="col-md-5">
            <div class="mb-3">
              <div class="mb-3">
                <form>
                  <textarea
                    class="form-control mb-3"
                    id="exampleFormControlTextarea1"
                    cols="20"
                    rows="8"
                    placeholder="Enter your Message"
                  ></textarea>
                  <div className="row">
                    <div className="col-6">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Your Name"
                      ></input>
                    </div>
                    <div className="col-6">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput2"
                        placeholder="Your Email"
                      ></input>
                    </div>
                  </div>
                  <br></br>
                  <button type="submit" class="btn btn-primary send-message">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
