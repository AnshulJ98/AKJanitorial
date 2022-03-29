import React from "react";

function Home() {
  return (
    <div>
      <div className="position-relative overflow-hidden p-5 p-md-5 m-0  bg-light home-banner">
        <div className="col-md-4 p-lg-5 m-5">
          <h1 className="display-4 ">Let us do your Dirty Work</h1>
          <p className="lead ">
            Our best in class cleaning service will make it a priority to leave
            your house unbeliavably fresh and super clean.
          </p>
          <a className="btn btn-outline-secondary" href="#">
            Book Now
          </a>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>

      <div className="text-center mt-3 pt-3">
        <h1 className="display-6 fs-1 ">
          Making your house <br></br>As good as new
        </h1>
      </div>

      <div
        id="myCarousel"
        class="carousel slide pointer-event m-4 p-4"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            class=""
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            class=""
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            class="active"
            aria-current="true"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active justify-content-center mx-5">
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
          <div class="carousel-item mx-5">
            <img
              className="m-2"
              width="22%"
              src="House-Cleaning-min-300x187.jpg"
            ></img>
            <img className="m-2" width="22%" src="IMG-2561.jpg"></img>
            <img className="m-2" width="22%" src="IMG-3979.jpg"></img>
            <img
              className="m-2"
              width="22%"
              src="Move-in-Move-out-Cleaning-min-1024x683.jpg"
            ></img>
          </div>
          <div class="carousel-item  mx-5">
            <img
              className="m-2"
              width="22%"
              src="Expertise-min-300x300.jpg"
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
          class="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="text-left m-5 p-5">
        <h3 className="display-6 fs-3">Our Services</h3>
        <h1 className="display-6  fs-1">Cleaning with a clear conscience</h1>
        <p className="lead ">
          Whether you want to schedule a one off clean in your home,<br></br>a
          weekly visit or even need an emergency call out, or have a commercial
          cleaning need<br></br>
          then our team are equipped to meet your needs.
        </p>
      </div>
      <div className="m-5 p-5 text-center">
        {" "}
        <video width="750" height="500" controls>
          <source src="/AK-Janitorial-clip.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Home;
