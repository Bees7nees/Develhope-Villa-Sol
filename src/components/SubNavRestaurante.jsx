import React from 'react';
import { Link } from 'react-router-dom';
import Difuminado from './Difuminado';
import classes from "/src/style/SubNav.module.css"
import style from "/src/style/Navbar.module.css"

export default function SubNavRestaurante() {


    return (
        <>
        <nav className={classes.subNavContenedor}>
        <span className={classes.divisorHorizontal}></span>
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
        <Difuminado/>
        </>
    );
}

