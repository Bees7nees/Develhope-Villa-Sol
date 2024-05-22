import DividingLines from "../Components/DividingLines";
import TitleDescription from "../Components/TitleDescription";
import ReviewCardCarousel from "../Components/ReviewCardCarousel";
import classes from "../Styles/Home.module.scss";
import CarrouselRooms from "../Components/CarrouselRooms";
import { BsClock } from "react-icons/bs";
import {Context} from "/src/Components/Language"
import { FormattedMessage } from 'react-intl';
import { useContext } from "react";

export function Home() {

  const context = useContext(Context);

  return (
    <section className={classes["home-container"]}>
      <div className={classes["home-title"]}>
        <div className={classes["home-banner-content"]}>
          <h1>Villa del Sol</h1>
          <p className={classes["home-subtitle"]}>
            <FormattedMessage id="subtitulo"/>
          </p>
          <p><FormattedMessage id="descripcion"/></p>
          <a target="_blank" href="https://maps.app.goo.gl/5EUBziEqDPUunTNb9">
            <FormattedMessage id="ubicacion"/>
          </a>
        </div>
      </div>
      <section className={classes["home-description"]}>
        <TitleDescription
          title={<FormattedMessage id="titulo"/>}
          description={
            <FormattedMessage id="descripcion_hotel"/>
          }
        />
      </section>
      <div className={classes["divisor"]}>
        <DividingLines color={"var(--blue900)"} length={"1rem"} />
        <DividingLines color={"var(--golden500)"} length={"1rem"} />
      </div>
      {/* Aquí iría la imagen de una de las habitaciones con
            descripción y el botón para acceder a la galería, cambiando el url */}
      <CarrouselRooms />
      <div className={classes["divisor"]}>
        <DividingLines color={"var(--blue900)"} length={"1rem"} />
        <DividingLines color={"var(--golden500)"} length={"1rem"} />
      </div>
      {/* Aquí va parecido a lo anterior pero para la página de cocina */}
      <section className={classes["acceso-restaurante"]}>
        <div className={classes["acceso-restaurante-wrapper"]}>
          <img
            className={classes["acceso-restaurante-img"]}
            src="/src/Assets/img/terraza.png"
            alt="Restaurante Villa del Sol"
          />
          <div className={classes["acceso-restaurante-content"]}>
            <div className={classes["acceso-restaurante-title"]}>
              <h1>
              <FormattedMessage id="descripcion_rest"/> <br />
              <FormattedMessage id="descripcion_resta"/>
              </h1>
              <p>
              <FormattedMessage id="descripcion_restaurante"/>
              </p>
            </div>
            <div className={classes["restaurante-horario"]}>
              <BsClock style={{ fontSize: "2rem", alignSelf: "center" }} />
              <p className={classes["restaurante-horario-text"]}>
              <FormattedMessage id="horario"/> <br />
              <FormattedMessage id="vestimenta"/>
              </p>
            </div>
            <a
              className={classes["restaurante-reservar"]}
              href="/restauranteSunset"
              target="_blank"
            >
              <FormattedMessage id="reservar"/> {">"}
            </a>
          </div>
        </div>
      </section>
      <div className={classes["divisor"]}>
        <DividingLines color={"var(--blue900)"} length={"1rem"} />
        <DividingLines color={"var(--golden500)"} length={"1rem"} />
      </div>
      <section className={classes["opiniones-clientes"]}>
        <div className={classes["opiniones-wrapper"]}>
          <div className={classes["opiniones-content"]}>
            <h1>
            <FormattedMessage id="opiniones"/>
            </h1>
            <ReviewCardCarousel />
            <a
              className={classes["ver-mas"]}
              href="https://www.tripadvisor.es/"
              target="_blank"
            >
              <FormattedMessage id="ver"/> {">"}
            </a>
          </div>
        </div>
      </section>
      <div className={classes["divisor"]}>
        <DividingLines color={"var(--blue900)"} length={"1rem"} />
        <DividingLines color={"var(--golden500)"} length={"1rem"} />
      </div>
    </section>
  );
}
