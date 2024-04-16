import classes from "../Styles/ReviewCard.module.scss";
import { ReviewFiveStars } from "./ReviewFiveStars";
export function ReviewCard() {
  return (
    <div className={classes.ReviewCard}>
      <h2>What our customers are saying</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>01/01/2024</p>
      <ReviewFiveStars />
    </div>
  );
}
