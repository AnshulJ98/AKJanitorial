import React from "react";
import Select from "react-select";

function ServiceType({ formData, setFormData }) {
  const options = [
    { value: "1", label: "House Cleaning" },
    { value: "2", label: "Office Cleaning" },
    { value: "3", label: "Renovation Cleaning" },
    { value: "4", label: "Sanitization" },
    { value: "5", label: "Pressure Washing" },
    { value: "6", label: "Move In / Move Out Cleaning" },
    { value: "7", label: "Maid Cleaning" },
    { value: "8", label: "Other( Garage, Gym, School)" },
  ];

  const handleServiceChange = (e, formData) => {
    let x = [];
    for (var i in e) {
      x.push(e[i].value);
    }
    setFormData({
      ...formData,
      services: x,
    });
  };

  return (
    <div className="service-type-container">
      <div className="form-field p-5">
        <Select
          defaultValue={[options[0]]}
          isMulti
          name="colors"
          options={options}
          className="basic-multi-select lead fw-normal"
          classNamePrefix="select"
          isClearable={false}
          onChange={(event) => {
            console.log(event);

            handleServiceChange(event, formData);
            console.log(formData);
          }}
        />
      </div>
    </div>
  );
}

export default ServiceType;
