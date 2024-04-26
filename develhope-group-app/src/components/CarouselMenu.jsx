import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "/src/Styles/CarouselMenu.module.css"



export default function CarouselMenu() {

        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0,
            autoplay: true,
            speed: 8000, 
            pauseOnHover: true, 
            arrows: false,
            cssEase: 'linear',
            responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
            ]
        };




    return (
        <div id="platosEstrella" className={classes.contenedor}>
            <h3 className={classes.titulo}>PLATOS ESTRELLAS</h3>
            <Slider {...settings}>
                <div>
                <img src= "/src/Assets/img/croquetas.jpg" className={classes.imagen}/>
                <span className={classes.pieDeFoto}>Croquetas de pulpo</span>
                </div>
                <div>
                <img src="/src/Assets/img/paella.png" className={classes.imagen}/>
                <span className={classes.pieDeFoto}>Paella Valenciana</span>
                </div>
                <div>
                <img src="/src/Assets/img/langosta.jpg" className={classes.imagen}/>
                <span className={classes.pieDeFoto}>Langosta Noisette</span>
                </div>
                <div>
                <img src="/src/Assets/img/pescado.jpg" className={classes.imagen}/>
                <span className={classes.pieDeFoto}>Pesca del día</span>
                </div>
            </Slider>
        </div>
    );
    }





