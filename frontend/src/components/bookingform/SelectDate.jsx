import React, { useState, useEffect } from "react";
import axios from "axios";
import DayTimePicker from "react-day-time-picker-timeslots";

function SelectDate({ formData, setFormData }) {
  const [availableDates, setAvailableDates] = useState("");
  useEffect(() => {
    getAvailableDates();
  }, []);
  const getAvailableDates = () => {
    axios
      .post("http://localhost:8000/get-events/")
      .then((res) => {
        console.log(res.data);
        const fd = res.data;
        setAvailableDates(fd);
      })
      .catch((errors) => console.log(errors));
  };

  const dateToYMD = (date) => {
    var strArray = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var d = date.getDate();
    var m = strArray[date.getMonth()];
    var y = date.getFullYear();
    return "" + (d <= 9 ? "0" + d : d) + "-" + m + "-" + y;
  };

  const timeSlotValidator = (slotTime) => {
    let date = availableDates[dateToYMD(slotTime)];
    let endDate = new Date(Object.keys(availableDates).pop());

    if (
      Date.parse(endDate.toDateString()) < Date.parse(slotTime.toDateString())
    ) {
      return false;
    }

    let startHours = String(slotTime.getHours()).padStart(2, "0");

    let endHours =
      String(slotTime.getHours() + 2).padStart(2, "0") == 24
        ? "00"
        : String(slotTime.getHours() + 2).padStart(2, "0");

    let s = startHours + ":00-" + endHours + ":00";
    return availableDates[dateToYMD(slotTime)][s];
  };

  const onConfirm = (slotTime) => {
    let pacificString = new Date(
      slotTime.getFullYear(),
      slotTime.getMonth(),
      slotTime.getDate(),
      slotTime.getHours(),
      slotTime.getMinutes(),
      0
    ).toLocaleString("en-US", {
      hour12: false,
      timeZone: "America/Vancouver",
    });

    let x = new Date(pacificString);
    let diff = slotTime.getHours() - x.getHours();
    x.setHours(slotTime.getHours() + diff);
    let y = new Date(x).toLocaleString("en-US", {
      hour12: false,
      timeZone: "America/Vancouver",
    });

    setFormData({
      ...formData,
      bookingTime: y,
    });
  };

  return (
    <div className="select-date-container">
      <div className="input-group  px-5">
        <DayTimePicker
          timeSlotSizeMinutes={120}
          timeSlotValidator={timeSlotValidator}
          onConfirm={onConfirm}
        />

        <label className="gap"> </label>
      </div>
    </div>
  );
}

export default SelectDate;
