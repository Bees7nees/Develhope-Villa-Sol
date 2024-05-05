import DividingLines from "../Components/DividingLines";
import TitleDescription from "../Components/TitleDescription";
import ReviewCardCarousel from "../Components/ReviewCardCarousel";
import classes from "../Styles/Home.module.scss";
import CarrouselRooms from "../Components/CarrouselRooms";
import { BsClock } from "react-icons/bs";

export function Home() {
  return (
    <section className={classes["home-container"]}>
      <div className={classes["home-title"]}>
        <div className={classes["home-banner-content"]}>
          <h1>Villa del Sol</h1>
          <p className={classes["home-subtitle"]}>En un lugar maravilloso</p>
          <p>El mejor hotel a orillas del Mediterráneo</p>
          <a target="_blank" href="https://maps.app.goo.gl/5EUBziEqDPUunTNb9">
            UBICACIÓN
          </a>
        </div>
      </div>
      <section className={classes["home-description"]}>
        <TitleDescription
          title={"Hospédese en uno de los mejores hoteles del mundo"}
          description={
            "Sumérjase en una experiencia única de hospitalidad y lujo en uno de los mejores hoteles del mundo: VillaSol Hotel. Con una ubicación privilegiada en el corazón de la ciudad, nuestro hotel combina a la perfección el encanto contemporáneo con un servicio excepcional para ofrecer a nuestros huéspedes una estancia inolvidable. Desde el momento en que pise nuestro elegante vestíbulo, será recibido por nuestro atento personal, cuya principal preocupación es hacer que su estadía sea lo más placentera posible. Nuestras lujosas habitaciones y suites están diseñadas para ofrecer el máximo confort y relajación, con comodidades modernas y detalles cuidadosamente seleccionados que garantizan una experiencia de alojamiento verdaderamente excepcional. Disfrute de una exquisita oferta gastronómica en nuestros renombrados restaurantes, donde podrá deleitarse con una variedad de platos creativos preparados por chefs expertos. Desde desayunos gourmet hasta cenas elegantes, cada comida en el VillaSol Hotel es una experiencia culinaria memorable."
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
                COCINA DE <br />
                MERCADO
              </h1>
              <p>
                La terraza invita a los comensales a sumergirse en un oasis de
                tranquilidad mientras saborean los sabores frescos del mar. Cada
                bocado, desde la delicadeza de las gambas blancas hasta la
                explosión de sabor de un auténtico plato de pescaíto frito, es
                una celebración de la riqueza culinaria de la región.
              </p>
            </div>
            <div className={classes["restaurante-horario"]}>
              <BsClock style={{ fontSize: "2rem", alignSelf: "center" }} />
              <p className={classes["restaurante-horario-text"]}>
                Horario <br />
                Vestimenta informal
              </p>
            </div>
            <a
              className={classes["restaurante-reservar"]}
              href="/restauranteSunset"
              target="_blank"
            >
              Reservar {">"}
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
            <h1>NUESTROS CLIENTES OPINAN</h1>
            <ReviewCardCarousel />
            <a
              className={classes["ver-mas"]}
              href="https://www.tripadvisor.es/"
              target="_blank"
            >
              VER MÁS {">"}
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
