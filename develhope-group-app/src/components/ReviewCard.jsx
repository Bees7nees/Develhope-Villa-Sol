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
      En resumen, mi experiencia en el Hotel Estrella fue nada menos que perfecta. 
      Recomiendo encarecidamente este hotel a cualquiera que esté buscando una estancia memorable en la ciudad.
      </p>
      <p>01/01/2024</p>
      <ReviewFiveStars />
    </div>
  );
}
