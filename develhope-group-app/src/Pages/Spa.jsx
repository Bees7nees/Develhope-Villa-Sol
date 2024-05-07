import fotomasaje1 from "../Assets/Img/fotomasaje1.png";
import fotomasaje2 from "../Assets/Img/fotomasaje2.png";
import fotosauna from "../Assets/Img/fotosauna.png";
import Button from "../Components/Buttons";
import DividingLines from "../Components/DividingLines";
import TitleDescription from "../Components/TitleDescription";
import classes from "../Styles/Spa.module.scss";

export default function SpaPage() {
  return (
    <>
      <TitleDescription
        title="Nuestro Wellness SPA"
        description="Aprovecha tus días de vacaciones para mimarte y relajarte en nuestro centro de salud y belleza. Dispone de una piscina climatizada, paseo contracorriente, tres cuellos de cisne descontracturantes y camas de burbujas; 2 saunas y baño turco. baño de vapor, una fuente de hielo, un cubo de agua fría, una ducha oscilante, una ducha escocesa, una ducha vichy con chorros de agua en espalda y piernas con efecto micropeeling relajante y una bañera de hidromasaje aromático."
      />
      <div className={classes["divisor"]}>
        <DividingLines color={"var(--blue900)"} length={"1rem"} />
        <DividingLines color={"var(--golden500)"} length={"1rem"} />
      </div>
      <h3 className="h3-spa-title">SALUD Y BIENESTAR PARA TODA LA FAMILIA</h3>
      <div className="spa-container">
        <img src={fotomasaje1} />
        <p>
          Un mar de tranquilidad. Modernas y amplias instalaciones con Agua
          Salada, tratamientos seleccionados y aplicados por expertas y formadas
          manos y todo lo necesario para hacer realidad el cuidado de la Salud y
          el Bienestar de toda la familia.
        </p>
      </div>

      <div className="spa-container">
        <img src={fotomasaje2} />
        <p>
          Más de 10 tratamientos faciales a su disposición. Los múltiples
          efectos de mejora del bienestar de la piel conseguidos mediante el uso
          de aguas termales han consolidado la oferta de tratamientos de
          estética termal en los balnearios, más allá de las tradicionales y
          conocidas curas termales para numerosos problemas de salud.
        </p>
      </div>
      <div className={classes["divisor"]}>
        <DividingLines color={"var(--blue900)"} length={"1rem"} />
        <DividingLines color={"var(--golden500)"} length={"1rem"} />
      </div>
      <div className="tratamientos">
        <h3>TRATAMIENTOS</h3>
        <div className="tratamientos-container">
          <span>
            <h5>MASAJES</h5>{" "}
            <p>
              Experiencia calmante que combina técnicas de masaje suave con
              aromas relajantes para aliviar tensiones y promover bienestar.
            </p>
          </span>
          <span>
            <h5>FACIALES</h5>{" "}
            <p>
              Renueva tu piel con una limpieza profunda, exfoliación suave y
              mascarilla hidratante, dejándola radiante y rejuvenecida.
            </p>
          </span>
          <span>
            <h5>CUIDADO DE MANOS Y PIES</h5>{" "}
            <p>
              Rejuvenece tus extremidades con una exfoliación suave, masaje
              relajante y crema hidratante para manos y pies suaves y nutridos.
            </p>
          </span>
          <span>
            <h5>EXPERIENCIAS EN PAREJA</h5>{" "}
            <p>
              Conexión y relajación en pareja con un masaje relajante
              personalizado para disfrutar de intimidad y bienestar juntos.
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
            <h3>HORARIOS</h3>
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
              <h4 className={classes["h4-spa"]}>LUNES - VIERNES</h4>{" "}
              <h4 className={classes["h4-spa"]}>7:00 - 21:00</h4>
              <h4 className={classes["h4-spa"]}>SÁBADOS & DOMINGOS</h4>{" "}
              <h4>8:00 - 20:00</h4>
            </section>
            <Button type="blue" label="Reservar" />
          </span>
        </div>
      </div>
    </>
  );
}
