import React from "react";

export default function Footer() {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-2 "></section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>AK Janitorial
              </h6>
              <p>No. 1 cleaning service providers in all of Canada</p>
              <div>
                <a href="" className="me-4 text-reset">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="" className="me-4 text-reset">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="" className="me-4 text-reset">
                  <i className="fab fa-google"></i>
                </a>
                <a href="" className="me-4 text-reset">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="" className="me-4 text-reset">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Features</h6>
              <p>
                <a href="#!" className="text-reset">
                  Our Services
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Our Blog
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Testimonials
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Company</h6>
              <p>
                <a href="#!" className="text-reset">
                  About Us
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Privacy Policy
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Contact Us
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> Surrey, BC, Canada
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                akartar@hotmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 1 604-537-6712
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 1 778-713-6712
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4">
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          AK Janitorials. All Rights Reserved.
        </a>
      </div>
    </footer>
  );
}
