/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icons } from "../Icons";
import "./style.css";

export const EnterUsername = ({
  status,
  className,
  contentClassName,
  iconsTypeEmailStatusClassName,
  iconsOverlapGroupClassName,
  iconsEllipseClassName,
  iconsEllipseClassNameOverride,
  iconsDivClassName,
  enterUsernameClassName,
}) => {
  return (
    <div className={`enter-username status-3-${status} ${className}`}>
      <div className={`content ${contentClassName}`}>
        <Icons
          className={iconsTypeEmailStatusClassName}
          divClassName={iconsEllipseClassName}
          ellipseClassName={iconsEllipseClassNameOverride}
          ellipseClassNameOverride={iconsDivClassName}
          overlapGroupClassName={iconsOverlapGroupClassName}
          status={status === "inactive" ? "inactive" : "active"}
          type="profile"
        />
        <div className={`div-2 ${enterUsernameClassName}`}>
          {status === "active" && <>|</>}

          {status === "inactive" && <>Enter your name</>}
        </div>
      </div>
    </div>
  );
};

EnterUsername.propTypes = {
  status: PropTypes.oneOf(["inactive", "active"]),
};
