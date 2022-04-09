import React, { useState, useEffect } from "react";
import axios from "axios";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { enableRipple } from "@syncfusion/ej2-base";
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";
enableRipple(true);

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

  const [selectedDate, setSelectedDate] = useState("");
  console.log(selectedDate);

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
  //console.log(Object.values(availableDates[selectedDate]));
  return (
    <div className="other-info-container mx-5 px-5 w-50 justify-content-center">
      <div>{availableDates[0]}</div>
      <TimePickerComponent
        id="timepicker"
        placeholder="Select a Time"
        step={60}
      />
      <DatePickerComponent
        placeholder="Select a Date"
        onChange={(e) => {
          setFormData({ ...formData, date: dateToYMD(e.target.value) });
          setSelectedDate(dateToYMD(e.target.value));
        }}
        value={selectedDate}
        min={Object.keys(availableDates)[0]}
        max={
          Object.keys(availableDates)[Object.keys(availableDates).length - 1]
        }
      ></DatePickerComponent>
      {selectedDate &&
        Object.values(availableDates[selectedDate]).map((review, index) => (
          <span key={index}>
            {review && (
              <p class="lead">{Object.keys(availableDates[selectedDate])}2</p>
            )}
            {index}
            {review && (
              <p class="lead">
                {
                  Object.values(availableDates[selectedDate])[index][
                    "available"
                  ]
                }
                x
              </p>
            )}
          </span>
        ))}
    </div>
  );
}

export default SelectDate;
