import styles from "../Styles/CarrouselRooms.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import PropTypes from "prop-types";

const PrevArrow = ({ onClick }) => (
  <div onClick={onClick}>
    <img
      className={styles.customPrevArrow}
      src="../../assets/pre-arrow_rooms.png"
    />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div onClick={onClick}>
    <img
      className={styles.customNextArrow}
      src="../../assets/post-arrow_rooms.png"
    />
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
            src="../../assets/Room_Standar.jpg"
            alt="Habitación estándar"
            width={1440}
            height={800}
            className={styles.imgCarrouselRoom}
          />
          <TitleCarrouselRooms text="HABITACION ESTÁNDAR" />
        </div>
        <div className={styles.slideItem}>
          <img
            src="../../assets/Room_Premium.jpg"
            alt="Habitación Premium"
            width={1440}
            height={800}
            className={styles.imgCarrouselRoom}
          />
          <TitleCarrouselRooms text="HABITACIÓN PREMIUM" />
        </div>
        <div className={styles.slideItem}>
          <img
            src="../../assets/Room_Suite.png"
            alt="Habitación Suite"
            width={1440}
            height={800}
            className={styles.imgCarrouselRoom}
          />
          <TitleCarrouselRooms text="HABITACIÓN SUITE" />
        </div>
      </Slider>
    </div>
  );
}
