import classes from "./buttons.module.css"

export default function Button ({label, onClick, type}) {
    return (
    <>
    {type=='yellow' && <button className={classes.buttonY} onClick={onClick}><strong>{label}</strong></button>}
    {type=='blue' && <button className={classes.buttonB} onClick={onClick}><strong>{label}</strong></button>}
    </>
    )
} 