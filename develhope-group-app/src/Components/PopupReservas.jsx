import styles from "../Styles/PopupReservas.module.css";

export default function PopupReservas() {
    const fecha1 = new Date();  {/* recoge las fechas */}
    const fecha2 = new Date(fecha1);
    fecha2.setDate(fecha1.getDate() + 1);

    const adultos = 2;   {/* recoge los ocupantes */}
    const ninyos = 0;
    const ocupantes = adultos + ninyos;  
    return (
        <div className={styles.popupFondo}>
            <div className={styles.popupDiv}>
                <h3>Resumen de la reserva</h3>
                <div className={styles.popupFechasDiv}>
                    <label>
                        Fecha de entrada:
                        <input className="popupFechas" type="date" value={fecha1.toISOString().split("T")[0]} disabled />
                    </label>
                    <label>
                        Fecha de salida:
                        <input className="popupFechas" type="date" value={fecha2.toISOString().split("T")[0]} disabled />
                    </label>
                </div>
                <h5>Ocupantes: {ocupantes}</h5>
                <p><strong>Adultos: </strong>{adultos}</p>
                <p><strong>Niños (menores de 12 años): </strong>{ninyos}</p>
                <hr />
                <h5>
                  <label>
                      Número de habitaciones:
                      <input type="number" name="roomNumber" min="1" max="3" defaultValue="1" />
                  </label>
                </h5>
                <h5>Tipo de habitación:</h5> {/* los tipos de habitaciones para elegir */}
                <label>
                    <input type="radio" name="roomType" value="basic" />
                    Habitación Básica:
                    <p>
                      Descripción de la habitación e imágenes
                      <br />
                      Precio
                    </p>
                </label>
                <label>
                    <input type="radio" name="roomType" value="premium" />
                    Habitación Premium:
                    <p>
                      Descripción de la habitación e imágenes
                      <br />
                      Precio
                    </p>
                </label>
                <label>
                    <input type="radio" name="roomType" value="suite" />
                    Suite:
                    <p>
                      Descripción de la habitación e imágenes
                      <br />
                      Precio
                    </p>
                </label>
            </div>
        </div>
    )
}