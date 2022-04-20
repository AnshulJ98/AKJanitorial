import React, { useState, useEffect } from "react";

function UserData({ formData, setFormData }) {
  const [availableDates, setAvailableDates] = useState("");
  useEffect(() => {
    getAvailableDates();
  }, []);
  const getAvailableDates = () => {};

  return (
    <div className="user-data-container">
      <div className="input-group px-5">
        <label className="lead fw-normal">Name: </label>
        <input
          type="text"
          value={formData.userData.name}
          onChange={(e) => {
            let h1 = formData.userData;
            h1.name = e.target.value == "" ? null : e.target.value;
            setFormData({
              ...formData,
              userData: h1,
            });
          }}
        />
      </div>
      <div className="input-group px-5">
        <label className="lead fw-normal">Email: </label>
        <input
          type="text"
          value={formData.userData.email}
          onChange={(e) => {
            let h1 = formData.userData;
            h1.email = e.target.value == "" ? null : e.target.value;
            setFormData({
              ...formData,
              userData: h1,
            });
          }}
        />
      </div>
      <div className="input-group px-5">
        <label className="lead fw-normal">Phone Number: </label>
        <input
          type="number"
          value={formData.userData.phone}
          onChange={(e) => {
            let h1 = formData.userData;
            h1.phone = e.target.value == "" ? null : e.target.value;
            setFormData({
              ...formData,
              userData: h1,
            });
          }}
        />
      </div>
      <div className="input-group px-5">
        <label className="lead fw-normal">Address: </label>
        <input
          type="text"
          value={formData.userData.address}
          onChange={(e) => {
            let h1 = formData.userData;
            h1.address = e.target.value == "" ? null : e.target.value;
            setFormData({
              ...formData,
              userData: h1,
            });
          }}
        />
      </div>
    </div>
  );
}

export default UserData;
