import { Routes, Route } from "react-router-dom";
import { Test } from "./Components/Test.jsx";

function App() {
  return (
    <>
      <Test />
      <Routes>
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
