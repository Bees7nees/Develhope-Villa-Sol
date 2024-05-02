import ElementAboutUs from "../Components/ElementAboutUs";
import TitulosH1 from "../Components/TitulosH1";
import styles from "/src/Styles/AboutUs.module.css";

export default function AboutUs() {
  return (
    <div className={styles.section_about}>
      <TitulosH1
        title="¿QUIÉNES SOMOS?"
        parrafo="Hay una frase que siempre llevo conmigo, y es que jamás somos los mismos de hola, knvksn No importa el lapso de tiempo que decidas sumergirte en ese destino, bienvenidos a este hot no importa si la aventura es en solitario, o si escoges compartir los descubrimientos con alguien. El singular hito valedero es la experiencia, y la cultura que se agolpa con ímpetu en ldestinada a revelar el periplo con el que hemos estado soñando toda la vida en cada rincon de"
      />

      <ElementAboutUs
        title="HISTORIA"
        parrafo="Sumérgete en la rica historia de nuestro hotel resort, un rincón encantador que ha sido testigo de innumerables memorias a lo largo de los años. Desde sus humildes comienzos hasta convertirse en un destino de ensueño en la costa de Cádiz, cada piedra cuenta una historia de tradición y hospitalidad."
        url="\src\assets\historia.png"
        direction="right"
        icon_url="\src\assets\libro-icon.svg"
      />

      <ElementAboutUs
        title="NUESTRO EQUIPO"
        parrafo="Nuestro equipo es el corazón palpitante de nuestro resort. Compuesto por profesionales apasionados y dedicados, trabajamos juntos para asegurarnos de que cada huésped experimente una estancia inolvidable. Con talento local y talento internacional, nos esforzamos por ofrecer un servicio excepcional con una sonrisa."
        url="\src\assets\nuestro_equipo.png"
      />

      <ElementAboutUs
        title="MISIÓN,VISIÓN Y FUTURO"
        parrafo="Nuestra misión es crear experiencias memorables que perduren en el corazón de nuestros huéspedes. Nos comprometemos a ofrecer hospitalidad genuina, servicios de calidad y un entorno único que celebre la belleza y la cultura de la costa de Cádiz. En nuestro resort, cada detalle está diseñado para inspirar y deleitar."
        url="\src\assets\mision.png"
        direction="right"
      />

      <ElementAboutUs
        title="RECONOCIMIENTOS"
        parrafo="Nos enorgullece ser reconocidos como uno de los mejores destinos de la costa de Cádiz. A lo largo de los años, hemos recibido premios y elogios por nuestra excelencia en hospitalidad, sostenibilidad y compromiso con la comunidad local. Estos reconocimientos son un testimonio de nuestro compromiso con la calidad y la innovación."
        url="\src\assets\reconocimientos.png"
      />

      <ElementAboutUs
        title="PROYECTOS"
        parrafo="Mirando hacia el futuro, nuestro proyecto busca llevar nuestro resort al siguiente nivel. Estamos emocionados de presentar nuevas instalaciones, experiencias y programas que enriquecerán la estancia de nuestros huéspedes. Con una visión audaz y creativa, estamos transformando nuestro resort para ofrecer aún más magia en la costa de Cádiz."
        url="\src\assets\proyecto.png"
        direction="right"
      />
    </div>
  );
}
