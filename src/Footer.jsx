import { Link } from 'react-router-dom'
import classes from "/src/style/Footer.module.css"

export default function Footer() {


    return (
        <footer className={classes.footerContainer}>
            <div className={classes.footer}>
                <section className={classes.nosotrosFooter}>
                    <Link className={classes.titulo}>CONOCENOS</Link> 
                        <div className={classes.downcontacto}>
                            <Link className={classes.links}>Eventos y Conferencias</Link>
                            <Link className={classes.links}>Restaurantes y Buffet</Link>
                            <Link className={classes.links}>Preguntas Frecuentes</Link>
                        </div>
                </section>
                <span className={classes.divisor}></span>
                <section className={classes.reservasFooter}>
                    <Link className={classes.titulo}>RESERVAR</Link> 
                        <div className={classes.downreserva}>
                            <Link className={classes.links}>Spa & Wellness Center</Link>
                            <Link className={classes.links}>Traslado aeropuerto y transporte</Link>
                            <Link className={classes.links}>Lugares de interés</Link>
                        </div>
                </section>
                <span className={classes.divisor}></span>
                <section className={classes.redesFooter}>
                    <span className={classes.titulo}>SIGUENOS</span>
                    <div className={classes.downredes}> 
                        <img src="/assets/facebook.svg" className={classes.svg}/>
                        <img src="/assets/twitter.svg" className={classes.svg}/>
                        <img src="/assets/instagram.svg" className={classes.svg}/>
                    </div>
                </section>
                <div className={classes.placeholder}>contacto</div>
            </div>
                <div className={classes.politicsContainer}>
                    <Link className={classes.politics}>Política & Privacidad</Link>
                    <p className={classes.politicstext}>Villa del sol. Todos los derechos reservados est-2024</p>
                </div>
        </footer>
    )
}
