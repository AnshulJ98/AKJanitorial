import React from "react";

export default function Footer() {
  return (
    <footer class="text-center text-lg-start bg-light text-muted">
      <section class="d-flex justify-content-center justify-content-lg-between p-2 "></section>

      <section class="">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3"></i>AK Janitorial
              </h6>
              <p>No. 1 cleaning service providers in all of Canada</p>
              <div>
                <a href="" class="me-4 text-reset">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="" class="me-4 text-reset">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="" class="me-4 text-reset">
                  <i class="fab fa-google"></i>
                </a>
                <a href="" class="me-4 text-reset">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="" class="me-4 text-reset">
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Features</h6>
              <p>
                <a href="#!" class="text-reset">
                  Our Services
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Our Blog
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Testimonials
                </a>
              </p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Company</h6>
              <p>
                <a href="#!" class="text-reset">
                  About Us
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Privacy Policy
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Contact Us
                </a>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i class="fas fa-home me-3"></i> Surrey, BC, Canada
              </p>
              <p>
                <i class="fas fa-envelope me-3"></i>
                akartar@hotmail.com
              </p>
              <p>
                <i class="fas fa-phone me-3"></i> + 1 604-537-6712
              </p>
              <p>
                <i class="fas fa-phone me-3"></i> + 1 778-713-6712
              </p>
            </div>
          </div>
        </div>
      </section>

      <div class="text-center p-4">
        © 2021 Copyright:
        <a class="text-reset fw-bold" href="https://mdbootstrap.com/">
          AK Janitorials. All Rights Reserved.
        </a>
      </div>
    </footer>
  );
}
