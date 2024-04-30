import styles from "../Styles/CarrouselRooms.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import PropTypes from "prop-types";

const PrevArrow = ({ onClick }) => (
  <div onClick={onClick}>
    <BsChevronCompactLeft className={styles.customPrevArrow} />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div onClick={onClick}>
    <BsChevronCompactRight className={styles.customNextArrow} />
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
    nextArrow: <NextArrow />, // Componente personalizado para la flecha siguiente
  };
  return (
    <div className={styles.carrouselRoomsContainer}>
      <Slider {...settings} className={styles.sliderRoom}>
        <div className={styles.slideItem}>
          <img
            src="https://images.pexels.com/photos/2736388/pexels-photo-2736388.jpeg"
            alt="Habitación estándar"
            className={styles.imgCarrouselRoom}
          />
          <TitleCarrouselRooms text="HABITACION ESTÁNDAR" />
        </div>
        <div className={styles.slideItem}>
          <img
            src="https://images.pexels.com/photos/22469110/pexels-photo-22469110/free-photo-of-hotel-cama-lujo-libro.jpeg"
            alt="Habitación Premium"
            className={styles.imgCarrouselRoom}
          />
          <TitleCarrouselRooms text="HABITACIÓN PREMIUM" />
        </div>
        <div className={styles.slideItem}>
          <img
            src="https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Habitación Suite"
            className={styles.imgCarrouselRoom}
          />
          <TitleCarrouselRooms text="HABITACIÓN SUITE" />
        </div>
      </Slider>
    </div>
  );
}
