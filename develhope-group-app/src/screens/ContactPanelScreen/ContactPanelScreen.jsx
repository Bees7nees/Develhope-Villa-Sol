import React from "react";
import { ContactPanel } from "../../components/ContactPanel";
import "./style.css";

export const ContactPanelScreen = () => {
  return (
    <div className="contact-panel-screen">
      <ContactPanel className="contact-panel-component" />
    </div>
  );
};
