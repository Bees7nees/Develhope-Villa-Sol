import "../src/Styles/App.css";
import { Test } from "./Components/Test";
import { Routes, Route } from "react-router-dom";
import TermsConditions from "./Pages/TermsConditions";
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer";
import Dining from "./Pages/Dining";
import { Home } from "./Pages/Home";

export default function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Terms&Conditions" element={<TermsConditions />} />
        <Route path="/restauranteSunset" element={<Dining/>}/>
      </Routes>
      <Footer/>
    </>
  );
}


