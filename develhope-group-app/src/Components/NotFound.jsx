import React from 'react';
import { Link } from 'react-router-dom';
import classes from "/src/Styles/NotFound.module.css"



export default function NotFound(){



    return (
        <div className={classes.contenedorFound}>
        <img src="/src/Assets/Img/pagina404.png" className={classes.gatito}/>
        <h2 className={classes.titulo}>Lo sentimos, la página que buscas no existe.</h2>
        <h3 className={classes.subtitulo}>Vuelve al Home, tenemos muchas ofertas que no te puedes perder.</h3>
        <Link to="/" className={classes.link}>volver a Home</Link>
        </div>
    );
    }

