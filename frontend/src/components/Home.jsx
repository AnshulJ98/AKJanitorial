import React, { useRef, useEffect } from "react";
import Form from "./bookingform/Form";
import { NavLink } from "react-router-dom";

function Home() {
  const videoRef = useRef(undefined);
  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });
  return (
    <div>
      <div className="position-relative overflow-hidden p-5 p-md-5 m-0  bg-light home-banner">
        <div className="col-md-5 p-lg-5 m-2 box">
          <h1 className="display-4 ">Let us do your Dirty Work</h1>
          <p className="lead ">
            Our best in class cleaning service will make it a priority to leave
            your house unbeliavably fresh and super clean.
          </p>
          <NavLink to="/form">
            <span className="btn btn-secondary"> Book Now</span>
          </NavLink>
        </div>
      </div>

      <div className="text-center mt-3 pt-3">
        <h1 className="display-6 fs-1 ">
          Making your house <br></br>As good as new
        </h1>
      </div>

      <div className="container my-5">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src="Move-in-Move-out-Cleaning-min-2.jpg"
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="Office-Cleaning-min-2-1024x683.jpg"
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src="House_Calls_Michigan_City_Frost_House_living.jpg"
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src="Sanitization-min-2-scaled.jpg"
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src="House-Cleaning-min-300x187.jpg"
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src="Move-in-Move-out-Cleaning-min-1024x683.jpg"
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src="pressure-washing-deck.png"
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src="Office-Cleaning-min.jpg"
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src="patio-deck.png"
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src="Expertise-min-300x300-1.jpg"
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src="IMG-2561-1.jpg"
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
            <div className="carousel-item">
              <img src="IMG-3979.jpg" className="d-block w-100" alt="..."></img>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div
        id="myCarousel"
        className="carousel carousel-dark slide container"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className=""
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className=""
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className="active"
            aria-current="true"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="m-2"
              width="22%"
              src="Move-in-Move-out-Cleaning-min-2.jpg"
            ></img>
            <img
              className="m-2"
              width="22%"
              src="Office-Cleaning-min-2-1024x683.jpg"
            ></img>
            <img
              className="m-2"
              width="22%"
              src="House_Calls_Michigan_City_Frost_House_living.jpg"
            ></img>
            <img
              className="m-2"
              width="22%"
              src="Sanitization-min-2-scaled.jpg"
            ></img>
          </div>
          <div className="carousel-item">
            <img
              className="m-2"
              width="22%"
              src="House-Cleaning-min-300x187.jpg"
            ></img>
            <img className="m-2" width="22%" src="IMG-2561-1.jpg"></img>
            <img className="m-2" width="22%" src="IMG-3979.jpg"></img>
            <img
              className="m-2"
              width="22%"
              src="Move-in-Move-out-Cleaning-min-1024x683.jpg"
            ></img>
          </div>
          <div className="carousel-item">
            <img
              className="m-2"
              width="22%"
              src="Expertise-min-300x300-1.jpg"
            ></img>
            <img className="m-2" width="22%" src="patio-deck.png"></img>
            <img
              className="m-2"
              width="22%"
              src="pressure-washing-deck.png"
            ></img>
            <img
              className="m-2"
              width="22%"
              src="Office-Cleaning-min.jpg"
            ></img>
          </div>
        </div>
        <button
          id="carousel-left"
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          id="carousel-right"
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>
      <div className="text-left container justify-content-center">
        <h3 className="display-6 fs-3">Our Services</h3>
        <h1 className="display-6  fs-1">Cleaning with a clear conscience</h1>
        <p className="lead ">
          Whether you want to schedule a one off clean in your home,<br></br>a
          weekly visit or even need an emergency call out, or have a commercial
          cleaning need<br></br>
          our team is equipped to meet your needs.
        </p>
      </div>
      <div className="container justify-content-center ">
        <div className="row g-3 py-5 row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-4 justify-content-center">
          <div className="feature col text-left px-4 edgeTile">
            <div className="feature-icon edgeTile mt-5 mb-3">
              <img width="25%" className="edgeTile" src="Office.png"></img>
            </div>
            <h2 className="edgeTile display-6  fs-1">Office Cleaning</h2>
            <p className="edgeTile lead">
              We make sure that your space shines and impresses your clients and
              employees alike.
            </p>
          </div>
          <div className="feature col edgeTile text-left px-4">
            <div className="feature-icon edgeTile mt-5 mb-3">
              <img width="25%" className="edgeTile" src="Home.png"></img>
            </div>
            <h2 className="edgeTile display-6  fs-1">Home Cleaning</h2>
            <p className="edgeTile lead">
              If you require home cleaning, apartment cleaning or maid service,
              we are simply the best.
            </p>
          </div>
          <div className="feature col edgeTile text-left px-4">
            <div className="feature-icon edgeTile mt-5 mb-3">
              <img
                width="25%"
                className="edgeTile"
                src="Pressure-Washing (1).png"
              ></img>
            </div>
            <h2 className="edgeTile display-6  fs-1">Pressure Wash</h2>
            <p className="edgeTile lead">
              Jet Spray used to achieve maximum cleaning with the minimum energy
              and time.
            </p>
          </div>
          <div className="feature col edgeTile text-left px-4">
            <div className="feature-icon edgeTile mt-5 mb-3">
              <img
                width="25%"
                className="edgeTile"
                src="Gutter-Cleaning.png"
              ></img>
            </div>
            <h2 className="edgeTile display-6  fs-1">Gutter Cleaning</h2>
            <p className="edgeTile lead">
              Washing, cleaning and removing leaves from gutters and de-clogging
              them.
            </p>
          </div>
        </div>
      </div>
      <div className="container justify-content-center">
        <div className="text-center">
          <img
            width="7%"
            className="edgeTile text-center mb-5"
            src="Half-Circles.png"
          ></img>
          <h1 className="display-6  fs-1">
            Simple, Transparent Pricing <br></br>
          </h1>
        </div>
      </div>
      <div className="justify-content-center">
        <p className="lead text-center">
          Whether you want to schedule a one off clean for your home,<br></br>a
          weekly visit or even need an emergency call out, or have a commercial
          cleaning need<br></br>
          our team is equipped to meet your needs.
        </p>
      </div>
      <div className="container text-center my-3">
        {" "}
        <video
          id="landing-video"
          controls
          ref={videoRef}
          loop
          autoPlay
          muted
          playsInline
        >
          <source src="home-clip.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Home;
