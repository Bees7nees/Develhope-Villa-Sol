import classes from "./buttons.module.css"

export default function Button (label, onClick) {
    return (
    <>
    <button className={classes.buttonY} onClick={onClick}>Botón Y</button>
    <button className={classes.buttonB} onClick={onClick}>Botón B</button>
    </>
    )
}