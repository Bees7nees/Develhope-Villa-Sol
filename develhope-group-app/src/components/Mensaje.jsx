import classes from "/src/Styles/Mensaje.module.css"
import {Context} from "/src/Components/Language"
import { FormattedMessage } from 'react-intl';
import { useContext } from "react";

export default function Mensaje() {

  const context = useContext(Context);

    return (
      <article className={classes.contenedor}>
        <div className={classes.contenedorTexto}>
          <span className={classes.comillas}>"</span>
          <p className={classes.mensaje}>
            <FormattedMessage id="ambiente"/>
          </p>
          <p className={classes.mensaje}>MARÍA FERNANDA GÓMEZ</p>
          <br/><br/>
          <p className={classes.cargo}>
            <FormattedMessage id="director"/>
          </p>
          <span className={classes.comillas}>"</span>
        </div>
      </article>
    )
}
