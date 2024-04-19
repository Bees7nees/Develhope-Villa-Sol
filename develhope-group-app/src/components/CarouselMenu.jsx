import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "/src/Styles/CarouselMenu.module.css"

function ArrowRight(props) {
        const { className, style, onClick } = props;
        return (
        <div
            className={className}
            style={{ ...style}}
            onClick={onClick}
        >
        <svg className={classes.svgRight} xmlns="http://www.w3.org/2000/svg" width="21" height="30" viewBox="0 0 21 47" fill="none">
            <path d="M0.0735302 40.8833L12.9835 23.444L0.278748 5.72679L4.25323 0.357928L20.8973 23.518L3.98467 46.3643L0.0735302 40.8833Z" fill="#213242"/>
        </svg>
        </div>
        );
    }
    
    function ArrowLeft(props) {
        const { className, style, onClick } = props;
        return (
        <div
            className={className}
            style={{ ...style}}
            onClick={onClick}
        >
        <svg className={classes.svgLeft} xmlns="http://www.w3.org/2000/svg" width="21" height="30" viewBox="0 0 21 47" fill="none" style={{ transform: "rotate(180deg)" }}>
            <path d="M0.0735302 40.8833L12.9835 23.444L0.278748 5.72679L4.25323 0.357928L20.8973 23.518L3.98467 46.3643L0.0735302 40.8833Z" fill="#213242"/>
        </svg>
        </div>
        );
    }


export default function CarouselMenu() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0,
            nextArrow: <ArrowRight />,
            prevArrow: <ArrowLeft />,
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
        <div className={classes.contenedor}>
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





