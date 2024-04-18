import React from 'react'
import classes from "/src/Styles/banner.module.css"

export default function Banner({fotomain}) {
    return (
    <>
    <img className={classes.fotomain} src={fotomain} />
    </>
    )
}