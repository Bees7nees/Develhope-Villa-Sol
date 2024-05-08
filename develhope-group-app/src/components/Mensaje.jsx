import classes from "/src/Styles/Mensaje.module.css"

export default function Mensaje() {


    return (
      <article className={classes.contenedor}>
        <div className={classes.contenedorTexto}>
          <span className={classes.comillas}>"</span>
          <p className={classes.mensaje}>El ambiente en Sunset es animado, tranquilo y acogedor, 
            muy parecido al de los propios Andaluces.</p>
          <p className={classes.mensaje}>MARÍA FERNANDA GÓMEZ</p>
          <br/><br/>
          <p className={classes.cargo}>DIRECTORA GENERAL DEL RESTAURANTE</p>
          <span className={classes.comillas}>"</span>
        </div>
      </article>
    )
}
