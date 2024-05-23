import ElementAboutUs from "../Components/ElementAboutUs";
import TitulosH1 from "../Components/TitulosH1";
import styles from "/src/Styles/AboutUs.module.css";
import {Context} from "/src/Components/Language"
import { FormattedMessage } from 'react-intl';
import { useContext } from "react";

export default function AboutUs() {

  const context = useContext(Context);

  return (
    <div className={styles.section_about}>
      <TitulosH1
        title={<FormattedMessage id="somos"/>}
        parrafo={<FormattedMessage id="somos_descripcion"/>}
      />

      <ElementAboutUs
        title={<FormattedMessage id="historia"/>}
        parrafo={<FormattedMessage id="nuestro"/>}
        url="\src\assets\historia.png"
        direction="right"
        icon_url="\src\assets\libro-icon.svg"
      />

      <ElementAboutUs
        title={<FormattedMessage id="equipo"/>}
        parrafo={<FormattedMessage id="equipo_descripcion"/>}
        url="\src\Assets\nuestro_equipo.png"
      />

      <ElementAboutUs
        title={<FormattedMessage id="mision"/>}
        parrafo={<FormattedMessage id="vision"/>}
        url="\src\assets\mision.png"
        direction="right"
      />

      <ElementAboutUs
        title={<FormattedMessage id="reconocimientos"/>}
        parrafo={<FormattedMessage id= "reconocimientos_descripcion"/>}
        url="\src\assets\reconocimientos.png"
      />

      <ElementAboutUs
        title={<FormattedMessage id="proyectos"/>}
        parrafo={<FormattedMessage id="proyectos_descripcion"/>}
        url="\src\assets\proyecto.png"
        direction="right"
      />
    </div>
  );
}
