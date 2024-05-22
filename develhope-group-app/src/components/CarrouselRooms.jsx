import styles from "../Styles/CarrouselRooms.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useState } from "react";
import PropTypes from "prop-types";
import RoomStandar from "../Assets/Img/Room_Standar.jpg";
import RoomPremium from "../Assets/Img/Room_Premium.jpg";
import RoomSuite from "../Assets/Img/Room_Suite.png";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import {Context} from "/src/Components/Language"
import { FormattedMessage } from 'react-intl';
import { useContext } from "react";



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


  const context = useContext(Context);


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
  const [showCardStandar, setShowCardStandar] = useState(false);
  const [showCardPremium, setShowCardPremium] = useState(false);
  const [showCardSuite, setShowCardSuite] = useState(false);
  const toggleTarjeta = (tipo) => {
    switch (tipo) {
      case "standar":
        setShowCardStandar(!showCardStandar);
        break;
      case "premium":
        setShowCardPremium(!showCardPremium);
        break;
      case "suite":
        setShowCardSuite(!showCardSuite);
        break;
      default:
        break;
    }
  };
  return (
    <div className={styles.carrouselRoomsContainer}>
      <Slider {...settings} className={styles.sliderRoom}>
        <div
          className={styles.slideItem}
          onClick={() => toggleTarjeta("standar")}
        >
          <img
            src={RoomStandar}
            alt="Habitación estándar"
            width={1440}
            height={800}
            className={styles.imgCarrouselRoom}
          />
          <TitleCarrouselRooms text={<FormattedMessage id="estandar"/>} />
          {showCardStandar && (
            <div className={styles.tarjeta}>
              <h2 className={styles.titleCard}><FormattedMessage id="estandar"/></h2>
              <p className={styles.textCard}>
                <FormattedMessage id="estandar_descripcion"/>
              </p>
              <textarea className={styles.textCardPhone}>
                <FormattedMessage id="estandar_descripcion"/>
              </textarea>
              <a href="/Habitaciones" className={styles.buttonCard}>
                <FormattedMessage id="conocer"/>
              </a>
            </div>
          )}
        </div>
        <div
          className={styles.slideItem}
          onClick={() => toggleTarjeta("premium")}
        >
          <img
            src={RoomPremium}
            alt="Habitación Premium"
            width={1440}
            height={800}
            className={styles.imgCarrouselRoom}
          />
          <TitleCarrouselRooms text={<FormattedMessage id="premium"/>} />
          {showCardPremium && (
            <div className={styles.tarjeta}>
              <h2 className={styles.titleCard}><FormattedMessage id="premium"/></h2>
              <p className={styles.textCard}>
                <FormattedMessage id="premium_descripcion"/>
              </p>
              <textarea className={styles.textCardPhone}>
                <FormattedMessage id="premium_descripcion"/>
              </textarea>
              <button className={styles.buttonCard}>
              <FormattedMessage id="conocer"/>
              </button>
            </div>
          )}
        </div>
        <div
          className={styles.slideItem}
          onClick={() => toggleTarjeta("suite")}
        >
          <img
            src={RoomSuite}
            alt="Habitación Suite"
            width={1440}
            height={800}
            className={styles.imgCarrouselRoom}
          />
          <TitleCarrouselRooms text={<FormattedMessage id="suite"/>} />
          {showCardSuite && (
            <div className={styles.tarjeta}>
              <h2 className={styles.titleCard}>
                <FormattedMessage id="suite"/>
              </h2>
              <p className={styles.textCard}>
                <FormattedMessage id="suite_descripcion"/>
              </p>
              <textarea className={styles.textCardPhone}>
                <FormattedMessage id="suite_descripcion"/>
              </textarea>
              <button className={styles.buttonCard}>
                <FormattedMessage id="conocer"/>
              </button>
            </div>
          )}
        </div>
      </Slider>
    </div>
  );
}
