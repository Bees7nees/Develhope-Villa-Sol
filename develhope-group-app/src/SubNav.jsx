import { Link } from 'react-router-dom';
import Difuminado from './Difuminado';
// import classes from ""

export default function SubNav({ paginaActual }) {

    const sublinksPagina = {
        home: "",
        nosotros:"",
        habitaciones: [
            "ÉSTANDAR", 
            <span key="span1" className={classes.dividorVertical}></span>,
            "PREMIUM",
            <span key="span2" className={classes.dividorVertical}></span>,
            "SUITE"],
        restaurantes: [
            "MENÚ",
            <span key="span3" className={classes.dividorVertical}></span>,
            "RESTAURANTE",
            {text: "SUNSET", subtext: "Gastronomía Andaluza"},
            {text: "BUFFET", subtext: "Gastronomía Continental"},
            {text: "SUNRISE", subtext: "Gastronomía Italiana"},
            <span key="span4" className={classes.dividorVertical}></span>,
            "PLATOS ESTRELLAS",
            <span key="span5" className={classes.dividorVertical}></span>,
            "HORARIOS",
            <span key="span6" className={classes.dividorVertical}></span>,
            "GALERÍA"
        ],
        spa: [
            "TRATAMIENTOS",
            <span key="span7" className={classes.dividorVertical}></span>,
            "HORARIO",
            <span key="span8" className={classes.dividorVertical}></span>,
            "RESERVAR"], 
        galeria:"",
        contacto:""
    };

    // Obtén los enlaces correspondientes a la página actual
    const sublinks = sublinksPagina[paginaActual] || [];

    return (
        <div>
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

