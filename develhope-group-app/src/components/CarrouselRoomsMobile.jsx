import styles from '../Styles/CarrouselRoomsMobile.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

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

function TitleCarrouselRooms({ text }){
  return (
    <div className={styles.titleCarrouselRooms}>
      <p>{text}</p>
    </div>
  )
}

export default function CarrouselRooms(){
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
  return (
    <div className={styles.carrouselRoomsContainer} >  
    <Slider  {...settings} className={styles.sliderRoom}>
    <div className={styles.slideItem}>
        <img src={RoomStandar} alt="Habitación estándar" width={1440} height={800} className={styles.imgCarrouselRoom}/>
        <TitleCarrouselRooms text="HABITACION ESTÁNDAR" />
      </div>
      <div className={styles.slideItem}>
        <img src={RoomPremium} alt="Habitación Premium" width={1440} height={800} className={styles.imgCarrouselRoom}/>
        <TitleCarrouselRooms text="HABITACIÓN PREMIUM" />
      </div>
      <div className={styles.slideItem}>
        <img src={RoomSuite} alt="Habitación Suite" width={1440} height={800} className={styles.imgCarrouselRoom}/>
        <TitleCarrouselRooms text="HABITACIÓN SUITE" />
      </div>
    </Slider>
    </div>
  );

}
