import React from "react";
import { Outlet } from "react-router-dom";

function Services() {
  return (
    <div className="services-home">
      <Outlet />
    </div>
  );
}

export default Services;
