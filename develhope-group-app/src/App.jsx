import { Routes, Route } from "react-router-dom";
import "../src/Styles/App.css";
import { Test } from "./Components/Test";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Test />} />
      <Route
        path="/test"
        element={
          <>
            <Test />
            <Test />
          </>
        }
      />
    </Routes>
  );
}

export default App;
