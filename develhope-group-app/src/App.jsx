import "../src/Styles/App.css";
import { Test } from "./Components/Test";
import { Routes, Route } from "react-router-dom";
import TermsConditions from "./Pages/TermsConditions";
import { ContactPrompt } from "./Components/ContactPrompt";
import Navbar from "./Components/Navbar"
import { ContactFooterVariant } from "./Components/ContactFooterVariant";
import Footer from "./Components/Footer";
import Dining from "./Pages/Dining";
import MenuMobile from "./Components/MenuMobile";

export default function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/test" element={<Test />} />
        <Route path="/Terms&Conditions" element={<TermsConditions />} />
        <Route path="/restauranteSunset" element={<Dining/>}/>
      </Routes>
      <Footer/>
    </>
  );
}


