/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Icons = ({
  type,
  status,
  className,
  overlapGroupClassName,
  ellipseClassName,
  ellipseClassNameOverride,
  divClassName,
}) => {
  return (
    <div className={`icons ${type} ${status} ${className}`}>
      <div className={`overlap-group ${overlapGroupClassName}`}>
        {type === "email" && (
          <img
            className="polygon"
            alt="Polygon"
            src={status === "active" ? "/img/polygon-1-2.svg" : "/img/polygon-1-1.svg"}
          />
        )}

        {type === "profile" && (
          <>
            <div className={`ellipse ${ellipseClassName}`} />
            <div className={`div ${ellipseClassNameOverride}`} />
            <div className={`ellipse-2 ${divClassName}`} />
          </>
        )}
      </div>
    </div>
  );
};

Icons.propTypes = {
  type: PropTypes.oneOf(["profile", "email"]),
  status: PropTypes.oneOf(["inactive", "active"]),
};
