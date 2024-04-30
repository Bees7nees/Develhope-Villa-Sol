import CheckinCard from "../components/CheckinCard";
import TitulosH1 from "../components/TitulosH1";
import TitulosH6 from "../components/TitulosH6";
import styles from "../section/Room.module.css";

export default function Room({ habitacion, url }) {
  let parrafo = '';
  let descripcionCompleta = '';

  switch (habitacion) {
    case 'ESTÁNDAR':
      parrafo = 'Descubre la esencia del confort: relájate en nuestra habitación estándar con una cama king size y todas las comodidades para una estancia inolvidable.';
      descripcionCompleta = 'Sumérgete en el confort de nuestra habitación estándar, donde te recibirá una lujosa cama king size al final del día lleno de aventuras. Desde tu balcón privado, contempla las vistas de los encantadores alrededores de Cádiz. Además podrás disfrutar de un fabuloso desayuno buffet incluido en la estancia. Relájate en la bañera después de un día emocionante y descubre la comodidad de tener a tu disposición un secador, nevera y televisión para satisfacer todas tus necesidades.';
      break;
    case 'PREMIUN':
      parrafo = 'Eleva tu experiencia de hospedaje: disfruta de un nivel superior de comodidad y lujo en nuestra habitación premium, con amplio espacio y una refrescante ducha.';
      descripcionCompleta = 'Disfruta de un nivel superior con nuestra habitación premium, donde el espacio adicional te permite moverte con libertad y disfrutar de una experiencia más indulgente. Además de todas las comodidades de la habitación estándar, encontrarás una refrescante ducha para revitalizarte por la mañana o relajarte por la noche. Despierta cada día con energía renovada y prepárate para descubrir los tesoros de Cádiz sabiendo que tu confort está asegurado en cada detalle.';
      break;
    case 'IMPERIAL':
      parrafo = 'Vive el lujo en su máxima expresión: déjate cautivar por nuestra suite, un espacio de ensueño donde el confort y la elegancia se encuentran.';
      descripcionCompleta = 'Sumérgete en el lujo sin igual de nuestra suite, donde cada detalle ha sido cuidadosamente diseñado para ofrecerte una experiencia de hospedaje extraordinaria. Disfruta de un amplio salón donde puedes relajarte y disfrutar de momentos de tranquilidad, además de todas las comodidades de las habitaciones anteriores. Déjate consentir con un desayuno exquisito mientras contemplas las vistas desde tu balcón privado, y relájate en la bañera para una experiencia de spa en la comodidad de tu propia habitación.';
      break;
    default:
      break;
  }

  return (
    <>
    <div className={styles.room_card}>
       
      <div className={styles.imgRoom}>
        <img src={url} alt="" />
      </div>
      <TitulosH1 title={`HABITACIÓN ${habitacion}`} parrafo={parrafo} />

      <div className={styles.datos_section}>
        <CheckinCard habitacion={habitacion} />
        <TitulosH6 title='DESCRIPCIÓN DE LA HABITACIÓN' parrafo={descripcionCompleta} />

      </div>
    </div>
    </>
  )
}