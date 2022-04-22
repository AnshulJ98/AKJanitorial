import React, { useState, useEffect } from "react";

function SelectDate({ formData, setFormData }) {
  return (
    <div className="service-frequency-container p-5">
      <div class="alert alert-primary" role="alert">
        Duration for reccuring bookings is 6 months.
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input mx-2"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          value={0}
          checked={formData.serviceFrequency == 0}
          onChange={(e) => {
            setFormData({
              ...formData,
              serviceFrequency: e.target.value,
            });
          }}
        ></input>
        <label
          className="form-check-label lead fw-normal w-75"
          htmlFor="flexRadioDefault1"
        >
          One-Time
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input mx-2"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          value={1}
          checked={formData.serviceFrequency == 1}
          onChange={(e) => {
            setFormData({
              ...formData,
              serviceFrequency: e.target.value,
            });
          }}
        ></input>
        <label
          className="form-check-label lead fw-normal w-75"
          htmlFor="flexRadioDefault2"
        >
          Weekly
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input mx-2"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault3"
          value={2}
          checked={formData.serviceFrequency == 2}
          onChange={(e) => {
            setFormData({
              ...formData,
              serviceFrequency: e.target.value,
            });
          }}
        ></input>
        <label
          className="form-check-label lead fw-normal w-75"
          htmlFor="flexRadioDefault3"
        >
          Bi-Weekly (Every 2 weeks)
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input mx-2"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault4"
          value={3}
          checked={formData.serviceFrequency == 3}
          onChange={(e) => {
            setFormData({
              ...formData,
              serviceFrequency: e.target.value,
            });
          }}
        ></input>
        <label
          className="form-check-label lead fw-normal w-75"
          htmlFor="flexRadioDefault4"
        >
          Monthly (Every 4 weeks)
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input mx-2"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault5"
          value={4}
          checked={formData.serviceFrequency == 4}
          onChange={(e) => {
            setFormData({
              ...formData,
              serviceFrequency: e.target.value,
            });
          }}
        ></input>
        <label
          className="form-check-label lead fw-normal w-75"
          htmlFor="flexRadioDefault5"
        >
          3 months. (Every 12 weeks)
        </label>
      </div>
    </div>
  );
}

export default SelectDate;
