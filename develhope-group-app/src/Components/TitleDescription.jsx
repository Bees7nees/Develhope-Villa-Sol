<<<<<<< HEAD
import classes from "/src/Styles/title-description.module.css"


export default function TitleDescription ({ title, description}) {
    return (
        <div className={classes.contenedor}>
            <h1 className={classes.title}>{title}</h1>
            <p className={classes.description}>{description}</p>
        </div>
=======
import React from "react"
import classes from "/src/Styles/title-description.module.css"


export default function TitleDescription ({ title, description, styleTitle, styleDescription }) {
    return (
        <>
            <h1 className={classes[styleTitle]}>{title}</h1>
            <p className={classes[styleDescription]}>{description}</p>
        </>
>>>>>>> TermsConditions-&-SPA
    )
}