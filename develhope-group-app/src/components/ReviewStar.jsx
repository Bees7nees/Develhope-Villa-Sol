import PropTypes from "prop-types"
import classes from "../styles/ReviewStar.module.scss"

export function ReviewStar ({ style }) {
    return (
        <div className={classes["star"]}>
            <img className={classes["img"]} src={style === "unfilled" ? "ReviewStar-Unfilled.svg" : "ReviewStar-Filled.svg"} />
        </div>
    );
}

ReviewStar.propTypes = {
    style: PropTypes.oneOf(["filled", "unfilled"]),
}