import { Link } from "react-router-dom"
import Difuminado from "/src/Components/Difuminado"
import style from "/src/Styles/Navbar.module.css"
import classes from "/src/Styles/SubNav.module.css"
import { useState} from "react";
import { HashLink as Anchor } from 'react-router-hash-link';


export default function Navbar() {
    
    
    const [verHabitacionesSubNav, setVerHabitacionesSubNav] = useState(false);
    const [verRestauranteSubNav, setVerRestauranteSubNav] = useState(false);
    const [verSpaSubNav, setVerSpaSubNav] = useState(false);
    const [verDropdown, setVerDropdown] = useState(false);


    const handleHabitacionesClick = () => {
        setVerHabitacionesSubNav(!verHabitacionesSubNav);
        setVerRestauranteSubNav(false); 
        setVerSpaSubNav(false);
    };

    const handleRestauranteClick = () => {
        setVerRestauranteSubNav(!verRestauranteSubNav);
        setVerHabitacionesSubNav(false); 
        setVerSpaSubNav(false);
    };

    const handleSpaClick = () => {
        setVerSpaSubNav(!verSpaSubNav);
        setVerRestauranteSubNav(false); 
        setVerHabitacionesSubNav(false);
    };

    const handleDropdownClick = () => {
        setVerDropdown(!verDropdown);
        console.log(verDropdown)
    };

    
        return (
            <>
                <nav className={style.navbar}>
                    <img className={style.logo} src="/src/Assets/svg/logoBlack.svg" alt="logo"/>
                    <ul className={style.navTopContainer}>
                    <li><Link className={style.navLinks} to="/">HOME</Link></li>
                    <li><Link className={style.navLinks} to="/nosotros">NOSOTROS</Link></li>
                    <li>
                        <Link onClick={handleHabitacionesClick} className={style.navLinks} to="/habitaciones">HABITACIONES</Link>
                    </li>
                    {verHabitacionesSubNav && ( 
                        <nav className={classes.subNavContenedor}>
                                <ul className={classes.listContainer}>
                                    <li><Link className={style.navLinks} to="#estandar">ESTÁNDAR</Link></li>
                                    <span className={classes.divisor}></span>
                                    <li className={style.navLinks} to="#premium">PREMIUM</li>
                                    <span className={classes.divisor}></span>
                                    <li><Link className={style.navLinks} to="#suite">SUITE</Link></li>
                                </ul>
                        </nav>
                        )}
                    
                    <li>
                        <Link onClick={handleRestauranteClick} className={style.navLinks} to="/restauranteSunset">RESTAURANTES</Link>
                    </li>
                    {verRestauranteSubNav && (
                        <nav className={classes.subNavContenedor}>
                                <ul className={classes.listContainer}>
                                    <li><Anchor className={style.navLinks} to="#menu">MENÚ</Anchor></li>
                                    <span className={classes.divisor}></span>
                                    <li className={style.navLinks}>
                                    <div className={classes.contenedor} onClick={handleDropdownClick}>
                                        <span>RESTAURANTES</span> 
                                        <img src="/src/Assets/svg/chevrondown.svg" className={classes.chevron}/>
                                    </div>
                                {verDropdown && (
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
                                )}
                                </li>
                                <span className={classes.divisor}></span>
                                <li><Anchor className={style.navLinks} to="#platosEstrella">PLATOS ESTRELLAS</Anchor></li>
                                <span className={classes.divisor}></span>
                                <li><Anchor className={style.navLinks} to="#horario">HORARIO</Anchor></li>
                                <span className={classes.divisor}></span>
                                <li><Anchor className={style.navLinks} to="#galeria">GALERÍA</Anchor></li>
                            </ul>
                        </nav>
                    )}

                    <li>
                        <Link onClick={handleSpaClick} className={style.navLinks} to="/spa">SPA</Link>
                    </li>
                    {verSpaSubNav && ( 
                        <nav className={classes.subNavContenedor}>
                            <ul className={classes.listContainer}>
                                <li><Link className={style.navLinks} to="#tratamientos">TRATAMIENTOS</Link></li>
                                <span className={classes.divisor}></span>
                                <li className={style.navLinks} to="#horarios">HORARIOS</li>
                                <span className={classes.divisor}></span>
                                <li><Link className={style.navLinks} to="#barraReservas">RESERVAR</Link></li>
                            </ul>
                        </nav>
                    )} 
                    <li><Link className={style.navLinks} to="/galeria">GALERÍA</Link></li>
                    <li><Link className={style.navLinks} to="/contacto">CONTACTO</Link></li>
                </ul>
            
        </nav>
        {/* <Difuminado /> */}
        {verHabitacionesSubNav && <Difuminado top="44"/>}
        {verRestauranteSubNav && <Difuminado top="44" />}
        {verSpaSubNav && <Difuminado top="44" />}
        </>
    )
}
