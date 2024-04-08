import React, { useState } from 'react';
import classes from "/src/style/NavBarMobile.module.css";
import { Link } from 'react-router-dom';

export default function NavbarMobile() {
    const [visible, setVisible] = useState(false);

    function handleDropdownButton() {
        setVisible(!visible);
    }

    return (
        <>
            <nav className={classes.contenedorBurger}>
                <button className={classes.buttonBurger} onClick={handleDropdownButton}>
                    <img src="/assets/burgerMenu.svg" className={classes.burgerIcon} alt="Burger menu"/>
                </button>
            </nav>
            <nav className={`${classes.navbar} ${visible ? classes.visible : ''}`}>
                <button className={classes.closeButton} onClick={handleDropdownButton}>
                    <img src="/assets/closeButton.svg" className={classes.svg} alt="Close menu"/>
                </button>
                <ul className={classes.navTopContainer}>
                    <li><Link className={classes.navLinks} to="/">HOME</Link></li>
                    <li><Link className={classes.navLinks} to="/nosotros">NOSOTROS</Link></li>
                    <li><Link className={classes.navLinks} to="/habitaciones">HABITACIONES</Link></li>
                    <li><Link className={classes.navLinks} to="/restauranteSunset">RESTAURANTES</Link></li>
                    <li><Link className={classes.navLinks} to="/spa">SPA</Link></li>
                    <li><Link className={classes.navLinks} to="/galeria">GALERÍA</Link></li>
                    <li><Link className={classes.navLinks} to="/contacto">CONTACTO</Link></li>
                </ul>
            </nav>
        </>
    );
}
