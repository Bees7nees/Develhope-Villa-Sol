import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalProvider } from '../src/Components/GlobalVariable.jsx'
import Language from "./Components/Language.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <GlobalProvider>
    <React.StrictMode>
    <Language>
      <App />
      </Language>
    </React.StrictMode>
    </GlobalProvider>
  </Router>
)