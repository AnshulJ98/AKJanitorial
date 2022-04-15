import React from "react";
import { NavLink } from "react-router-dom";

function ContactUs() {
  return (
    <div className="contact">
      <div className="position-relative overflow-hidden p-5 p-md-5 m-0  bg-light contact-banner">
        <div className="col-md-4 p-lg-5 my-5 box">
          <h1 className="display-4 fw-normal text-black">Contact Us</h1>
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
                Contact Us
              </li>
            </ol>
          </nav>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
      <div className="container py-5 justify-content-center w-75">
        <div className="row featurette align-items-center">
          <div className="col-md-7  align-middle">
            <h2 className="featurette-heading display-6  fs-3">
              <span className="text-muted fs-4">
                Contact Information <br></br>
              </span>
              Have Any Questions?<br></br>
              Contact Us
            </h2>
            <div className="col d-flex align-items-start py-2">
              <img
                width="8%"
                className="edgeTile"
                src="Contact-us-Phone-300x300.png"
              ></img>
              <div className="mx-5">
                <span className="text-muted fs-6">
                  Phone <br></br>
                </span>
                <p>604-537-6712, 778-713-6712</p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <img
                width="8%"
                className="edgeTile"
                src="Contact-us-Email-300x300.png"
              ></img>
              <div className="mx-5">
                <span className="text-muted fs-6">
                  Email Address <br></br>
                </span>
                <p>akartar@hotmail.com</p>
              </div>
            </div>
            <div className="col d-flex align-items-start py-2">
              <img
                width="8%"
                className="edgeTile"
                src="Contact-us-Location-300x300.png"
              ></img>
              <div className="mx-5">
                <span className="text-muted fs-6">
                  Address <br></br>
                </span>
                <p>
                  Lower mainland, Abbotsford, Mission, North Vancouver, West
                  Vancouver
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div className="mb-3">
              <div className="mb-3">
                <form>
                  <textarea
                    className="form-control mb-3"
                    id="exampleFormControlTextarea1"
                    cols="20"
                    rows="8"
                    placeholder="Enter your Message"
                    required
                  ></textarea>
                  <div className="row">
                    <div className="col-6">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Your Name"
                        required
                      ></input>
                    </div>
                    <div className="col-6">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput2"
                        placeholder="Your Email"
                        required
                      ></input>
                    </div>
                  </div>
                  <br></br>
                  <button
                    type="submit"
                    className="btn btn-primary send-message"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div>
          <a
            className="lead"
            target={"_blank"}
            href="https://maps.app.goo.gl/HDfixCLF5L6EE4NL7"
          >
            Check Out Our Reviews on Google.
          </a>
        </div>
      </div>
      <div className="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167039.36295299663!2d-123.06122823380059!3d49.14381340610089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d9277d5627f7%3A0xd449de4f76f94fc1!2sAkartar%20Janitorial%20Services%20Ltd.!5e0!3m2!1sen!2sus!4v1649927265187!5m2!1sen!2sus"
          width="100%"
          height="450px"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;
