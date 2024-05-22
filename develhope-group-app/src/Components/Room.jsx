import CheckinCard from "./CheckinCard";
import TitulosH1 from "./TitulosH1";
import TitulosH6 from "./TitulosH6";
import styles from "./Room.module.css";
import PropTypes from "prop-types";
import { FormattedMessage } from 'react-intl';

Room.propTypes = {
  habitacion: PropTypes.string,
  url: PropTypes.string,
};

export default function Room({ habitacion, url }) {



  let parrafo = "";
  let descripcionCompleta = "";

  switch (habitacion) {
    case "ESTÁNDAR":
      parrafo= <FormattedMessage id="estandar_room"/>;
      descripcionCompleta = <FormattedMessage id="descripcion_estandar"/>;
      break;
    case "PREMIUN":
      parrafo = <FormattedMessage id="premium_room"/>;
      descripcionCompleta = <FormattedMessage id="descripcion_premium"/>;
      break;
    case "SUITE":
      parrafo = <FormattedMessage id="suite_room"/>;
      descripcionCompleta = <FormattedMessage id="descripcion_suite"/>;
      break;
    default:
      break;
  }


  const title = (
    <>
      <FormattedMessage id="habitacion" /> {habitacion}
    </>
  );


  return (
    <>
      <div className={styles.room_card}>
        <div className={styles.imgRoom}>
          <img src={url} alt="" />
        </div>
        <TitulosH1 title={title} parrafo={parrafo} />
        <div className={styles.datos_section}>
          <CheckinCard habitacion={habitacion} />
          <TitulosH6
            title={<FormattedMessage id="habitacion_descripcion"/>} 
            parrafo={descripcionCompleta}
          />
        </div>
      </div>
    </>
  );
}
