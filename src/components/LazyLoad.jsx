
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "/src/style/CarouselMenu.module.css"
import Slider from "react-slick";

export default function LazyLoad() {
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
    };



    return (
        <section className={classes.contenedor}>
        <h3 className={classes.titulo}>PLATOS ESTRELLAS</h3>
            <div className="slider-container">
                <div className={classes.contenedorSlides}>
                <Slider {...settings}> 
                    <div>
                        <img src="/assets/croquetas.jpg" className={classes.imagen} alt="Croquetas"/>
                    </div>
                    <div>
                        <img src="/assets/paella.png" className={classes.imagen} alt="Paella"/>
                    </div>
                    <div>
                        <img src="/assets/langosta.jpg" className={classes.imagen} alt="Langosta"/>
                    </div>
                    <div>
                        <img src="/assets/pescado.jpg" className={classes.imagen} alt="Pescado"/>
                    </div>
                    <div>
                        <img src="/assets/tapas.jpg" className={classes.imagen} alt="Tapas"/>
                    </div>
                </Slider> 
                </div>
            </div>
        </section>
    );
}



