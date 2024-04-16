import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Test></Test>
      <Routes>
        <Route path="/" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
