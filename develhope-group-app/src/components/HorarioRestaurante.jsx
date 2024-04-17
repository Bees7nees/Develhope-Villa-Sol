import React from 'react'
import classes from "/src/Styles/HorarioRestaurante.module.css"

export default function HorarioRestaurante() {






    return (
        <section className={classes.contenedor}>
            <h3>Horarios</h3>
            <div className={classes.contenedorGrande}>
            <div className={classes.descripcion1}>
                <span className={classes.texto}>DESAYUNO</span>
                <p className={classes.hora}>LUNES-VIERNES<br/>7:00HS - 11:00HS<br/>SÁBADO-DOMINGO<br/>7:30HS - 11:30HS</p>
            </div>

                <div className={classes.descripcion}>
                    <span className={classes.texto}>ALMUERZO</span>
                    <p className={classes.hora}>13:00HS - 16:00HS</p>
                </div>
                <div className={classes.descripcion}>
                    <span className={classes.texto}>BRUNCH/BUFFET</span>
                    <p className={classes.hora}>10:00HS - 14:00HS</p>
                </div>
                <div className={classes.descripcion}>
                    <span className={classes.texto}>MERIENDAS</span>
                    <p className={classes.hora}>10:00HS - 14:00HS</p>
                </div>
                <div className={classes.descripcion}>
                    <span className={classes.texto}>CENA</span>
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
