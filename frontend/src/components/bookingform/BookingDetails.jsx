import React, { useState, useEffect } from "react";

function HouseCleaningOptions({ formData, setFormData }) {
  console.log(formData);

  return (
    <div className="booking-details-container">
      <h3 className="px-5 my-3 display-6 fs-3 fw-normal text-black">
        House Cleaning:
      </h3>
      <div className="px-5">
        <p className="lead ">
          Number of Rooms: {formData.houseCleaningData.numberOfRooms}
        </p>
      </div>
      <div className=" px-5">
        <p className="lead">
          Number of Bathrooms: {formData.houseCleaningData.numberOfBathrooms}
        </p>
      </div>
      <div className=" px-5">
        <p className="lead">
          Area (in sq. ft.): {formData.houseCleaningData.area}
        </p>
      </div>
      <div className=" px-5">
        <p className="lead">
          Kitchen: {formData.houseCleaningData.kitchen ? "Yes" : "No"}
        </p>
      </div>
      <div className=" px-5">
        <p className="lead">
          Living Area: {formData.houseCleaningData.kitchen ? "Yes" : "No"}
        </p>
      </div>
      <div className=" px-5">
        <p className="lead">
          Basement: {formData.houseCleaningData.basement ? "Yes" : "No"}
        </p>
      </div>
      <div className=" px-5">
        <p className="lead">
          Carpet: {formData.houseCleaningData.carpet ? "Yes" : "No"}
        </p>
      </div>
      <div className="carpet-text m-3 p-3"></div>
    </div>
  );
}

function OfficeCleaningOptions({ formData, setFormData }) {
  return (
    <div>
      <h3 className="px-5 my-3 display-6 fs-3 fw-normal text-black">
        Office Cleaning:{" "}
      </h3>
      <div className="px-5">
        <p className="lead">
          Number of Cabins: {formData.officeCleaningData.cabins}
        </p>
      </div>
      <div className=" px-5">
        <p className="lead">
          Number of Washrooms: {formData.officeCleaningData.numberOfWashrooms}
        </p>
      </div>
      <div className="px-5">
        <p className="lead">
          Area (in sq. ft.): {formData.officeCleaningData.area}
        </p>
      </div>
      <div className="input-group px-5">
        <p className="lead">
          Carpet: {formData.officeCleaningData.carpet ? "Yes" : "No"}
        </p>
      </div>
      <div className="carpet-text m-3 p-3"></div>
    </div>
  );
}
function RenovationCleaningOptions({ formData, setFormData }) {
  return (
    <div>
      <h3 className="px-5 my-3 display-6 fs-3 fw-normal text-black">
        Renovation Cleaning:{" "}
      </h3>
      <div className=" px-5">
        <p className="lead">
          Number of Rooms: {formData.renovationCleaningData.numberOfRooms}
        </p>
      </div>
      <div className=" px-5">
        <p className="lead">
          Number of Bathrooms:{" "}
          {formData.renovationCleaningData.numberOfBathrooms}
        </p>
      </div>
      <div className=" px-5">
        <p className="lead">
          Area (in sq. ft.): {formData.renovationCleaningData.area}
        </p>
      </div>
      <div className="px-5">
        <p className="lead">
          Kitchen: {formData.renovationCleaningData.kitchen ? "Yes" : "No"}
        </p>
      </div>
      <div className=" px-5">
        <p className="lead">
          Living Area:{" "}
          {formData.renovationCleaningData.livingArea ? "Yes" : "No"}
        </p>
      </div>
      <div className=" px-5">
        <p className="lead">
          Basement: {formData.renovationCleaningData.basement ? "Yes" : "No"}
        </p>
      </div>
      <div className=" px-5">
        <p className="lead">
          Carpet: {formData.renovationCleaningData.carpet ? "Yes" : "No"}
        </p>
      </div>
      <div className="carpet-text m-3 p-3"></div>
    </div>
  );
}
function SanitizationOptions({ formData, setFormData }) {
  return (
    <div>
      <h3 className="px-5 my-3 display-6 fs-3 fw-normal text-black">
        Sanitization Cleaning:{" "}
      </h3>
      <div className=" px-5">
        <p className="lead">Request: {formData.sanitizationData.request}</p>
      </div>
      <div className="carpet-text m-3 p-3"></div>
    </div>
  );
}
function PressureWashingOptions({ formData, setFormData }) {
  return (
    <div>
      <h3 className="px-5 my-3 display-6 fs-3 fw-normal text-black">
        Pressure Washing:
      </h3>

      <div className="px-5">
        <p className="lead">
          Area (in sq. ft.): {formData.pressureWashingData.area}
        </p>
      </div>
      <div className="px-5">
        <p className="lead">
          Driveway: {formData.pressureWashingData.driveway ? "Yes" : "No"}
        </p>
      </div>
      <div className="input-group px-5">
        <p className="lead">
          Patio: {formData.pressureWashingData.patio ? "Yes" : "No"}
        </p>
      </div>
      <div className="input-group px-5">
        <p className="lead">
          Cemented Backyard:{" "}
          {formData.pressureWashingData.cementedBackyard ? "Yes" : "No"}
        </p>
      </div>
      <div className="input-group px-5">
        <p className="lead">
          Carpet: {formData.pressureWashingData.carpet ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
}
function MoveCleaningOptions({ formData, setFormData }) {
  return (
    <div>
      <h3 className="px-5 my-3 display-6 fs-3 fw-normal text-black">
        Move Cleaning Options
      </h3>
      <div className="input-group px-5">
        <p className="lead">
          Number of Rooms: {formData.moveCleaningData.numberOfRooms}
        </p>
      </div>
      <div className="input-group px-5">
        <p className="lead">
          Number of Bathrooms: {formData.moveCleaningData.numberOfBathrooms}
        </p>
      </div>
      <div className="input-group px-5">
        <p className="lead">
          Area (in sq. ft.): {formData.moveCleaningData.area}
        </p>
      </div>
      <div className="input-group px-5">
        <p className="lead">
          Kitchen: {formData.moveCleaningData.kitchen ? "Yes" : "No"}
        </p>
      </div>
      <div className="input-group px-5">
        <p className="lead">
          Living Area: {formData.moveCleaningData.livingArea ? "Yes" : "No"}
        </p>
      </div>
      <div className="input-group px-5">
        <p className="lead">
          Basement: {formData.moveCleaningData.basement ? "Yes" : "No"}
        </p>
      </div>
      <div className="input-group px-5">
        <p className="lead">
          Carpet: {formData.moveCleaningData.carpet ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
}
function MaidCleaningOptions({ formData, setFormData }) {
  return (
    <div>
      <h3 className="px-5 my-3 display-6 fs-3 fw-normal text-black">
        Maid Cleaning Options
      </h3>
      <div className="input-group px-5">
        <p className="lead">
          Number of Rooms: {formData.maidCleaningData.numberOfRooms}
        </p>
      </div>
      <div className="input-group px-5">
        <p className="lead">
          Number of Bathrooms: {formData.maidCleaningData.numberOfBathrooms}
        </p>
      </div>
      <div className="input-group px-5">
        <p className="lead">
          Area (in sq. ft.): {formData.maidCleaningData.area}
        </p>
      </div>
    </div>
  );
}
function OtherCleaningOptions({ formData, setFormData }) {
  return (
    <div>
      <h3 className="px-5 my-3 display-6 fs-3 fw-normal text-black">
        Other Cleaning Options
      </h3>
      <div className="input-group px-5">
        <p className="lead">Request: {formData.otherCleaningData.request}</p>
      </div>
    </div>
  );
}
function ServiceFrequency({ formData, setFormData }) {
  return (
    <div>
      <h3 className="px-5 my-3 display-6 fs-3 fw-normal text-black">
        Service Frequency
      </h3>
      <div className="input-group px-5">
        <p className="lead">{formData.serviceFrequency == 0 && "One-Time"}</p>
        <p className="lead">{formData.serviceFrequency == 1 && "Weekly"}</p>
        <p className="lead">
          {formData.serviceFrequency == 2 && "Bi-Weekly (Every 2 weeks)"}
        </p>
        <p className="lead">
          {formData.serviceFrequency == 3 && "Monthly (Every 4 weeks)"}
        </p>
        <p className="lead">
          {formData.serviceFrequency == 4 && "3 Months (Every 12 weeks)"}
        </p>
      </div>
    </div>
  );
}

function UserData({ formData, setFormData }) {
  return (
    <div>
      <h3 className="px-5 my-3 display-6 fs-3 fw-normal text-black">
        User Information
      </h3>
      <div className="input-group px-5">
        <p className="lead">Name: {formData.userData.name}</p>
      </div>
      <div className="input-group px-5">
        <p className="lead">Email: {formData.userData.email}</p>
      </div>
      <div className="input-group px-5">
        <p className="lead">Phone: {formData.userData.phone}</p>
      </div>
      <div className="input-group px-5">
        <p className="lead">Address: {formData.userData.address}</p>
      </div>
      <div className="input-group px-5">
        <p className="lead">Address: {formData.userData.city}</p>
      </div>
      <div className="input-group px-5">
        <p className="lead">Address: {formData.userData.province}</p>
      </div>
      <div className="input-group px-5">
        <p className="lead">Address: {formData.userData.postalcode}</p>
      </div>
    </div>
  );
}
function SelectedImages({ formData, setFormData }) {
  return (
    <div className="mb-3">
      <h3 className="px-5 my-3 display-6 fs-3 fw-normal text-black">
        Uploaded Images
      </h3>
      <div className="text-center">
        {formData.image1str && (
          <img alt="not found" width={"350px"} src={formData.image1str} />
        )}
      </div>
      <div className="text-center">
        {formData.image2str && (
          <img alt="not found" width={"350px"} src={formData.image2str} />
        )}
      </div>
      <div className="text-center">
        {formData.image3str && (
          <img alt="not found" width={"350px"} src={formData.image3str} />
        )}
      </div>
      <div className="text-center">
        {formData.image4str && (
          <img alt="not found" width={"350px"} src={formData.image4str} />
        )}
      </div>
      <div className="text-center">
        {formData.image5str && (
          <img alt="not found" width={"350px"} src={formData.image5str} />
        )}
      </div>
    </div>
  );
}

function BookingDetails({ formData, setFormData }) {
  console.log(formData);
  let e = formData.services;
  let houseCleaningSelected = false;
  let officeCleaningSelected = false;
  let renovationCleaningSelected = false;
  let sanitizationSelected = false;
  let pressureWashingSelected = false;
  let moveCleaningSelected = false;
  let maidCleaningSelected = false;
  let otherCleaningSelected = false;
  for (var i in e) {
    if (e[i] == 1) {
      houseCleaningSelected = true;
    }
    if (e[i] == 2) {
      officeCleaningSelected = true;
    }
    if (e[i] == 3) {
      renovationCleaningSelected = true;
    }
    if (e[i] == 4) {
      sanitizationSelected = true;
    }
    if (e[i] == 5) {
      pressureWashingSelected = true;
    }
    if (e[i] == 6) {
      moveCleaningSelected = true;
    }
    if (e[i] == 7) {
      maidCleaningSelected = true;
    }
    if (e[i] == 8) {
      otherCleaningSelected = true;
    }
  }
  return (
    <div className="other-info-container px-5 justify-content-center">
      {houseCleaningSelected && (
        <HouseCleaningOptions formData={formData} setFormData={setFormData} />
      )}
      {officeCleaningSelected && (
        <OfficeCleaningOptions formData={formData} setFormData={setFormData} />
      )}
      {renovationCleaningSelected && (
        <RenovationCleaningOptions
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {sanitizationSelected && (
        <SanitizationOptions formData={formData} setFormData={setFormData} />
      )}
      {pressureWashingSelected && (
        <PressureWashingOptions formData={formData} setFormData={setFormData} />
      )}
      {moveCleaningSelected && (
        <MoveCleaningOptions formData={formData} setFormData={setFormData} />
      )}
      {maidCleaningSelected && (
        <MaidCleaningOptions formData={formData} setFormData={setFormData} />
      )}
      {otherCleaningSelected && (
        <OtherCleaningOptions formData={formData} setFormData={setFormData} />
      )}
      {ServiceFrequency && (
        <ServiceFrequency formData={formData} setFormData={setFormData} />
      )}
      {UserData && <UserData formData={formData} setFormData={setFormData} />}
      {SelectedImages && (
        <SelectedImages formData={formData} setFormData={setFormData} />
      )}
    </div>
  );
}

export default BookingDetails;
