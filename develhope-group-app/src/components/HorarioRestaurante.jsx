import React from 'react'
import classes from "/src/Styles/HorarioRestaurante.module.css"
import {Context} from "/src/Components/Language"
import { FormattedMessage } from 'react-intl';
import { useContext } from "react";

export default function HorarioRestaurante() {

    const context = useContext(Context);

    return (
        <section id="horario" className={classes.contenedor}>
            <h3 className={classes.horarios}>
                <FormattedMessage id="horario"/>
            </h3>
            <div className={classes.contenedorGrande}>
            <div className={classes.descripcion1}>
                <span className={classes.texto}>
                    <FormattedMessage id="desayuno"/>
                </span>
                <p className={classes.hora}>
                    <FormattedMessage id="lunes"/><br/>7:00HS - 11:00HS<br/>
                    <FormattedMessage id="sabado"/><br/>7:30HS - 11:30HS
                </p>
            </div>

                <div className={classes.descripcion}>
                    <span className={classes.texto}>
                        <FormattedMessage id="almuerzo"/>
                    </span>
                    <p className={classes.hora}>13:00HS - 16:00HS</p>
                </div>
                <div className={classes.descripcion}>
                    <span className={classes.texto}>BRUNCH/BUFFET</span>
                    <p className={classes.hora}>10:00HS - 14:00HS</p>
                </div>
                <div className={classes.descripcion}>
                    <span className={classes.texto}>
                        <FormattedMessage id="merienda"/>
                    </span>
                    <p className={classes.hora}>10:00HS - 14:00HS</p>
                </div>
                <div className={classes.descripcion}>
                    <span className={classes.texto}>
                        <FormattedMessage id="cena"/>
                    </span>
                    <p className={classes.hora}>17:00HS - 23:00HS</p>
                </div>
                <div className={classes.descripcion}>
                    <span className={classes.texto}>COCKTAILS</span>
                    <p className={classes.hora}>17:00HS - 23:00HS</p>
                </div>
            </div>
        </section>
    )
}
