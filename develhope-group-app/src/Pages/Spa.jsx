import fotomasaje1 from "../Assets/Img/fotomasaje1.png";
import fotomasaje2 from "../Assets/Img/fotomasaje2.png";
import fotosauna from "../Assets/Img/fotosauna.png";
import Button from "../Components/Buttons";
import DividingLines from "../Components/DividingLines";
import TitleDescription from "../Components/TitleDescription";
import classes from "../Styles/Spa.module.scss";
import { FormattedMessage } from 'react-intl';

export default function SpaPage() {


  return (
    <>
      <TitleDescription
        title={<FormattedMessage id="spa_titulo"/>}
        description={<FormattedMessage id="wellness_description"/>}
      />
      <div className={classes["divisor"]}>
        <DividingLines color={"var(--blue900)"} length={"1rem"} />
        <DividingLines color={"var(--golden500)"} length={"1rem"} />
      </div>
      <h3 className="h3-spa-title">
        {<FormattedMessage id="title"/>}
      </h3>
      <div className="spa-container">
        <img src={fotomasaje1} />
        <p>
          <FormattedMessage id="masaje"/>
        </p>
      </div>

      <div className="spa-container">
        <img src={fotomasaje2} />
        <p>
          <FormattedMessage id="masajes"/>
        </p>
      </div>
      <div className={classes["divisor"]}>
        <DividingLines color={"var(--blue900)"} length={"1rem"} />
        <DividingLines color={"var(--golden500)"} length={"1rem"} />
      </div>
      <div className="tratamientos">
        <h3>
          <FormattedMessage id="tratamientos"/>
        </h3>
        <div className="tratamientos-container">
          <span>
            <h5>
              <FormattedMessage id="masaje_title"/>
            </h5>{" "}
            <p>
              <FormattedMessage id="masaje_des"/>
            </p>
          </span>
          <span>
            <h5>
              <FormattedMessage id="faciales"/>
            </h5>{" "}
            <p>
              <FormattedMessage id="faciales_des"/>
            </p>
          </span>
          <span>
            <h5>
              <FormattedMessage id="manicure"/>
            </h5>{" "}
            <p>
              <FormattedMessage id="manicure_des"/>
            </p>
          </span>
          <span>
            <h5>
              <FormattedMessage id="experiencias"/>
            </h5>{" "}
            <p>
              <FormattedMessage id="experiencias_des"/>
            </p>
          </span>
        </div>
      </div>
    <br/>
      <div className="horarios-spa">
        <div className="spa-image-container">
          <picture className="fotosauna">
            <img src={fotosauna} />
          </picture>
          <span className="horarios-container">
            <h3>
              <FormattedMessage id="horario"/>
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="292"
              height="4"
              viewBox="0 0 292 4"
              fill="none"
            >
              <path
                d="M2 2H290"
                stroke="#B08912"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            <section className={classes["section-horarios"]}>
              <h4 className={classes["h4-spa"]}>
                <FormattedMessage id="lunes"/>
              </h4>{" "}
              <h4 className={classes["h4-spa"]}>7:00 - 21:00</h4>
              <h4 className={classes["h4-spa"]}>
                <FormattedMessage id="sabado"/>
              </h4>{" "}
              <h4>8:00 - 20:00</h4>
            </section>
            <Button type="blue" label={<FormattedMessage id="reservar"/>} />
          </span>
        </div>
      </div>
    </>
  );
}
