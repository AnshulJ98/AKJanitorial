import React, { useState, useEffect } from "react";

function HouseCleaningOptions({ formData, setFormData }) {
  console.log(formData);

  return (
    <div>
      <h4 className="mx-3 my-2">House Cleaning:</h4>
      <div class=" m-3 justify-content-between">
        <p className="lead">
          Number of Rooms: {formData.houseCleaningData.numberOfRooms}
        </p>
      </div>
      <div class=" m-3 justify-content-between">
        <p className="lead">
          Number of Bathrooms: {formData.houseCleaningData.numberOfBathrooms}
        </p>
      </div>
      <div class=" m-3 justify-content-between">
        <p className="lead">
          Area (in sq. ft.): {formData.houseCleaningData.area}
        </p>
      </div>
      <div class=" m-3 justify-content-between">
        <p className="lead">
          Kitchen: {formData.houseCleaningData.kitchen ? "Yes" : "No"}
        </p>
      </div>
      <div class=" m-3 justify-content-between">
        <p className="lead">
          Living Area: {formData.houseCleaningData.kitchen ? "Yes" : "No"}
        </p>
      </div>
      <div class=" m-3 justify-content-between">
        <p className="lead">
          Basement: {formData.houseCleaningData.basement ? "Yes" : "No"}
        </p>
      </div>
      <div class=" m-3 justify-content-between">
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
      <h4 className="mx-3">Office Cleaning: </h4>
      <div class="m-3 justify-content-between">
        <p className="lead">
          Number of Cabins: {formData.officeCleaningData.cabins}
        </p>
      </div>
      <div class=" m-3 justify-content-between">
        <p className="lead">
          Number of Washrooms: {formData.officeCleaningData.numberOfWashrooms}
        </p>
      </div>
      <div class="m-3 justify-content-between">
        <p className="lead">
          Area (in sq. ft.): {formData.officeCleaningData.area}
        </p>
      </div>
      <div class="input-group m-3 justify-content-between">
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
      <h4 className="mx-3">Renovation Cleaning: </h4>
      <div class=" m-3 justify-content-between">
        <p className="lead">
          Number of Rooms: {formData.renovationCleaningData.numberOfRooms}
        </p>
      </div>
      <div class=" m-3 justify-content-between">
        <p className="lead">
          Number of Bathrooms:{" "}
          {formData.renovationCleaningData.numberOfBathrooms}
        </p>
      </div>
      <div class=" m-3 justify-content-between">
        <p className="lead">
          Area (in sq. ft.): {formData.renovationCleaningData.area}
        </p>
      </div>
      <div class="m-3 justify-content-between">
        <p className="lead">
          Kitchen: {formData.renovationCleaningData.kitchen ? "Yes" : "No"}
        </p>
      </div>
      <div class=" m-3 justify-content-between">
        <p className="lead">
          Living Area:{" "}
          {formData.renovationCleaningData.livingArea ? "Yes" : "No"}
        </p>
      </div>
      <div class=" m-3 justify-content-between">
        <p className="lead">
          Basement: {formData.renovationCleaningData.basement ? "Yes" : "No"}
        </p>
      </div>
      <div class=" m-3 justify-content-between">
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
      <h3 className="mx-3">Sanitization Cleaning: </h3>
      <div class=" m-3 justify-content-between">
        <p className="lead">Request: {formData.sanitizationData.request}</p>
      </div>
      <div className="carpet-text m-3 p-3"></div>
    </div>
  );
}
function PressureWashingOptions({ formData, setFormData }) {
  return (
    <div>
      <h3 className="mx-3">Pressure Washing: </h3>

      <div class="m-3 justify-content-between">
        <p className="lead">
          Area (in sq. ft.): {formData.pressureWashingData.area}
        </p>
      </div>
      <div class="input-group m-3 justify-content-between">
        <span class="input-group-text">Driveway: </span>
        <input
          class="form-check-input"
          type="checkbox"
          id="check-box"
          checked={formData.pressureWashingData.driveway}
          onChange={(e) => {
            let h1 = formData.pressureWashingData;
            h1.driveway = !h1.driveway;
            setFormData({
              ...formData,
              pressureWashingData: h1,
            });
          }}
        ></input>
      </div>
      <div class="input-group m-3 justify-content-between">
        <span class="input-group-text">Patio: </span>
        <input
          class="form-check-input"
          type="checkbox"
          id="check-box"
          checked={formData.pressureWashingData.patio}
          onChange={(e) => {
            let h1 = formData.pressureWashingData;
            h1.patio = !h1.patio;
            setFormData({
              ...formData,
              pressureWashingData: h1,
            });
          }}
        ></input>
      </div>
      <div class="input-group m-3 justify-content-between">
        <span class="input-group-text">Cemented Backyard: </span>
        <input
          class="form-check-input"
          type="checkbox"
          id="check-box"
          checked={formData.pressureWashingData.cementedBackyard}
          onChange={(e) => {
            let h1 = formData.pressureWashingData;
            h1.cementedBackyard = !h1.cementedBackyard;
            setFormData({
              ...formData,
              pressureWashingData: h1,
            });
          }}
        ></input>
      </div>
      <div class="input-group m-3 justify-content-between">
        <span class="input-group-text">Carpet: </span>
        <input
          class="form-check-input"
          type="checkbox"
          id="check-box"
          checked={formData.pressureWashingData.carpet}
          onChange={(e) => {
            let h1 = formData.pressureWashingData;
            h1.carpet = !h1.carpet;
            setFormData({
              ...formData,
              pressureWashingData: h1,
            });
          }}
        ></input>
      </div>
      <div className="carpet-text m-3 p-3">
        Note: Carpet Cleaning is only vaccumm. Steam Cleaning carpet is extra
        and can be requested.
      </div>
    </div>
  );
}
function MoveCleaningOptions({ formData, setFormData }) {
  return (
    <div>
      <h3 className="px-5 mx-5 my-3">Move Cleaning Options</h3>
      <div class="input-group m-3 justify-content-between">
        <span class="input-group-text">Number of Rooms: </span>
        <input
          type="number"
          value={formData.moveCleaningData.numberOfRooms}
          onChange={(e) => {
            let h1 = formData.moveCleaningData;
            h1.numberOfRooms = e.target.value;
            setFormData({
              ...formData,
              moveCleaningData: h1,
            });
          }}
        />
      </div>
      <div class="input-group m-3 justify-content-between">
        <span class="input-group-text">Number of Bathrooms: </span>
        <input
          type="number"
          value={formData.moveCleaningData.numberOfBathrooms}
          onChange={(e) => {
            let h1 = formData.moveCleaningData;
            h1.numberOfBathrooms = e.target.value;
            setFormData({
              ...formData,
              moveCleaningData: h1,
            });
          }}
        />
      </div>
      <div class="input-group m-3 justify-content-between">
        <span class="input-group-text">Area (in sq. ft.): </span>
        <input
          type="number"
          value={formData.moveCleaningData.area}
          onChange={(e) => {
            let h1 = formData.moveCleaningData;
            h1.area = e.target.value;
            setFormData({
              ...formData,
              moveCleaningData: h1,
            });
          }}
        />
      </div>
      <div class="input-group m-3 justify-content-between">
        <span class="input-group-text">Kitchen: </span>
        <input
          class="form-check-input"
          type="checkbox"
          id="check-box"
          checked={formData.moveCleaningData.kitchen}
          onChange={(e) => {
            let h1 = formData.moveCleaningData;
            h1.kitchen = !h1.kitchen;
            setFormData({
              ...formData,
              moveCleaningData: h1,
            });
          }}
        ></input>
      </div>
      <div class="input-group m-3 justify-content-between">
        <span class="input-group-text">Living Area: </span>
        <input
          class="form-check-input"
          type="checkbox"
          id="check-box"
          checked={formData.moveCleaningData.livingArea}
          onChange={(e) => {
            let h1 = formData.moveCleaningData;
            h1.livingArea = !h1.livingArea;
            setFormData({
              ...formData,
              moveCleaningData: h1,
            });
          }}
        ></input>
      </div>
      <div class="input-group m-3 justify-content-between">
        <span class="input-group-text">Basement: </span>
        <input
          class="form-check-input"
          type="checkbox"
          id="check-box"
          checked={formData.moveCleaningData.basement}
          onChange={(e) => {
            let h1 = formData.moveCleaningData;
            h1.basement = !h1.basement;
            setFormData({
              ...formData,
              moveCleaningData: h1,
            });
          }}
        ></input>
      </div>
      <div class="input-group m-3 justify-content-between">
        <span class="input-group-text">Carpet: </span>
        <input
          class="form-check-input"
          type="checkbox"
          id="check-box"
          checked={formData.moveCleaningData.carpet}
          onChange={(e) => {
            let h1 = formData.moveCleaningData;
            h1.carpet = !h1.carpet;
            setFormData({
              ...formData,
              moveCleaningData: h1,
            });
          }}
        ></input>
      </div>
      <div className="carpet-text m-3 p-3">
        Note: Carpet Cleaning is only vaccumm. Steam Cleaning carpet is extra
        and can be requested.
      </div>
    </div>
  );
}
function MaidCleaningOptions({ formData, setFormData }) {
  return (
    <div>
      <h3 className="px-5 mx-5 my-3">Maid Cleaning Options</h3>
      <div class="input-group m-3 justify-content-between">
        <span class="input-group-text">Number of Rooms: </span>
        <input
          type="number"
          value={formData.maidCleaningData.numberOfRooms}
          onChange={(e) => {
            let h1 = formData.maidCleaningData;
            h1.numberOfRooms = e.target.value;
            setFormData({
              ...formData,
              maidCleaningData: h1,
            });
          }}
        />
      </div>
      <div class="input-group m-3 justify-content-between">
        <span class="input-group-text">Number of Bathrooms: </span>
        <input
          type="number"
          value={formData.maidCleaningData.numberOfBathrooms}
          onChange={(e) => {
            let h1 = formData.maidCleaningData;
            h1.numberOfBathrooms = e.target.value;
            setFormData({
              ...formData,
              maidCleaningData: h1,
            });
          }}
        />
      </div>
      <div class="input-group m-3 justify-content-between">
        <span class="input-group-text">Area (in sq. ft.): </span>
        <input
          type="number"
          value={formData.maidCleaningData.area}
          onChange={(e) => {
            let h1 = formData.maidCleaningData;
            h1.area = e.target.value;
            setFormData({
              ...formData,
              maidCleaningData: h1,
            });
          }}
        />
      </div>
    </div>
  );
}
function OtherCleaningOptions({ formData, setFormData }) {
  return (
    <div>
      <h3 className="px-5 mx-5 my-3">Other Cleaning Options</h3>
      <div class="input-group m-3 justify-content-between">
        <span class="input-group-text">Request: </span>
        <textarea
          type="textarea"
          value={formData.otherCleaningData.numberOfRooms}
          onChange={(e) => {
            let h1 = formData.otherCleaningData;
            h1.request = e.target.value;
            setFormData({
              ...formData,
              otherCleaningData: h1,
            });
          }}
        />
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
    </div>
  );
}

export default BookingDetails;
