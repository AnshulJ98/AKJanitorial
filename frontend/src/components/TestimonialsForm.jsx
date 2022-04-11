import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

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
        <h2 class="featurette-heading display-6  fs-3">
          We really appreciate you leaving a feedback for us!
        </h2>
        <div class="row featurette align-items-center">
          <div class="col-md-5">
            <div class="mb-3">
              <div class="mb-3">
                <div className="form">
                  <textarea
                    required
                    class="form-control mb-3"
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
                        class="form-control"
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
                        class="form-control"
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
                        class="form-control"
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
                    class="btn btn-primary send-message"
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
                          .post("http://l27.0.0.1:8000/feedback-submit/", {
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
