import classes from "../Styles/ReviewCard.module.scss";
import { ReviewFiveStars } from "./ReviewFiveStars";
import {Context} from "/src/Components/Language"
import { FormattedMessage } from 'react-intl';
import { useContext } from "react";



export function ReviewCard() {

  const context = useContext(Context);


  return (
    <div className={classes.ReviewCard}>
      <h2>
      <FormattedMessage id="opinion"/> <br />
      <FormattedMessage id="cliente"/>
      </h2>
      <p>
      <FormattedMessage id="opinion_text"/>
      </p>
      <p>01/01/2024</p>
      <ReviewFiveStars />
    </div>
  );
}
