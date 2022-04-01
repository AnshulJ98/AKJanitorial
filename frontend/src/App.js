import React, { useState } from 'react';
import ReactDOM from "react-dom";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  AboutUs,
  Services,
  ServicesHome,
  HouseCleaning,
  OfficeCleaning,
  Sanitization,
  PressureWashing,
  RenovationCleaning,
  MoveInMoveOutCleaning,
  Pricing,
  Testimonials,
  ContactUs,
  Form,
} from "./components";

const App = () => {
    return ( <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />}>
            <Route path="serviceshome" element={<ServicesHome />} />
            <Route path="housecleaning" element={<HouseCleaning />} />
            <Route path="officecleaning" element={<OfficeCleaning />} />
            <Route path="sanitization/" element={<Sanitization />} />
            <Route path="pressurewashing" element={<PressureWashing />} />
            <Route path="renovationcleaning" element={<RenovationCleaning />} />
            <Route path="moveinmoveoutcleaning" element={<MoveInMoveOutCleaning />} />
          </Route>
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/form" element={<Form />} />
        </Routes>
        <Footer />
      </Router> );
}
 
export default App;