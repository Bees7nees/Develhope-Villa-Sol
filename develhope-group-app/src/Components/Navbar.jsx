import { Link, useLocation } from "react-router-dom"
import Difuminado from "/src/Components/Difuminado"
import style from "/src/Styles/Navbar.module.css"
import classes from "/src/Styles/SubNav.module.css"
import { useEffect, useState } from "react";
import { HashLink as Anchor } from 'react-router-hash-link';



export default function Navbar() {
    
    
    const [verHabitacionesSubNav, setVerHabitacionesSubNav] = useState(false);
    const [verRestauranteSubNav, setVerRestauranteSubNav] = useState(false);
    const [verSpaSubNav, setVerSpaSubNav] = useState(false);
    const [verDropdown, setVerDropdown] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/" || location.pathname === "/nosotros") {
            setVerHabitacionesSubNav(false);
            setVerRestauranteSubNav(false);
            setVerSpaSubNav(false);
            setVerDropdown(false);
        }
    }, [location]);
    

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
                    <Link to="/"><img className={style.logo} src="/src/Assets/svg/logoBlack.svg" alt="logo"/></Link>
                    <ul className={style.navTopContainer}>
                    <li><Link className={style.navLinks} to="/">HOME</Link></li>
                    <li><Link className={style.navLinks} to="/nosotros">NOSOTROS</Link></li>
                    <li>
                        <Link onClick={handleHabitacionesClick} className={style.navLinks} to="/habitaciones">HABITACIONES</Link>
                    </li>
                    {verHabitacionesSubNav && ( 
                        <nav className={classes.subNavContenedor}>
                                <ul className={classes.listContainer}>
                                    <li><Link className={style.navLinks} to="#todas">TODAS</Link></li>
                                    <span className={classes.divisor}></span>
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
                                    <li><Anchor className={style.navLinks} smooth={true} to="#menu">MENÚ</Anchor></li>
                                    <span className={classes.divisor}></span>
                                    <li className={style.navLinks}>
                                    <div className={classes.contenedor} onClick={handleDropdownClick}>
                                        <span className={classes.dropdownTitle}>RESTAURANTES</span> 
                                        <svg className={classes.chevron} xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 16 8" fill="none">
                                            <path d="M1.89661 0.0177656L7.59471 4.95853L13.359 0.0598974L15.1133 1.58096L7.57812 7.99845L0.113354 1.52583L1.89661 0.0177656Z" fill="#213242"/>
                                        </svg>
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
                                <li><Anchor className={style.navLinks} smooth={true} to="#platosEstrella">PLATOS ESTRELLAS</Anchor></li>
                                <span className={classes.divisor}></span>
                                <li><Anchor className={style.navLinks} smooth={true}  to="#horario">HORARIO</Anchor></li>
                                <span className={classes.divisor}></span>
                                <li><Anchor className={style.navLinks} smooth={true} to="#galeria">GALERÍA</Anchor></li>
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
                    <li><Anchor className={style.navLinks} smooth={true} to="#contacto">CONTACTO</Anchor></li>
                </ul>
        </nav>
        {(!verHabitacionesSubNav && !verRestauranteSubNav && !verSpaSubNav) && <Difuminado />}
        {verHabitacionesSubNav && <Difuminado top="190"/>}
        {verRestauranteSubNav && <Difuminado top="190" />}
        {verSpaSubNav && <Difuminado top="190"/>}
        </>
    )
}
