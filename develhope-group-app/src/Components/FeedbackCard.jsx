import { RatingScale } from "./RatingScale";
import * as classes from "./FeedbackCard.module.css";

export const FeedbackCard = ({ className }) => {
  return (
    <div className={`${classes["componente-tarjeta"]} ${className}`}>
      <div className={classes["t-tulo"]}>
        <div className={classes["text-wrapper"]}>Nombre</div>
      </div>
      <div className={classes["div-wrapper"]}>
        <p className={classes["div"]}>
          Lorem ipsum dolor sit amet consectetur. Vitae viverra suscipit arcu
          ipsum senectus dis egestas convallis. Ut morbi lorem nulla at fames
          amet. In a adipiscing vitae rhoncus. Tincidunt donec tristique a amet
          consectetur.
        </p>
      </div>
      <div className={classes["div-wrapper"]}>
        <div className={classes["fecha"]}>01/02/2024</div>
      </div>
      <RatingScale
        className={classes["rating-scale-instance"]}
        rating="four-star"
        starImg="star-1-6.svg"
        starStar="star-1-5.svg"
        starStar1="star-1-7.svg"
        starStar2="star-1-8.svg"
        starStar3="star-2-3.svg"
      />
    </div>
  );
};
