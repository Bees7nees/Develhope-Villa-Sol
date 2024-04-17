import "../src/Styles/App.css";
import { Test } from "./Components/Test";
import { Routes, Route } from "react-router-dom";
import TermsConditions from "./Pages/TermsConditions";
import { ContactPrompt } from "./Components/ContactPrompt";
import Navbar from "./Components/Navbar"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/test" element={<Test />} />
        <Route path="/Terms&Conditions" element={<TermsConditions />} />
      </Routes>
      <ContactPrompt />
      <Navbar/>
    </>
  );
}


