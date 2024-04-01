import React from "react";
import ReactDOMClient from "react-dom/client";
import { ContactPanelScreen } from "./screens/ContactPanelScreen";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ContactPanelScreen />);
