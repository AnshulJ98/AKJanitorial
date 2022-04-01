import React from "react";

function HouseCleaningOptions({
  formData,
  setFormData,
  houseCleaningData,
  setHouseCleaningData,
}) {
  console.log(formData);

  return (
    <React.Fragment>
      <div class="input-group">
        <span class="input-group-text">Number of Rooms: </span>
        <input
          type="number"
          value={houseCleaningData.numberOfRooms}
          onChange={(e) => {
            setHouseCleaningData({
              ...houseCleaningData,
              numberOfRooms: e.target.value,
            });
          }}
        />
      </div>
      <div class="input-group">
        <span class="input-group-text">Number of Bathrooms: </span>
        <input
          type="number"
          value={houseCleaningData.numberOfBathrooms}
          onChange={(e) => {
            setHouseCleaningData({
              ...houseCleaningData,
              numberOfBathrooms: e.target.value,
            });
          }}
        />
      </div>
      <div class="input-group">
        <span class="input-group-text">Area (in sq. ft.): </span>
        <input
          type="number"
          value={houseCleaningData.area}
          onChange={(e) => {
            setHouseCleaningData({
              ...houseCleaningData,
              area: e.target.value,
            });
          }}
        />
      </div>
      <div class="input-group">
        <input
          class="form-check-input"
          type="checkbox"
          checked={houseCleaningData.kitchen}
          onChange={(e) => {
            setHouseCleaningData({
              ...houseCleaningData,
              kitchen: e.target.value,
            });
          }}
        ></input>

        <span class="input-group-text">Kitchen: </span>
      </div>
      <div class="input-group">
        <input
          class="form-check-input"
          type="checkbox"
          checked={houseCleaningData.livingArea}
          onChange={(e) => {
            setHouseCleaningData({
              ...houseCleaningData,
              livingArea: e.target.value,
            });
          }}
        ></input>

        <span class="input-group-text">Living Area: </span>
      </div>
      <div class="input-group">
        <input
          class="form-check-input"
          type="checkbox"
          checked={houseCleaningData.basement}
          onChange={(e) => {
            setHouseCleaningData({
              ...houseCleaningData,
              basement: e.target.value,
            });
          }}
        ></input>

        <span class="input-group-text">Basement: </span>
      </div>
    </React.Fragment>
  );
}

function OfficeCleaningOptions(formData, setFormData) {
  return <React.Fragment>OfficeCleaningOptions</React.Fragment>;
}
function RenovationCleaningOptions(formData, setFormData) {
  return <React.Fragment>RenovationCleaningOptions</React.Fragment>;
}
function SanitizationOptions(formData, setFormData) {
  return <React.Fragment>SanitizationOptions</React.Fragment>;
}
function PressureWashingOptions(formData, setFormData) {
  return <React.Fragment>PressureWashingOptions</React.Fragment>;
}
function MoveCleaningOptions(formData, setFormData) {
  return <React.Fragment>MoveCleaningOptions</React.Fragment>;
}
function MaidCleaningOptions(formData, setFormData) {
  return <React.Fragment>MaidCleaningOptions</React.Fragment>;
}

function showOptions(
  formData,
  setFormData,
  houseCleaningData,
  setHouseCleaningData
) {
  console.log(formData);
  if (formData.serviceType == 1) {
    return (
      <HouseCleaningOptions
        formData={formData}
        setFormData={setFormData}
        houseCleaningData={houseCleaningData}
        setHouseCleaningData={setHouseCleaningData}
      />
    );
  } else if (formData.serviceType == 2) {
    return <OfficeCleaningOptions />;
  } else if (formData.serviceType == 3) {
    return <RenovationCleaningOptions />;
  } else if (formData.serviceType == 4) {
    return <SanitizationOptions />;
  } else if (formData.serviceType == 5) {
    return <PressureWashingOptions />;
  } else if (formData.serviceType == 6) {
    return <MoveCleaningOptions />;
  } else if (formData.serviceType == 7) {
    return <MaidCleaningOptions />;
  }
}

function ServiceOptions({
  formData,
  setFormData,
  houseCleaningData,
  setHouseCleaningData,
}) {
  console.log(houseCleaningData);

  return (
    <div className="personal-info-container">
      {showOptions(
        formData,
        setFormData,
        houseCleaningData,
        setHouseCleaningData
      )}
    </div>
  );
}

export default ServiceOptions;
