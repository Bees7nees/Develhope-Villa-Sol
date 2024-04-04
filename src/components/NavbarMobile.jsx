import React, { useEffect, useState } from 'react'
import classes from "/src/style/NavBarMobile.module.css"
import { Link } from 'react-router-dom'




export default function NavbarMobile() {

    const [visible, setVisible] = useState(true);
    // const [isMobile, setIsMobile] = useState(false);

    // useEffect(() => {
    //     function handleResize() {
    //     setIsMobile(window.innerWidth < 768);
    //     }

    //     handleResize(); // Al montar el componente, verifica el tamaño de la ventana
    //     window.addEventListener('resize', handleResize); // Agrega el listener para cambios en el tamaño de la ventana

    //     return () => {
    //     window.removeEventListener('resize', handleResize); // Limpia el listener al desmontar el componente
    //     };
    // }, []);

    function handleCloseButton(){
        setVisible(false)
    }





        return (
            // isMobile &&  (
                visible &&
            <nav className={classes.navbar}>
                <button className={classes.closeButton} onClick={handleCloseButton}>
                    <img src="/assets/closeButton.svg" className={classes.svg}/>
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
            )
        // )
}
