import styles from "../Styles/PopupReservas.module.css";
import { useState } from "react";

export default function PopupReservas() {
    const fecha1 = new Date(); /* recoge las fechas */
    const fecha2 = new Date(fecha1);
    fecha2.setDate(fecha1.getDate() + 1);
    const noches = (fecha2 - fecha1) / 86400000; /*Calculo de noches*/
  
    const adultos = 2; /* recoge los ocupantes */
    const ninyos = 0;
    const ocupantes = adultos + ninyos;
  
    //Control de checkbox de Spa
    const [spaService, setSpaService] = useState(false);
    const handleOnChangeSpaCheck = () => setSpaService(!spaService);
  
    return (
      <div className={styles.popupFondo}>
        <div className={styles.popupDiv}>
          <h3>Resumen de la reserva</h3>
          <div className={styles.popupFechasDiv}>
            <label>
              Fecha de entrada:
              <input
                className={styles.popupFechas}
                type='date'
                value={fecha1.toISOString().split('T')[0]}
                disabled
              />
            </label>
            <label>
              Fecha de salida:
              <input
                className={styles.popupFechas}
                type='date'
                value={fecha2.toISOString().split('T')[0]}
                disabled
              />
            </label>
            <label>
              Noches:
              <input
                className={styles.popupFechas}
                type='number'
                name='roomNumber'
                value={noches}
                disabled
              />
            </label>
          </div>
          <h5>Huéspedes: {ocupantes}</h5>
          <p>
            <strong>Adultos: </strong>{adultos}
            <strong> Niños (menores de 12 años): </strong>
            {ninyos}
          </p>
          <hr />
          <h3>Habitaciones y Servicios</h3>
          <h5>
            <label>
              Número de habitaciones:
              <input
                type='number'
                name='roomNumber'
                min='1'
                max='3'
                defaultValue='1'
              />
            </label>
          </h5>
          <h5>Tipo de habitación:</h5>
          {/* los tipos de habitaciones para elegir, con unas descripción e imágenes además del precio y la disponibilidad */}
          <label>
            <input type='radio' name='roomType' value='standard' />
            <strong> Habitación Estándar: </strong>
            <p>
              Descripción de la habitación e imágenes
              <br />
              Precio: {'300€'} Disponibles: {3}
            </p>
          </label>
          <label>
            <input type='radio' name='roomType' value='premium' />
            <strong> Habitación Premium: </strong>
            <p>
              Descripción de la habitación e imágenes
              <br />
              Precio: {'300€'} Disponibles: {3}
            </p>
          </label>
          <label>
            <input type='radio' name='roomType' value='suite' />
            <strong> Suite: </strong>
            <p>
              Descripción de la habitación e imágenes
              <br />
              Precio: {'300€'} Disponibles: {3}
            </p>
          </label>
          <label>
              <input type="checkbox" checked={spaService} onChange={handleOnChangeSpaCheck} />
              Spa & Wellness Center
          </label>
          <div className={styles.popupBoton}>
            <button
              className={styles.popupBotonReservar}
              onClick={() => alert('Reserva realizada con éxito!')}
            >
              Confirmar reserva
            </button>
          </div>
        </div>
      </div>
        )
}