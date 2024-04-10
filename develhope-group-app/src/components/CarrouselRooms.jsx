import styles from '../styles/CarrouselRooms.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const PrevArrow = ({ onClick }) => (
  <div onClick={onClick}>
    <img className="custom-pre-arrow" src="../../assets/pre-arrow_rooms.png" />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div onClick={onClick}>
        <img className="custom-next-arrow"src="../../assets/pre-arrow_rooms.png" />
  </div>
);

export default function CarrouselRooms(){
  const settings = {
    dots: true,
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
  return (
    <div className={styles.carrouselRoomsContainer} >  
    <Slider {...settings}>
    <div className="slide-item">
        <img src="../../assets/Room_Standar.jpg" alt="Habitación estándar" width={1440} height={800} className="imgCarrouselRoom"/>
      </div>
      <div className="slide-item">
        <img src="../../assets/Room_Premium.jpg" alt="Habitación Premium" width={1440} height={800} className="imgCarrouselRoom"/>
      </div>
      <div className="slide-item">
        <img src="../../assets/Room_Suite.png" alt="Habitación Suite" width={1440} height={800} className="imgCarrouselRoom"/>
      </div>
    </Slider>
    </div>
  );

}
