import React from "react"
import classes from "./title-description.module.css"


export default function TitleDescription ({ title, description, styleTitle, styleDescription }) {
    return (
        <>
            <h1 className={classes[styleTitle]}>{title}</h1>
            <p className={classes[styleDescription]}>{description}</p>
        </>
    )
}