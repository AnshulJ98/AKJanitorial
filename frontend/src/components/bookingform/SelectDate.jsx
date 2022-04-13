import React, { useState, useEffect } from "react";
import axios from "axios";

import DayTimePicker from "react-day-time-picker-timeslots";
import { isAfter } from "date-fns";

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
    //console.log(slotTime.getDate());
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
    setFormData({
      ...formData,
      bookingTime: slotTime,
    });
  };

  //console.log(Object.values(availableDates[selectedDate]));
  return (
    <div className="other-info-container mx-5 px-5 w-50 justify-content-center">
      <div>{availableDates[0]}</div>
      <DayTimePicker
        timeSlotSizeMinutes={120}
        timeSlotValidator={timeSlotValidator}
        onConfirm={onConfirm}
      />
    </div>
  );
}

export default SelectDate;
