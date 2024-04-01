import PropTypes from "prop-types";
import { Star } from "./Star";
import * as classes from "./RatingScale.module.css";

export const RatingScale = ({
  rating,
  starStar = "star-1-2.svg",
  starImg = "star-1-3.svg",
  starStar1 = "star-1-4.svg",
  starStar2 = "star-1-5.svg",
  starStar3 = "star-2-7.svg",
}) => {
  return (
    <div className={classes["rating-scale"]}>
      <Star star={starStar} style="filled" />
      <Star
        img={rating === "one-star" ? "image.svg" : undefined}
        star={starImg}
        style={rating === "one-star" ? "unfilled" : "filled"}
      />
      <Star
        img={
          rating === "one-star"
            ? "star-2-2.svg"
            : rating === "two-star"
            ? "star-2-4.svg"
            : undefined
        }
        star={starStar1}
        style={
          ["one-star", "two-star"].includes(rating) ? "unfilled" : "filled"
        }
      />
      <Star
        img={
          rating === "one-star"
            ? "star-2-3.svg"
            : rating === "two-star"
            ? "star-2-5.svg"
            : rating === "three-star"
            ? "star-2-6.svg"
            : undefined
        }
        star={starStar2}
        style={
          ["five-star", "four-star"].includes(rating) ? "filled" : "unfilled"
        }
      />
      <Star
        img={starStar3}
        star={rating === "five-star" ? "star-1-6.svg" : undefined}
        style={rating === "five-star" ? "filled" : "unfilled"}
      />
    </div>
  );
};

RatingScale.propTypes = {
  rating: PropTypes.oneOf([
    "five-star",
    "two-star",
    "three-star",
    "one-star",
    "four-star",
  ]),
  starStar: PropTypes.string,
  starImg: PropTypes.string,
  starStar1: PropTypes.string,
  starStar2: PropTypes.string,
  starStar3: PropTypes.string,
};
