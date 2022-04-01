import React from "react";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";

function OtherInfo({ formData, setFormData }) {
  return (
    <div className="other-info-container">
      <DateTimePickerComponent
        onChange={(e) => {
          setFormData({ ...formData, other: e.target.value });
        }}
        value={formData.other}
      ></DateTimePickerComponent>
    </div>
  );
}

export default OtherInfo;
