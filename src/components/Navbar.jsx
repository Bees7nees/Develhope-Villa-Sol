import { Link } from "react-router-dom"
import Difuminado from "./Difuminado"
import classes from "/src/style/Navbar.module.css"
import SubNavHabitaciones from "./SubNavHabitaciones"
import SubNavRestaurante from "./SubNavRestaurante"
import SubNavSpa from "./SubNavSpa"


export default function Navbar() {
    
        // Define una función para obtener el subnav correspondiente según el enlace seleccionado
        function getSubNav() {
            // Obtiene la ruta actual
            const currentPath = window.location.pathname;
            // Verifica el enlace actual y devuelve el subnav correspondiente
            switch (currentPath) {
                case '/restauranteSunset':
                    return <SubNavRestaurante />;
                case '/spa':
                    return <SubNavSpa />;
                case '/habitaciones':
                    return <SubNavHabitaciones />;
                default:
                    return null; 
            }
        }
    
    
    
    return (
        <>
            <nav className={classes.navbar}>
                <img className={classes.logo} src="/assets/logoBlack.svg" alt="logo"/>
                <ul className={classes.navTopContainer}>
                <li><Link className={classes.navLinks} to="/">HOME</Link></li>
                    <li><Link className={classes.navLinks} to="/nosotros">NOSOTROS</Link></li>
                    <li><Link className={classes.navLinks} to="/habitaciones">HABITACIONES</Link></li>
                    <li><Link className={classes.navLinks} to="/restauranteSunset">RESTAURANTE</Link></li>
                    <li><Link className={classes.navLinks} to="/spa">SPA</Link></li>
                    <li><Link className={classes.navLinks} to="/galeria">GALERÍA</Link></li>
                    <li><Link className={classes.navLinks} to="/contacto">CONTACTO</Link></li>
                </ul>
                <Link className={classes.boton}>DISPONIBILIDAD</Link>
        </nav>
        {getSubNav() ? null : <Difuminado/>}
        {getSubNav()}
        </>
    )
}
