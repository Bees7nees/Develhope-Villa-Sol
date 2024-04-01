import React from 'react'
import classes from "./imagen.module.css"

export default function Imagen({fotomain, fotoplato}) {
    return (
    <>
    <img className={classes.fotomain} src={fotomain} />
    <div>
        <img className={classes.fotoplato} src={fotoplato} />
    </div>    
    </>
    )
}