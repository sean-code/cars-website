import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Payment from "../components/UI/CardPayment";
import Mpesa from "../components/UI/Mpesa";

const Routers = () => {
  return (
    <Routes>
      <Route path="/cars-website" element={<Navigate to="/home" />} />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/our-cars" element={<CarListing />} />
      <Route path="/our-cars/:slug" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/our-cars/:slug/payment/card" element={<Payment/>} />
      <Route path="/our-cars/:slug/payment/mpesa" element={<Mpesa/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
