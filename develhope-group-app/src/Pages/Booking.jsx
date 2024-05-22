import BookingRoomSection from "../Components/BookingRoomSection";
import Button from "../Components/Buttons";
import styles from "/src/Styles/BookingPage.module.css";
import BookingMenu from "../Components/BookingMenu"
import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { GlobalContext } from "../Components/GlobalVariable";


export default function Booking() {


    const [checked, setChecked] = useState(null)
    const handleClick=(id)=>{
        if (id === checked){
            setChecked(null)
        }
        else{
            setChecked(id)
        }
    }
    const { numAdult, firstDate, lastDate, nights, finalPrice } = useContext(GlobalContext);

    const isDisabled = !numAdult || !firstDate || !lastDate || !nights || !finalPrice;
    // Formatea las fechas como cadenas antes de pasarlas al JSX
   // const formattedFirstDate = firstDate instanceof Date ? firstDate.toLocaleDateString() : firstDate;
    //const formattedLastDate = lastDate instanceof Date ? lastDate.toLocaleDateString() : lastDate;


    const handleClickPago = (e) => {
        if (isDisabled) {
          e.preventDefault();
        }
      };
    
    return(<div>
        <BookingMenu />
        <h2 className={styles.title}>Resumen de la reserva </h2>
      
        <div className={styles.RoomBookingDiv}>
            <h2 className={styles.subtitle}>Tipo de habitación</h2>
            <BookingRoomSection typeRoom="ESTÁNDAR" background={checked === 1 ? '#E3D9BB' : '#FFFFFF'} onClick={() => handleClick(1)}/>

            <BookingRoomSection typeRoom="PREMIUN" background={checked === 2 ? '#E3D9BB' : '#FFFFFF'} onClick={() => handleClick(2)}/>
            <BookingRoomSection typeRoom="SUITE" background={checked === 3 ? '#E3D9BB' : '#FFFFFF'} onClick={() => handleClick(3)}/>
        </div>
        <Link
      className={`${styles.buttonBooking} ${isDisabled ? styles.disabled : ''}`}
      to="/Pago"
      onClick={handleClickPago}
    >
      <Button label="REALIZAR EL PAGO" type="yellow" />
    </Link>
        </div>)
}