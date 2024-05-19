import { Link, useLocation } from "react-router-dom"
import Difuminado from "/src/Components/Difuminado"
import style from "/src/Styles/Navbar.module.css"
import classes from "/src/Styles/SubNav.module.css"
import { useContext, useEffect, useState } from "react";
import { HashLink as Anchor } from 'react-router-hash-link';
import BotonLogin from "./BotonLogin";
import {Context} from "/src/Components/Language"
import { FormattedMessage } from 'react-intl';


export default function Navbar() {

    const context = useContext(Context);
    
    const [verRestauranteSubNav, setVerRestauranteSubNav] = useState(false);
    const [verSpaSubNav, setVerSpaSubNav] = useState(false);
    const [verDropdown, setVerDropdown] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/" || location.pathname === "/nosotros" || location.pathname === "/habitaciones" || location.pathname === "/galeria") {
            setVerRestauranteSubNav(false);
            setVerSpaSubNav(false);
            setVerDropdown(false);
        }
    }, [location]);
    

    const handleRestauranteClick = () => {
        setVerRestauranteSubNav(!verRestauranteSubNav);
        setVerSpaSubNav(false);
    };

    const handleSpaClick = () => {
        setVerSpaSubNav(!verSpaSubNav);
        setVerRestauranteSubNav(false); 
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
                    <li><Link className={style.navLinks} to="/nosotros">
                            <FormattedMessage id="nosotros"/>
                        </Link>
                    </li>
                    <li><Link className={style.navLinks} to="/habitaciones">
                            <FormattedMessage id="habitaciones"/>
                        </Link>
                    </li>

                    <li>
                        <Link onClick={handleRestauranteClick} className={style.navLinks} to="/restauranteSunset">
                            <FormattedMessage id="restaurantes"/>
                        </Link>
                    </li>
                    {verRestauranteSubNav && (
                        <nav className={classes.subNavContenedor}>
                                <ul className={classes.listContainer}>
                                    <li><Anchor className={style.navLinks} smooth={true} to="#menu">
                                            <FormattedMessage id="menu"/>
                                        </Anchor>
                                    </li>
                                    <span className={classes.divisor}></span>
                                    <li className={style.navLinks}>
                                    <div className={classes.contenedor} onClick={handleDropdownClick}>
                                        <span className={classes.dropdownTitle}>
                                            <FormattedMessage id="restaurantes"/>
                                        </span> 
                                        <svg className={classes.chevron} xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 16 8" fill="none">
                                            <path d="M1.89661 0.0177656L7.59471 4.95853L13.359 0.0598974L15.1133 1.58096L7.57812 7.99845L0.113354 1.52583L1.89661 0.0177656Z" fill="#213242"/>
                                        </svg>
                                    </div>
                                {verDropdown && (
                                <div className={classes.dropdown}>
                                        <Link className={classes.sublink} to="/restauranteSunset">Sunset
                                            <span className={classes.subtext}>
                                                <FormattedMessage id="sunsetres"/>
                                            </span>
                                        </Link>
                                        <Link className={classes.sublink} to="/restauranteBuffet">Buffet
                                            <span className={classes.subtext}>
                                                <FormattedMessage id="continental"/>
                                            </span>
                                        </Link>
                                        <Link className={classes.sublink} to="/restauranteSunrise">Sunrise
                                            <span className={classes.subtext}>
                                                <FormattedMessage id="italiana"/>
                                            </span>
                                        </Link>
                                </div>
                                )}
                                </li>
                                <span className={classes.divisor}></span>
                                <li><Anchor className={style.navLinks} smooth={true} to="#platosEstrella">
                                        <FormattedMessage id="estrella"/>
                                    </Anchor>
                                </li>
                                <span className={classes.divisor}></span>
                                <li><Anchor className={style.navLinks} smooth={true}  to="#horario">
                                        <FormattedMessage id="horario"/>
                                    </Anchor>
                                </li>
                                <span className={classes.divisor}></span>
                                <li><Anchor className={style.navLinks} smooth={true} to="#galeria">
                                        <FormattedMessage id="galeria"/>
                                    </Anchor>
                                </li>
                            </ul>
                        </nav>
                    )}

                    <li>
                        <Link onClick={handleSpaClick} className={style.navLinks} to="/spa">
                            <FormattedMessage id="spa"/>
                        </Link>
                    </li>
                    {verSpaSubNav && ( 
                        <nav className={classes.subNavContenedor}>
                            <ul className={classes.listContainer}>
                                <li><Link className={style.navLinks} to="#tratamientos">
                                        <FormattedMessage id="tratamientos"/>
                                    </Link>
                                </li>
                                <span className={classes.divisor}></span>
                                <li className={style.navLinks} to="#horarios">
                                    <FormattedMessage id="horario"/>
                                </li>
                                <span className={classes.divisor}></span>
                                <li><Link className={style.navLinks} to="#barraReservas">
                                        <FormattedMessage id="reservar"/>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    )} 
                    <li><Link className={style.navLinks} to="/galeria">
                        <FormattedMessage id="galeria"/>
                    </Link></li>
                    <li><Anchor className={style.navLinks} smooth={true} to="#contacto">
                        <FormattedMessage id="contacto"/>
                    </Anchor></li>
                    
            <BotonLogin/> 
            <div>
                <button value="en" onClick={context.selectLang} className={style.langButton}>ES</button>
                <button value="en-US" onClick={context.selectLang} className={style.langButton}>EN</button>
            </div>
        </ul>
        </nav>
        {(!verRestauranteSubNav && !verSpaSubNav) && <Difuminado />}
        <Difuminado top={verRestauranteSubNav || verSpaSubNav ? "190" : "95"} />       
        </>
    )
}
