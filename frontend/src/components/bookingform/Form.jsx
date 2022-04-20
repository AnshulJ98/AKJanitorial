import React, { useState } from "react";
import ServiceType from "./ServiceType";
import ServiceOptions from "./ServiceOptions";
import SelectDate from "./SelectDate";
import UserData from "./UserData";
import BookingDetails from "./BookingDetails";
import BookingFee from "./BookingFee";
import ImageUpload from "./ImageUpload";
import ServiceFrequency from "./ServiceFrequency";
import { useLocation } from "react-router-dom";

import "./Form.css";
import axios from "axios";
let i = 0;
function Form() {
  const props = useLocation();
  const service = props.search.substring(1);
  if (service == "houseCleaning") {
    i = 0;
  } else if (service == "officeCleaning") {
    i = 1;
  } else if (service == "renovationCleaning") {
    i = 2;
  } else if (service == "sanitization") {
    i = 3;
  } else if (service == "pressureWashing") {
    i = 4;
  } else if (service == "moveCleaning") {
    i = 5;
  } else if (service == "maidCleaning") {
    i = 6;
  } else if (service == "otherCleaning") {
    i = 7;
  }
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    index: i,
    services: [String(i + 1)],
    image1: "",
    serviceFrequency: 0,
    bookingTime: null,
    houseCleaningSelected: true,
    officeCleaningSelected: false,
    pressureWashingSelected: false,
    sanitizationSelected: false,
    renovationCleaningSelected: false,
    moveCleaningSelected: false,
    maidCleaningSelected: false,
    otherCleaningSelected: false,
    serviceTypes: [
      "House Cleaning",
      "Office Cleaning",
      "Renovation Cleaning",
      "Sanitization",
      "Pressure Washing",
      "Move In / Move Out Cleaning",
      "Maid Cleaning",
      "Other(Garage, Gym, School)",
    ],
    houseCleaningData: {
      numberOfRooms: 1,
      numberOfBathrooms: 1,
      area: 500,
      livingArea: false,
      basement: false,
      kitchen: false,
      carpet: false,
    },
    officeCleaningData: {
      cabins: 1,
      numberOfWashrooms: 1,
      area: 500,
      carpet: false,
    },
    renovationCleaningData: {
      numberOfRooms: 1,
      numberOfBathrooms: 1,
      area: 500,
      livingArea: false,
      basement: false,
      kitchen: false,
      carpet: false,
    },
    sanitizationData: {
      request: "",
    },
    pressureWashingData: {
      area: 500,
      driveway: false,
      patio: false,
      cementedBackyard: false,
    },
    moveCleaningData: {
      numberOfRooms: 1,
      numberOfBathrooms: 1,
      area: 500,
      livingArea: false,
      basement: false,
      kitchen: false,
      carpet: false,
    },
    maidCleaningData: {
      numberOfRooms: 1,
      numberOfBathrooms: 1,
      area: 500,
    },
    otherCleaningData: {
      request: "",
    },
    userData: {
      name: null,
      email: null,
      phone: null,
      address: null,
    },
  });

  // console.log(formData.serviceTypes[formData.serviceType - 1], formData);
  const FormTitles = [
    "Services",
    "Select All Options",
    "Image Upload",
    "Select Date",
    "Service Frequency",
    "Please Enter Your Details",
    "Booking Details",
    "Booking Fee",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <ServiceType formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <ServiceOptions formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <ImageUpload formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <SelectDate formData={formData} setFormData={setFormData} />;
    } else if (page === 4) {
      return <ServiceFrequency formData={formData} setFormData={setFormData} />;
    } else if (page === 5) {
      return <UserData formData={formData} setFormData={setFormData} />;
    } else if (page === 6) {
      return <BookingDetails formData={formData} setFormData={setFormData} />;
    } else {
      return <BookingFee formData={formData} setFormData={setFormData} />;
    }
  };
  console.log(formData.bookingTime == null);
  return (
    <div className="form mt-5">
      <div className="progressbar">
        <div
          style={{
            width:
              page === 0
                ? "12.2%"
                : page === 1
                ? "24.4%"
                : page === 2
                ? "36.6%"
                : page === 3
                ? "48.8%"
                : page === 4
                ? "60%"
                : page === 5
                ? "72.2%"
                : page === 6
                ? "84.2%"
                : page === 7
                ? "100%"
                : "100%",
          }}
        ></div>
      </div>

      <div className="form-container py-5 ">
        <div className="form-banner">
          <div className="header">
            <h1 className="display-4 fw-normal text-black">
              {FormTitles[page]}
            </h1>
          </div>
          <div className="body">{PageDisplay()}</div>
          <div className="form-footer">
            <button
              className="display-4 fw-normal fs-5"
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>
            {page != FormTitles.length - 1 &&
              !(page == 3 && formData.bookingTime == null) &&
              !(
                page == 5 &&
                (formData.userData.name == null ||
                  formData.userData.email == null ||
                  formData.userData.phone == null ||
                  formData.userData.address == null)
              ) && (
                <button
                  className="display-4 fw-normal fs-5"
                  onClick={() => {
                    setPage((currPage) => currPage + 1);
                  }}
                >
                  {"Next"}
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
