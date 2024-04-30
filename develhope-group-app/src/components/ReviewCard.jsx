import classes from "../Styles/ReviewCard.module.scss";
import { ReviewFiveStars } from "./ReviewFiveStars";
export function ReviewCard() {
  return (
    <div className={classes.ReviewCard}>
      <h2>
        Opinión <br />
        de un cliente
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur. Facilisi nunc pellentesque
        ultricies morbi pellentesque facilisis nunc aliquam. Urna neque diam
        vitae odio purus auctor. Amet vel gravida nec volutpat interdum
        suspendisse vitae mauris.
      </p>
      <p>01/01/2024</p>
      <ReviewFiveStars />
    </div>
  );
}
