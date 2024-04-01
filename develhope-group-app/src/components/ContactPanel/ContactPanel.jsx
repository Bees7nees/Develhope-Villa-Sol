/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { EnterUsername } from "../EnterUsername";
import "./style.css";

export const ContactPanel = ({ className }) => {
  return (
    <div className={`contact-panel ${className}`}>
      <div className="navigation-top">
        <img className="arrow-back-ios-new" alt="Arrow back ios new" src="/img/arrow-back-ios-new.png" />
        <div className="contact-title">
          <div className="text-wrapper">Contact</div>
        </div>
      </div>
      <div className="section">
        <div className="input-section">
          <div className="name-input">
            <div className="text-wrapper-2">Name</div>
            <EnterUsername
              className="enter-username-placeholder"
              contentClassName="enter-username-instance"
              enterUsernameClassName="enter-username-5"
              iconsDivClassName="enter-username-4"
              iconsEllipseClassName="enter-username-2"
              iconsEllipseClassNameOverride="enter-username-3"
              iconsOverlapGroupClassName="design-component-instance-node"
              iconsTypeEmailStatusClassName="enter-username-placeholder-instance"
              status="active"
            />
          </div>
          <div className="email-input">
            <div className="text-wrapper-3">Email Address</div>
            <div className="enter-address">
              <div className="content-2">
                <div className="overlap-group-wrapper">
                  <div className="polygon-wrapper">
                    <img className="img" alt="Polygon" src="/img/polygon-1.svg" />
                  </div>
                </div>
                <div className="enter-email-address">Enter your email</div>
              </div>
            </div>
          </div>
        </div>
        <div className="other-comments">
          <div className="comments">
            <div className="more-tool">
              <div className="overlap-group-2">
                <img className="line" alt="Line" src="/img/line-1.svg" />
                <img className="line-2" alt="Line" src="/img/line-3.svg" />
                <img className="line-3" alt="Line" src="/img/line-2.svg" />
              </div>
            </div>
            <div className="add-your-comments">Add your comments...</div>
          </div>
        </div>
      </div>
      <div className="button">
        <button className="cancle-button">
          <div className="text-wrapper-4">Cancel</div>
        </button>
        <div className="submit-button">
          <div className="text-wrapper-5">SUBMIT</div>
        </div>
      </div>
    </div>
  );
};
