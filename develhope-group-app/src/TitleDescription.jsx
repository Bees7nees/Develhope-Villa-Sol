import React from "react"
import classes from "./title-description.module.css"

export default function TitleDescription ({ title, description }) {
    return (
        <>
            <h1 className={classes.title}>{title}</h1>
            <p className={classes.description}>{description}</p>
        </>
    )
}