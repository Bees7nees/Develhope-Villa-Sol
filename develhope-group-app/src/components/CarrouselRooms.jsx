import styles from '../Styles/CarrouselRooms.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import {useState} from 'react'

import PropTypes from "prop-types";
import PrevArrowImg from '../Assets/Img/pre-arrow_rooms.png'
import PostArrowImg from '../Assets/Img/post-arrow_rooms.png'
import RoomStandar from '../Assets/Img/Room_Standar.jpg'
import RoomPremium from '../Assets/Img/Room_Premium.jpg'
import RoomSuite from '../Assets/Img/Room_Suite.png'

const PrevArrow = ({ onClick }) => (
  <div onClick={onClick}>
    <img className={styles.customPrevArrow} src={PrevArrowImg} />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div onClick={onClick}>
        <img className={styles.customNextArrow} src={PostArrowImg} />
  </div>
);

function TitleCarrouselRooms({ text }) {
  return (
    <div className={styles.titleCarrouselRooms}>
      <p>{text}</p>
    </div>
  );
}

PrevArrow.propTypes = {
  onClick: PropTypes.func,
};

NextArrow.propTypes = {
  onClick: PropTypes.func,
};

TitleCarrouselRooms.propTypes = {
  text: PropTypes.string,
};

export default function CarrouselRooms() {
  const settings = {
    // dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    prevArrow: <PrevArrow />, // Componente personalizado para la flecha previa
    nextArrow: <NextArrow /> // Componente personalizado para la flecha siguiente

}
const [showCardStandar, setShowCardStandar] = useState(false);
const [showCardPremium, setShowCardPremium] = useState(false);
const [showCardSuite, setShowCardSuite] = useState(false);
const toggleTarjeta = (tipo) => {
  switch (tipo) {
    case 'standar':
      setShowCardStandar(!showCardStandar);
      break;
    case 'premium':
      setShowCardPremium(!showCardPremium);
      break;
    case 'suite':
      setShowCardSuite(!showCardSuite);
      break;
    default:
      break;
  }
};
  return (
    <div className={styles.carrouselRoomsContainer} >  
    <Slider  {...settings} className={styles.sliderRoom}>
    <div className={styles.slideItem} onClick = {() => toggleTarjeta('standar')}>
        <img src={RoomStandar} alt="Habitación estándar" width={1440} height={800} className={styles.imgCarrouselRoom}/>
        <TitleCarrouselRooms text="HABITACION ESTÁNDAR" />
        {showCardStandar && (
        <div className={styles.tarjeta}>
          <h2 className={styles.titleCard}>HABITACIÓN ESTÁNDAR</h2>
          <p className={styles.textCard}>Sumérgete en el confort de nuestra habitación estándar, donde te recibirá una lujosa cama king size al final del día lleno de aventuras. Desde tu balcón privado, contempla las vistas de los encantadores alrededores de Cádiz. Además podrás disfrutar de un fabuloso desayuno buffet incluido en la estancia.</p>
          <button className={styles.buttonCard}>Conocer más</button>
        </div>
      )}
      </div>
      <div className={styles.slideItem} onClick = {() => toggleTarjeta('premium')}>
        <img src={RoomPremium} alt="Habitación Premium" width={1440} height={800} className={styles.imgCarrouselRoom}/>
        <TitleCarrouselRooms text="HABITACIÓN PREMIUM" />
        {showCardPremium && (
        <div className={styles.tarjeta}>
          <h2 className={styles.titleCard}>HABITACIÓN PREMIUM</h2>
          <p className={styles.textCard}>Disfruta de un nivel superior con nuestra habitación premium, donde el espacio adicional te permite moverte con libertad y disfrutar de una experiencia más indulgente. Además de todas las comodidades de la habitación estándar, encontrarás una refrescante ducha para revitalizarte por la mañana o relajarte por la noche.</p>
          <button className={styles.buttonCard}>Conocer más</button>
        </div>
      )}
      </div>
      <div className={styles.slideItem} onClick = {() => toggleTarjeta('suite')}>
        <img src={RoomSuite} alt="Habitación Suite"width={1440} height={800} className={styles.imgCarrouselRoom}/>
        <TitleCarrouselRooms text="HABITACIÓN SUITE" />
        {showCardSuite && (
        <div className={styles.tarjeta}>
          <h2 className={styles.titleCard}>HABITACIÓN SUITE</h2>
          <p className={styles.textCard}>Sumérgete en el lujo sin igual de nuestra suite, donde cada detalle ha sido cuidadosamente diseñado para ofrecerte una experiencia de hospedaje extraordinaria. Disfruta de un amplio salón donde puedes relajarte y disfrutar de momentos de tranquilidad, además de todas las comodidades de las habitaciones anteriores. Déjate consentir con un desayuno exquisito mientras contemplas las vistas desde tu balcón privado, y relájate en la bañera para una experiencia de spa en la comodidad de tu propia habitación.</p>
          <button className={styles.buttonCard}>Conocer más</button>
        </div>
      )}
      </div>
    </Slider>
    </div>
  );
}
