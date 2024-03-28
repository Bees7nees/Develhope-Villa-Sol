import { Link } from "react-router-dom"
// import Difuminado from "./Difuminado"
import classes from "/src/style/Navbar.module.css"
// import SubNav from "./SubNav"

export default function Navbar() {
    
    
    
    
    return (
        <>
        <nav className={classes.navbar}>
                <img className={classes.logo} src="/assets/logo.png" alt="logo"/>
                <ul className={classes.navTopContainer}>
                    <li><Link className={classes.navLinks} to="">HOME</Link></li>
                    <li><Link className={classes.navLinks} to="">NOSOTROS</Link></li>
                    <li><Link className={classes.navLinks} to="">RESTAURANTE</Link></li>
                    <li><Link className={classes.navLinks} to="">SPA</Link></li>
                    <li><Link className={classes.navLinks} to="">GALERÍA</Link></li>
                    <li><Link className={classes.navLinks} to="">CONTACTO</Link></li>
                </ul>
                <img src="/assets/shoppingbag.svg" className={classes.bag}/>
                <Link className={classes.boton}>DISPONIBILIDAD</Link>
            {/* <Difuminado/> */}
        </nav>
        {/* <SubNav paginaActual="home"/> */}
        </>
    )
}
