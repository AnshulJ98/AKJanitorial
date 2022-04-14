import React, { useState, useEffect } from "react";

function UserData({ formData, setFormData }) {
  const [availableDates, setAvailableDates] = useState("");
  useEffect(() => {
    getAvailableDates();
  }, []);
  const getAvailableDates = () => {};

  return (
    <div className="other-info-container px-5 justify-content-center">
      <div class="input-group m-3 justify-content-between">
        <span class="input-group-text">Name: </span>
        <input
          type="text"
          value={formData.userData.name}
          onChange={(e) => {
            let h1 = formData.userData;
            h1.name = e.target.value;
            setFormData({
              ...formData,
              userData: h1,
            });
          }}
        />
      </div>
      <div class="input-group m-3 justify-content-between">
        <span class="input-group-text">Email: </span>
        <input
          type="text"
          value={formData.userData.email}
          onChange={(e) => {
            let h1 = formData.userData;
            h1.email = e.target.value;
            setFormData({
              ...formData,
              userData: h1,
            });
          }}
        />
      </div>
      <div class="input-group m-3 justify-content-between">
        <span class="input-group-text">Phone Number: </span>
        <input
          type="number"
          value={formData.userData.phone}
          onChange={(e) => {
            let h1 = formData.userData;
            h1.phone = e.target.value;
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
