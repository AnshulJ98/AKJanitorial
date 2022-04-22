import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
function Testimonials() {
  const [feedBackData, setFeedBackData] = useState("");
  useEffect(() => {
    getFeedbackData();
  }, []);
  const getFeedbackData = () => {
    axios
      .post("http://akjanitorial.ca/get-feedback-data/")
      .then((res) => {
        const fd = res.data;
        setFeedBackData(fd);
      })
      .catch((errors) => console.log(errors));
  };

  return (
    <div className="testimonials">
      <div className="position-relative overflow-hidden p-5 p-md-5 m-0  bg-light testimonials-banner">
        <div className="col-md-6 p-lg-6 my-5 box">
          <h1 className="display-4 fw-normal text-black">Testimonials</h1>
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
                Testimonials
              </li>
            </ol>
          </nav>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
      <div className="text-center mt-5 pt-5 container">
        <h1 className="display-6  fs-1">
          What our clients say <br></br>
        </h1>
        <h3 className="display-6 fs-3">about us?</h3>
      </div>
      <div className="text-center">
        <p className="lead ">
          Over the course of our 3 years journey, we've been <br></br> able to
          successfully establish our presence in the cleaning business <br></br>{" "}
          with a strong customer base.
        </p>
        <a
          className="lead"
          target={"_blank"}
          href="https://maps.app.goo.gl/HDfixCLF5L6EE4NL7"
        >
          Check Out Our Reviews on Google.
        </a>
      </div>

      <div className="container  my-5 py-5 justify-content-center ">
        <div className="row featurette align-items-center">
          <div className="col-md-12  align-middle">
            <section className="ftco-section bg-light">
              <div className="container">
                <div className="row justify-content-center pb-5 mb-3">
                  <div className="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated"></div>
                </div>

                <div className="row">
                  {feedBackData &&
                    feedBackData.map((review, index) => (
                      <div
                        className="col-md-6 ftco-animate fadeInUp ftco-animated"
                        key={index}
                      >
                        <div className="block-7">
                          <div className="text-center p-4">
                            {review.name && (
                              <p className="lead">{review.name}</p>
                            )}
                            {review.name && (
                              <span className="text-left">
                                {review.message}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
