import React, { useState } from "react";
import ServiceType from "./ServiceType";
import ServiceOptions from "./ServiceOptions";
import OtherInfo from "./OtherInfo";
import "./Form.css";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    serviceType: "1",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
    serviceTypes: [
      "House Cleaning",
      "Office Cleaning",
      "Renovation Cleaning",
      "Sanitization",
      "Pressure Washing",
      "Move In / Move Out Cleaning",
      "Maid Cleaning",
    ],
  });
  const [houseCleaningData, setHouseCleaningData] = useState({
    numberOfRooms: 1,
    numberOfBathrooms: 1,
    area: 0,
    livingArea: false,
    basement: false,
    kitchen: false,
  });

  const [officeCleaningData, setOfficeCleaningData] = useState({
    officeType: 1,
    officeTypes: ["Personal Office", "Home Office", "Commercial Office Space"],
    numberOfWashrooms: 1,
    area: 0,
  });

  // console.log(formData.serviceTypes[formData.serviceType - 1], formData);
  const FormTitles = ["Service Type", "Select All Options", "Other"];

  const PageDisplay = () => {
    if (page === 0) {
      return <ServiceType formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return (
        <ServiceOptions
          formData={formData}
          setFormData={setFormData}
          houseCleaningData={houseCleaningData}
          setHouseCleaningData={setHouseCleaningData}
        />
      );
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
                console.log(houseCleaningData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
