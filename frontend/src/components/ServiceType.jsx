import React from "react";

function ServiceType({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <select
        className="form-select"
        id="inputGroupSelect01"
        placeholder={"props.placeholder"}
        onChange={(event) =>
          setFormData({ ...formData, serviceType: event.target.value })
        }
      >
        <option value="1">House Cleaning</option>
        <option value="2">Office Cleaning</option>
        <option value="3">Renovation Cleaning</option>
        <option value="4">Sanitization</option>
        <option value="5">Pressure Washing</option>
        <option value="6">Move In / Move Out Cleaning</option>
        <option value="7">Maid Cleaning</option>
      </select>
    </div>
  );
}

export default ServiceType;
