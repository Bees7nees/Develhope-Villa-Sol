import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from "/src/Styles/NotFound.module.css"
import { FormattedMessage } from 'react-intl';



export default function NotFound(){


    return (
        <div className={classes.contenedorFound}>
        <img src="/src/Assets/Img/pagina404.png" className={classes.gatito}/>
        <h2 className={classes.titulo}>
            <FormattedMessage id="not_found"/>
        </h2>
        <h3 className={classes.subtitulo}>
            <FormattedMessage id="back_home"/>
        </h3>
        <Link to="/" className={classes.link}>
            <FormattedMessage id="go_home"/>
        </Link>
        </div>
    );
    }

