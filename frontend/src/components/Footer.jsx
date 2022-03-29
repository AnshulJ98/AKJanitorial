import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter className="footer justify-content-between" color="white">
      <MDBContainer className="p-4">
        <section className="align-left">
          <MDBRow>
            <MDBCol
              lg="4"
              md="6"
              className="mb-4 mb-md-0"
              style={{ textAlign: "left" }}
            >
              <h5 className="text-uppercase">AK Janitorial</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    No. 1 cleaning service providers in all of Canada
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Call Us Now
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    604-537-6712
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    778-713-6712
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol
              lg="4"
              md="6"
              className="mb-4 mb-md-0"
              style={{ textAlign: "left" }}
            >
              <h5 className="text-uppercase">Features</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Our Blog
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Testimonials
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol
              lg="4"
              md="6"
              className="mb-4 mb-md-0"
              style={{ textAlign: "left" }}
            >
              <h5 className="text-uppercase">Company</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>
      <section className="mb-4 text-center">
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <MDBIcon fab icon="facebook-f" />
        </a>

        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <MDBIcon fab icon="twitter" />
        </a>

        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <MDBIcon fab icon="google" />
        </a>

        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <MDBIcon fab icon="instagram" />
        </a>

        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <MDBIcon fab icon="linkedin-in" />
        </a>
      </section>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2021
        <a className="text-white" href="#">
          AK Janitorials. All Rights Reserved.
        </a>
      </div>
    </MDBFooter>
  );
}
