import MenuRestaurante from "./MenuRestaurante"
import classes from "/src/Styles/TipoMenu.module.css"


export default function TipoMenu() {


    return (
        <section id="menu" className={classes.contenedor}>
            <MenuRestaurante/>
        </section>
    )
}
