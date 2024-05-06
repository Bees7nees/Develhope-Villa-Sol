import "../src/Styles/App.css";
import { Routes, Route } from "react-router-dom";
import TermsConditions from "./Pages/TermsConditions";
import Navbar from "./Components/Navbar";
import AboutUs from "./Pages/AboutUs";
import Footer from "./Components/Footer";
import Dining from "./Pages/Dining";
import { Home } from "./Pages/Home";
import { ContactPrompt } from "./Components/ContactPrompt";
import ScrollUp from "./Components/botones/ScrollUp";
import NotFound from "./Components/NotFound";
import SpaPage from "./Pages/Spa";
import Banner from "./Components/Banner";
import BookingMenu from "./Components/BookingMenu";
//import { GlobalProvider } from './GlobalContext';
import Rooms from "./Pages/Rooms";
import NavbarMobile from "./Components/NavbarMobile";
import { useEffect, useState } from "react";

export default function App() {


  return (
    <>
      <NavbarMobile/> 
      <Navbar />
      <Banner />
      <ScrollUp />
      {/* <BookingMenu /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Habitaciones" element={<Rooms />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/Terms&Conditions" element={<TermsConditions />} />
        <Route path="/restauranteSunset" element={<Dining />} />
        <Route path="/test" element={<ContactPrompt />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/spa" element={<SpaPage />} />
      </Routes>
      <Footer />
    </>
  );
}
