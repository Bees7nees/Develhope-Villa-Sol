import { Link } from "react-router-dom"
import Difuminado from "./Difuminado"
import classes from "/src/style/Navbar.module.css"

export default function Navbar() {
    
    
    
    
    return (
        <nav className={classes.navbar}>
            <div className={classes.navTopContainer}>
                <img className={classes.logo} src="/src/assets/logo.png" alt="logo"></img>
                <ul>
                    <li><Link className={classes.navLinks} to="">HOME</Link></li>
                    <li><Link className={classes.navLinks} to="">NOSOTROS</Link></li>
                    <li><Link className={classes.navLinks} to="">RESTAURANTE</Link></li>
                    <li><Link className={classes.navLinks} to="">SPA</Link></li>
                    <li><Link className={classes.navLinks} to="">GALERÍA</Link></li>
                    <li><Link className={classes.navLinks} to="">CONTACTO</Link></li>
                </ul>
                <img src="/src/assests/shoppingbag.svg"></img>
                <Link>DISPONIBILIDAD</Link>
            </div>
            <Difuminado/>
        </nav>
    )
}
