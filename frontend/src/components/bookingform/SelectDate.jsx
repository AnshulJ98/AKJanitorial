import React, { useState } from "react";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { enableRipple } from "@syncfusion/ej2-base";
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";
enableRipple(true);

function SelectDate({ formData, setFormData }) {
  return (
    <div className="other-info-container mx-5 px-5 w-50 justify-content-center">
      <TimePickerComponent id="timepicker" placeholder="Select a Time" />
      <DateTimePickerComponent
        onChange={(e) => {
          setFormData({ ...formData, other: e.target.value });
        }}
        value={formData.other}
      ></DateTimePickerComponent>
    </div>
  );
}

export default SelectDate;
