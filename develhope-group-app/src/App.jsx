import "../src/Styles/App.css";
import { Routes, Route } from "react-router-dom";
import TermsConditions from "./Pages/TermsConditions";
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer";
import Dining from "./Pages/Dining";
import { Home } from "./Pages/Home";
import { ContactPrompt } from "./Components/ContactPrompt";
import ScrollUp from "./Components/botones/ScrollUp";

export default function App() {
  return (
    <>
      <Navbar/>
      <ScrollUp/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Terms&Conditions" element={<TermsConditions />} />
        <Route path="/restauranteSunset" element={<Dining/>}/>
        <Route path="/test" element={<ContactPrompt />} />
      </Routes>
      <Footer/>
    </>
  );
}


