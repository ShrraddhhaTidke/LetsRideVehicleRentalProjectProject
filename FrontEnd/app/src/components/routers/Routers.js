import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Login";
import AddEmployee from "../pages/AddEmployee";
import AddVehicle from "../pages/AddVehicle";
import BookVehicle from "../pages/BookVehicle";
import CorporatePlans from "../pages/CorporatePlans";
import Home from "../pages/Home";
import ShowVehicles from "../pages/ShowVehicles";
import Subscription from "../pages/Subscription";
import Signup from "../Signup";
import VehicleDetails from "../pages/VehicleDetails";
import VehicleListing from "../pages/VehicleListing";
import VehicleComponent from "../pages/VehicleComponents.js";
import Booking from "../pages/Booking";
import Feedback from "./../pages/Feedback";
import Bill from "../pages/bill";
import Signin from "../Signup1";
import Login1 from "../Login1";



const Routers = () => {

  
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/corporate-plans" element={<CorporatePlans />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/bookvehicle" element={<BookVehicle />} />
        <Route path="/showvehicles" element={<ShowVehicles />} />
        <Route path="/addvehicle" element={<AddVehicle />} />
        <Route path="/addemployee" element={<AddEmployee />} />
        <Route path="/vehicles" element={<VehicleComponent />} />
        <Route path="/vehicleListing/:city/:categoryName" element={<VehicleListing />} />
        <Route path="/vehicles/:productId" element={<VehicleDetails/>} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="/feedback" element={<Feedback/>} />
        <Route path="/bill/:pickupDate/:dropDate" element={<Bill/>} />
        <Route path="/signup1" element={<Signin/>} />
        <Route path="/login1" element={<Login1/>} />
      </Routes>
    );
  };
  
  export default Routers;