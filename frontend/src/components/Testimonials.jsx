import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Testimonials() {
  const [feedBackData, setFeedBackData] = useState("");
  useEffect(() => {
    getFeedbackData();
  }, []);
  const getFeedbackData = () => {
    axios
      .post("http://127.0.0.1:8000/get-feedback-data/")
      .then((res) => {
        console.log(res.data);
        const fd = res.data;
        setFeedBackData(fd);
      })
      .catch((errors) => console.log(errors));
  };

  console.log(feedBackData);
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

      <div className="container px-5 my-5 py-5 justify-content-center w-75">
        <div class="row featurette align-items-center">
          <div class="col-md-12  align-middle">
            <section class="ftco-section bg-light">
              <div class="container">
                <div class="row justify-content-center pb-5 mb-3">
                  <div class="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated"></div>
                </div>

                <div class="row">
                  {feedBackData &&
                    feedBackData.map((review, index) => (
                      <div class="col-md-6 ftco-animate fadeInUp ftco-animated">
                        <div class="block-7">
                          <div class="text-center p-4">
                            {review.name && <p class="lead">{review.name}</p>}
                            {review.name && (
                              <span className="text-left">{review.name}</span>
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
