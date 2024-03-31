import React from 'react';
import { Link } from 'react-router-dom';
import Difuminado from './Difuminado';
import classes from "/src/style/SubNav.module.css"
import style from "/src/style/Navbar.module.css"

export default function SubNavSpa() {


    return (
        <>
        <nav className={classes.subNavContenedor}>
        <span className={classes.divisorHorizontal}></span>
                <ul className={classes.listContainer}>
                    <li><Link className={style.navLinks} to="/spa#tratamientos">TRATAMIENTOS</Link></li>
                    <span className={classes.divisor}></span>
                    <li className={style.navLinks} to="/spa#horarios">HORARIOS</li>
                    <span className={classes.divisor}></span>
                    <li><Link className={style.navLinks} to="/spa#barraReservas">RESERVAR</Link></li>
                </ul>
        </nav>
        <Difuminado/>
        </>
    );
}