import classes from "/src/Styles/banner.module.css";
import PropTypes from "prop-types";

Banner.PropTypes = {
  className: PropTypes.string,
  fotomain: PropTypes.string,
};

export default function Banner({ fotomain }) {
  return (
    <>
      <img className={classes.fotomain} src={fotomain}/>
    </>
  );
}
