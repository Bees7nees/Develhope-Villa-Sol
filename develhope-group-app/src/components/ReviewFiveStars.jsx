import { ReviewStar } from "./ReviewStar";
import classes from "../Styles/ReviewStar.module.scss";

export function ReviewFiveStars() {
    return (
        <div className={classes.stars}>
            <ReviewStar style="filled" />
            <ReviewStar style="filled" />
            <ReviewStar style="filled" />
            <ReviewStar style="filled" />
            <ReviewStar style="unfilled" />
        </div>
    )
}