import React from "react";

function HouseCleaningOptions({ formData, setFormData }) {
  console.log(formData);

  return (
    <div>
      <h3 className="px-5 mx-5 my-3">House Cleaning Options</h3>
      <div class="input-group m-3 justify-content-between">
        <span class="input-group-text">Number of Rooms: </span>
        <input
          type="number"
          value={formData.houseCleaningData.numberOfRooms}
          onChange={(e) => {
            let h1 = formData.houseCleaningData;
            h1.numberOfRooms = e.target.value;
            setFormData({
              ...formData,
              houseCleaningData: h1,
            });
          }}
        />
      </div>
      <div class="input-group m-3 justify-content-between">
        <span class="input-group-text">Number of Bathrooms: </span>
        <input
          type="number"
          value={formData.houseCleaningData.numberOfBathrooms}
          onChange={(e) => {
            let h1 = formData.houseCleaningData;
            h1.numberOfBathrooms = e.target.value;
            setFormData({
              ...formData,
              houseCleaningData: h1,
            });
          }}
        />
      </div>
      <div class="input-group m-3 justify-content-between">
        <span class="input-group-text">Area (in sq. ft.): </span>
        <input
          type="number"
          value={formData.houseCleaningData.area}
          onChange={(e) => {
            let h1 = formData.houseCleaningData;
            h1.area = e.target.value;
            setFormData({
              ...formData,
              houseCleaningData: h1,
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
          checked={formData.houseCleaningData.kitchen}
          onChange={(e) => {
            let h1 = formData.houseCleaningData;
            h1.kitchen = !h1.kitchen;
            setFormData({
              ...formData,
              houseCleaningData: h1,
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
          checked={formData.houseCleaningData.livingArea}
          onChange={(e) => {
            let h1 = formData.houseCleaningData;
            h1.livingArea = !h1.livingArea;
            setFormData({
              ...formData,
              houseCleaningData: h1,
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
          checked={formData.houseCleaningData.basement}
          onChange={(e) => {
            let h1 = formData.houseCleaningData;
            h1.basement = !h1.basement;
            setFormData({
              ...formData,
              houseCleaningData: h1,
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
          checked={formData.houseCleaningData.carpet}
          onChange={(e) => {
            let h1 = formData.houseCleaningData;
            h1.carpet = !h1.carpet;
            setFormData({
              ...formData,
              houseCleaningData: h1,
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

function OfficeCleaningOptions({ formData, setFormData }) {
  return (
    <div>
      <h3 className="px-5 mx-5 my-3">Office Cleaning Options</h3>
      <div class="input-group m-3 justify-content-between">
        <span class="input-group-text">Number of Cabins: </span>
        <input
          type="number"
          value={formData.officeCleaningData.cabins}
          onChange={(e) => {
            let h1 = formData.officeCleaningData;
            h1.cabins = e.target.value;
            setFormData({
              ...formData,
              officeCleaningData: h1,
            });
          }}
        />
      </div>
      <div class="input-group m-3 justify-content-between">
        <span class="input-group-text">Number of Washrooms: </span>
        <input
          type="number"
          value={formData.officeCleaningData.numberOfWashrooms}
          onChange={(e) => {
            let h1 = formData.officeCleaningData;
            h1.numberOfWashrooms = e.target.value;
            setFormData({
              ...formData,
              officeCleaningData: h1,
            });
          }}
        />
      </div>
      <div class="input-group m-3 justify-content-between">
        <span class="input-group-text">Area (in sq. ft.): </span>
        <input
          type="number"
          value={formData.officeCleaningData.area}
          onChange={(e) => {
            let h1 = formData.officeCleaningData;
            h1.area = e.target.value;
            setFormData({
              ...formData,
              officeCleaningData: h1,
            });
          }}
        />
      </div>
      <div class="input-group m-3 justify-content-between">
        <span class="input-group-text">Carpet: </span>
        <input
          class="form-check-input"
          type="checkbox"
          id="check-box"
          checked={formData.officeCleaningData.carpet}
          onChange={(e) => {
            let h1 = formData.officeCleaningData;
            h1.carpet = !h1.carpet;
            setFormData({
              ...formData,
              officeCleaningData: h1,
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
function RenovationCleaningOptions({ formData, setFormData }) {
  return (
    <div>
      <h3 className="px-5 mx-5 my-3">Renovation Cleaning Options</h3>
      <div class="input-group m-3 justify-content-between">
        <span class="input-group-text">Number of Rooms: </span>
        <input
          type="number"
          value={formData.renovationCleaningData.numberOfRooms}
          onChange={(e) => {
            let h1 = formData.renovationCleaningData;
            h1.numberOfRooms = e.target.value;
            setFormData({
              ...formData,
              renovationCleaningData: h1,
            });
          }}
        />
      </div>
      <div class="input-group m-3 justify-content-between">
        <span class="input-group-text">Number of Bathrooms: </span>
        <input
          type="number"
          value={formData.renovationCleaningData.numberOfBathrooms}
          onChange={(e) => {
            let h1 = formData.renovationCleaningData;
            h1.numberOfBathrooms = e.target.value;
            setFormData({
              ...formData,
              renovationCleaningData: h1,
            });
          }}
        />
      </div>
      <div class="input-group m-3 justify-content-between">
        <span class="input-group-text">Area (in sq. ft.): </span>
        <input
          type="number"
          value={formData.renovationCleaningData.area}
          onChange={(e) => {
            let h1 = formData.renovationCleaningData;
            h1.area = e.target.value;
            setFormData({
              ...formData,
              renovationCleaningData: h1,
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
          checked={formData.renovationCleaningData.kitchen}
          onChange={(e) => {
            let h1 = formData.renovationCleaningData;
            h1.kitchen = !h1.kitchen;
            setFormData({
              ...formData,
              renovationCleaningData: h1,
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
          checked={formData.renovationCleaningData.livingArea}
          onChange={(e) => {
            let h1 = formData.renovationCleaningData;
            h1.livingArea = !h1.livingArea;
            setFormData({
              ...formData,
              renovationCleaningData: h1,
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
          checked={formData.renovationCleaningData.basement}
          onChange={(e) => {
            let h1 = formData.renovationCleaningData;
            h1.basement = !h1.basement;
            setFormData({
              ...formData,
              renovationCleaningData: h1,
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
          checked={formData.renovationCleaningData.carpet}
          onChange={(e) => {
            let h1 = formData.renovationCleaningData;
            h1.carpet = !h1.carpet;
            setFormData({
              ...formData,
              renovationCleaningData: h1,
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
function SanitizationOptions({ formData, setFormData }) {
  return (
    <div>
      <h3 className="px-5 mx-5 my-3">Sanitization Cleaning Options</h3>
      <div class="input-group m-3 justify-content-between">
        <span class="input-group-text">Request: </span>
        <textarea
          type="text"
          value={formData.sanitizationData.request}
          onChange={(e) => {
            let h1 = formData.sanitizationData;
            h1.request = e.target.value;
            setFormData({
              ...formData,
              sanitizationData: h1,
            });
          }}
        />
      </div>
    </div>
  );
}
function PressureWashingOptions({ formData, setFormData }) {
  return (
    <div>
      <h3 className="px-5 mx-5 my-3">Pressure Washing Options</h3>

      <div class="input-group m-3 justify-content-between">
        <span class="input-group-text">Area (in sq. ft.): </span>
        <input
          type="number"
          value={formData.pressureWashingData.area}
          onChange={(e) => {
            let h1 = formData.pressureWashingData;
            h1.area = e.target.value;
            setFormData({
              ...formData,
              pressureWashingData: h1,
            });
          }}
        />
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

function ServiceOptions({ formData, setFormData }) {
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
  console.log(formData);
  return (
    <div className="personal-info-container">
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

export default ServiceOptions;
