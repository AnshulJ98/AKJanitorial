import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
function TestimonialsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  return (
    <div className="contact">
      <div className="container px-5 py-5 justify-content-center w-75">
        <h2 className="featurette-heading display-6  fs-3">
          We really appreciate you leaving a feedback for us!
        </h2>
        <div className="row featurette align-items-center">
          <div className="col-md-5">
            <div className="mb-3">
              <div className="mb-3">
                <div className="form">
                  <textarea
                    required
                    className="form-control mb-3"
                    id="exampleFormControlTextarea1"
                    cols="20"
                    rows="8"
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                    }}
                    placeholder="Enter your Message"
                  ></textarea>
                  <div className="row">
                    <div className="col-6">
                      <input
                        required
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        value={formData.name}
                        placeholder="Your Name"
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                        }}
                      ></input>
                    </div>
                    <div className="col-6">
                      <input
                        required
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput2"
                        value={formData.email}
                        placeholder="Your Email"
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                        }}
                      ></input>
                    </div>
                    <div className="col-6 my-3">
                      <input
                        required
                        type="number"
                        className="form-control"
                        id="exampleFormControlInput2"
                        value={formData.phone}
                        placeholder="Your Phone"
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                        }}
                      ></input>
                    </div>
                  </div>
                  <br></br>
                  <button
                    type="submit"
                    className="btn btn-primary send-message"
                    onClick={() => {
                      if (
                        formData.name.length > 2 &&
                        formData.message.length > 2 &&
                        formData.phone.length == 10 &&
                        formData.email.length > 3 &&
                        formData.email.indexOf("@") != -1
                      ) {
                        console.log(formData);
                        axios
                          .post("https://akjanitorial.ca/feedback-submit/", {
                            formData: formData,
                          })
                          .then((res) => alert("Form Submitted"))
                          .catch((errors) => console.log(errors));
                      } else {
                        alert(
                          "Please enter valid information and make sure the all the fields are filled."
                        );
                      }
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsForm;
