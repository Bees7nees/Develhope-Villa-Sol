import MenuRestaurante from "./MenuRestaurante"
import classes from "/src/Styles/TipoMenu.module.css"


export default function TipoMenu() {


    return (
        <section className={classes.contenedor}>
            <MenuRestaurante/>
        </section>
    )
}
