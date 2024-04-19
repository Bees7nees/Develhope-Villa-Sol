import classes from "/src/Styles/Difuminado.module.css"

export default function Difuminado({top}) {


    return (
        <span className={classes.difuminado} style={{top: top + "%"}}></span>
    )
}
