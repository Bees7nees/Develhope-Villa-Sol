import PropTypes from "prop-types";
import * as classes from "./Star.module.css";

export const Star = ({ style, star = "star-1.svg" }) => {
  return (
    <div className={classes.star}>
      <img
        className={classes.img}
        alt="Star"
        src={style === "unfilled" ? "star-2.svg" : star}
      />
    </div>
  );
};

Star.propTypes = {
  style: PropTypes.oneOf(["unfilled", "filled"]),
  star: PropTypes.string,
};
