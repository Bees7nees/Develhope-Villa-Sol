import React from 'react';
import { Link } from 'react-router-dom';
import Difuminado from './Difuminado';
import classes from "/src/style/SubNav.module.css"
import style from "/src/style/Navbar.module.css"

export default function SubNavHabitaciones() {


    return (
        <>
        <nav className={classes.subNavContenedor}>
        <span className={classes.divisorHorizontal}></span>
                <ul className={classes.listContainer}>
                    <li><Link className={style.navLinks} to="/habitaciones#estandar">ESTÁNDAR</Link></li>
                    <span className={classes.divisor}></span>
                    <li className={style.navLinks} to="/habitaciones#premium">PREMIUM</li>
                    <span className={classes.divisor}></span>
                    <li><Link className={style.navLinks} to="//habitaciones#suite">SUITE</Link></li>
                </ul>
        </nav>
        <Difuminado/>
        </>
    );
}