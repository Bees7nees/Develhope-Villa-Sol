import { Link } from "react-router-dom"
import Difuminado from "./Difuminado"
import style from "/src/style/Navbar.module.css"
import classes from "/src/style/SubNav.module.css"
import mobile from "/src/style/NavBarMobile.module.css"
import { useState } from "react";


export default function Navbar() {
    
    
    const [verRestauranteSubNav, setVerRestauranteSubNav] = useState(false);
    const [verSpaSubNav, setVerSpaSubNav] = useState(false);
    const [verHabitacionesSubNav, setVerHabitacionesSubNav] = useState(false);

    const handleRestauranteClick = () => {
        setVerRestauranteSubNav(!verRestauranteSubNav);
    };

    const handleSpaClick = () => {
        setVerSpaSubNav(!verSpaSubNav);
    };

    const handleHabitacionesClick = () => {
        setVerHabitacionesSubNav(!verHabitacionesSubNav);
    };
    
    
    
    return (
        <>
            <nav className={style.navbar}>
                <img className={style.logo} src="/assets/logoBlack.svg" alt="logo"/>
                <ul className={style.navTopContainer}>
                <li><Link className={style.navLinks} to="/">HOME</Link></li>
                    <li><Link className={style.navLinks} to="/nosotros">NOSOTROS</Link></li>
                    <li><Link onClick={handleHabitacionesClick} className={style.navLinks} to="/habitaciones">HABITACIONES</Link></li>
                    {verHabitacionesSubNav && ( 
                        <nav className={classes.subNavContenedor}>
                                <ul className={classes.listContainer}>
                                    <li><Link className={style.navLinks} to="/habitaciones#estandar">ESTÁNDAR</Link></li>
                                    <span className={classes.divisor}></span>
                                    <li className={style.navLinks} to="/habitaciones#premium">PREMIUM</li>
                                    <span className={classes.divisor}></span>
                                    <li><Link className={style.navLinks} to="//habitaciones#suite">SUITE</Link></li>
                                </ul>
                        </nav>
                        )}
                    
                    <li><Link onClick={handleRestauranteClick} className={style.navLinks} to="/restauranteSunset">RESTAURANTES</Link></li>
                    {verRestauranteSubNav && (
                        <nav className={classes.subNavContenedor}>
                                <ul className={classes.listContainer}>
                                    <li><Link className={style.navLinks} to="/restaurante#menu">MENÚ</Link></li>
                                    <span className={classes.divisor}></span>
                                    <li className={style.navLinks}>
                                    <div className={classes.contenedor}>
                                        <span>RESTAURANTES</span> 
                                        <img src="/assets/chevrondown.svg" className={classes.chevron}/>
                                    </div>
                                <div className={classes.dropdown}>
                                <Link className={classes.sublink} to="/restauranteSunset">Sunset
                                    <span className={classes.subtext}>Gastronomía Andaluza</span>
                                </Link>
                                <Link className={classes.sublink} to="/restauranteBuffet">Buffet
                                    <span className={classes.subtext}>Gastronomía Continental</span>
                                </Link>
                                <Link className={classes.sublink} to="/restauranteSunrise">Sunrise
                                    <span className={classes.subtext}>Gastronomía Italiana</span>
                                </Link>
                                </div>
                                </li>
                                <span className={classes.divisor}></span>
                                <li><Link className={style.navLinks} to="/restaurante#platosEstrella">PLATOS ESTRELLAS</Link></li>
                                <span className={classes.divisor}></span>
                                <li><Link className={style.navLinks} to="/restaurante#horario">HORARIO</Link></li>
                                <span className={classes.divisor}></span>
                                <li><Link className={style.navLinks} to="/restaurante#galeria">GALERÍA</Link></li>
                            </ul>
                        </nav>
                    )}

                    <li><Link onClick={handleSpaClick} className={style.navLinks} to="/spa">SPA</Link></li>
                    {verSpaSubNav && ( 
                        <nav className={classes.subNavContenedor}>
                            <ul className={classes.listContainer}>
                                <li><Link className={style.navLinks} to="/spa#tratamientos">TRATAMIENTOS</Link></li>
                                <span className={classes.divisor}></span>
                                <li className={style.navLinks} to="/spa#horarios">HORARIOS</li>
                                <span className={classes.divisor}></span>
                                <li><Link className={style.navLinks} to="/spa#barraReservas">RESERVAR</Link></li>
                            </ul>
                        </nav>
                    )}
                    <li><Link className={style.navLinks} to="/galeria">GALERÍA</Link></li>
                    <li><Link className={style.navLinks} to="/contacto">CONTACTO</Link></li>
                </ul>
                <Link className={style.boton}>DISPONIBILIDAD</Link>
        </nav>
        {(verHabitacionesSubNav || verRestauranteSubNav || verSpaSubNav) && <Difuminado/>}
        <nav className={mobile.contenedorBurger}>
            <button className={mobile.buttonBurger}>
                <img src="/assets/burgerMenu.svg" className={mobile.burgerIcon}/>
            </button>
        </nav>
        </>
    )
}
