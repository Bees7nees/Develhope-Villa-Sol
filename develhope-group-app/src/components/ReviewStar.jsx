import PropTypes from "prop-types";
import classes from "../styles/ReviewStar.module.scss";
import { CiStar } from "react-icons/ci";

export function ReviewStar() {
    return <CiStar className={classes["star"]} />;
    
}

ReviewStar.propTypes = {
  style: PropTypes.oneOf(["filled", "unfilled"]),
};
