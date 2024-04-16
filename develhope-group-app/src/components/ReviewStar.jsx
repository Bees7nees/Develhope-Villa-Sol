import PropTypes from "prop-types";
import classes from "../styles/ReviewStar.module.scss";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

export function ReviewStar({ style }) {
  return style === "filled" ? (
    <FaStar className={classes.starfilled} />
  ) : (
    <CiStar className={classes.starunfilled} />
  );
}

ReviewStar.propTypes = {
  style: PropTypes.oneOf(["filled", "unfilled"]),
};
