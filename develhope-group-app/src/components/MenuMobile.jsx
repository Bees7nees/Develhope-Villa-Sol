import React from 'react'
import { Link } from 'react-router-dom'
import classes from "/src/Style/MenuMobile.module.css"

export default function MenuMobile() {


    return (
        <section className={classes.contenedor}>
        <h3>MENÚS</h3>
        <div className={classes.contenedorGrande}>
            <div className={classes.descripcion}>
                <p className={classes.texto}>DESAYUNO<br/><span>LUNES-VIERNES 7:00HS - 11:00HS & SÁBADO-DOMINGO 7:30HS - 11:30HS</span></p>
                <Link to="/restauranteSunset/menu">
                    <img src="/src/Assets/svg/arrow.svg" />
                </Link>
            </div>
            <div className={classes.descripcion}>
                <p className={classes.texto}>ALMUERZO<br/><span>13:00HS - 16:00HS</span></p>
                <Link to="/restauranteSunset/menu">
                    <img src="/src/Assets/svg/arrow.svg"/>
                </Link>            
            </div>
            <div className={classes.descripcion}>
                <p className={classes.texto}>BRUNCH/BUFFET<br/><span>10:00HS - 14:00HS</span></p>
                <Link to="/restauranteSunset/menu">
                    <img src="/src/Assets/svg/arrow.svg"/>
                </Link>            
            </div>
            <div className={classes.descripcion}>
                <p className={classes.texto}>MERIENDAS<br/><span>10:00HS - 14:00HS</span></p>
                <Link to="/restauranteSunset/menu">
                    <img src="/src/Assets/svg/arrow.svg"/>
                </Link>            
            </div>
            <div className={classes.descripcion}>
                <p className={classes.texto}>CENA<br/><span>17:00HS - 23:00HS</span></p>
                <Link to="/restauranteSunset/menu">
                    <img src="/src/Assets/svg/arrow.svg"/>
                </Link>            </div>
            <div className={classes.descripcion}>
                <p className={classes.texto}>COCKTAILS<br/><span>17:00HS - 23:00HS</span></p>
                <Link to="/restauranteSunset/menu">
                    <img src="/src/Assets/svg/arrow.svg"/>
                </Link>            
            </div>
        </div>
    </section>
    )
}
