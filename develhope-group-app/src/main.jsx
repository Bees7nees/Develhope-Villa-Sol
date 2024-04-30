import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalProvider } from '../src/Components/GlobalVariable.jsx'



ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <GlobalProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </GlobalProvider>
  </Router>
);
