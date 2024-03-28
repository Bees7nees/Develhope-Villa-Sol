import { Link } from 'react-router-dom';
import Difuminado from './Difuminado';
import classes from "./src/style/SubNav.module.ccs"

export default function SubNav({ paginaActual }) {

    const sublinksPagina = {
        home: "",
        nosotros:"",
        habitaciones: [
            "ÉSTANDAR", 
            <span key="span1" className={classes.divisorVertical}></span>,
            "PREMIUM",
            <span key="span2" className={classes.divisorVertical}></span>,
            "SUITE"],
        restaurantes: [
            "MENÚ",
            <span key="span3" className={classes.divisorVertical}></span>,
            "RESTAURANTE",
            <img src="/src/assets/chevrong.svg" className={classes.chevron}/>,
            {text: "SUNSET", subtext: "Gastronomía Andaluza"},
            {text: "BUFFET", subtext: "Gastronomía Continental"},
            {text: "SUNRISE", subtext: "Gastronomía Italiana"},
            <span key="span4" className={classes.divisorVertical}></span>,
            "PLATOS ESTRELLAS",
            <span key="span5" className={classes.divisorVertical}></span>,
            "HORARIOS",
            <span key="span6" className={classes.divisorVertical}></span>,
            "GALERÍA"
        ],
        spa: [
            "TRATAMIENTOS",
            <span key="span7" className={classes.divisorVertical}></span>,
            "HORARIO",
            <span key="span8" className={classes.divisorVertical}></span>,
            "RESERVAR"], 
        galeria:"",
        contacto:""
    };

    // Obtén los enlaces correspondientes a la página actual
    const sublinks = sublinksPagina[paginaActual] || [];

    return (
        <div className={classes.subNavContenedor}>
            <span className={classes.divisor}></span>
            {sublinks.map((link, index) => (
                <React.Fragment key={index}>
                    {typeof link === 'object' ? (
                        // Si el enlace es un objeto (contiene un menú desplegable)
                        <div className={classes.dropdown}>
                        <Link className={classes.sublink}>{link.text}</Link>
                        <span className={classes.subtext}>{link.subtext}</span>
                            <div>
                                {/* Mapea los elementos del menú desplegable */}
                                {link.dropdownItems.map((item, idex) => (
                                    <Link key={idex} to={`/${item.toLowerCase().replace(/\s/g, '-')}`}>
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ) : (
                        // Si el enlace es solo texto
                        <Link to={`/${link.toLowerCase().replace(/\s/g, '-')}`}>{link}</Link>
                    )}
                </React.Fragment>
            ))}
            <Difuminado/>
        </div>
    );
}

