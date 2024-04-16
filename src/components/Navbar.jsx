import { Link } from "react-router-dom"
import Difuminado from "/src/Components/Difuminado"
import style from "/src/Style/Navbar.module.css"
import classes from "/src/Style/SubNav.module.css"
import { useState, useEffect } from "react";


export default function Navbar() {
    
    
    const [verHabitacionesSubNav, setVerHabitacionesSubNav] = useState(false);
    const [verRestauranteSubNav, setVerRestauranteSubNav] = useState(false);
    const [verSpaSubNav, setVerSpaSubNav] = useState(false);
    const [verDropdown, setVerDropdown] = useState(false);


    const handleHabitacionesClick = () => {
        setVerHabitacionesSubNav(!verHabitacionesSubNav);
        setVerRestauranteSubNav(false); // Asegurar que otros submenús estén cerrados
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
    };

    
    useEffect(() => {
        const closeDropdown = (event) => {
            if (!event.target.closest(`.${classes.dropdown}`)) {
                setVerDropdown(false);
            }
        };  
    
        document.addEventListener("click", closeDropdown);
    
        return () => {
            document.removeEventListener("click", closeDropdown);
        };
    }, []);
    
    
    
    
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
                                    <li><Link className={style.navLinks} to="/habitaciones#estandar">ESTÁNDAR</Link></li>
                                    <span className={classes.divisor}></span>
                                    <li className={style.navLinks} to="/habitaciones#premium">PREMIUM</li>
                                    <span className={classes.divisor}></span>
                                    <li><Link className={style.navLinks} to="//habitaciones#suite">SUITE</Link></li>
                                </ul>
                        </nav>
                        )}
                    
                    <li>
                        <Link onClick={handleRestauranteClick} className={style.navLinks} to="/restauranteSunset">RESTAURANTES</Link>
                    </li>
                    {verRestauranteSubNav && (
                        <nav className={classes.subNavContenedor}>
                                <ul className={classes.listContainer}>
                                    <li><Link className={style.navLinks} to="/restaurante#menu">MENÚ</Link></li>
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
                                <li><Link className={style.navLinks} to="/restaurante#platosEstrella">PLATOS ESTRELLAS</Link></li>
                                <span className={classes.divisor}></span>
                                <li><Link className={style.navLinks} to="/restaurante#horario">HORARIO</Link></li>
                                <span className={classes.divisor}></span>
                                <li><Link className={style.navLinks} to="/restaurante#galeria">GALERÍA</Link></li>
                            </ul>
                        </nav>
                    )}

                    <li>
                        <Link onClick={handleSpaClick} className={style.navLinks} to="/spa">SPA</Link>
                    </li>
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
        <Difuminado />
        {verHabitacionesSubNav && <Difuminado/>}
        {verRestauranteSubNav && <Difuminado />}
        {verSpaSubNav && <Difuminado />}
        </>
    )
}
