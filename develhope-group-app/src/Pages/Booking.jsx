import BookingRoomSection from "../Components/BookingRoomSection";
import Button from "../Components/Buttons";
import styles from "/src/Styles/BookingPage.module.css";
import { useState } from "react";

export default function Booking() {
  const [checked, setChecked] = useState(null);
  const handleClick = (id) => {
    if (id === checked) {
      setChecked(null);
    } else {
      setChecked(id);
    }
  };
  return (
    <div>
      <h2 className={styles.title}>Resumen de la reserva</h2>
      <div className={styles.RoomBookingDiv}>
        <h2 className={styles.subtitle}>Tipo de habitación</h2>
        <BookingRoomSection
          typeRoom="ESTÁNDAR"
          background={checked === 1 ? "#E3D9BB" : "#FFFFFF"}
          onClick={() => handleClick(1)}
        />

        <BookingRoomSection
          typeRoom="PREMIUN"
          background={checked === 2 ? "#E3D9BB" : "#FFFFFF"}
          onClick={() => handleClick(2)}
        />
        <BookingRoomSection
          typeRoom="SUITE"
          background={checked === 3 ? "#E3D9BB" : "#FFFFFF"}
          onClick={() => handleClick(3)}
        />
      </div>
      <div className={styles.buttonBooking}>
        <Button label="REALIZAR EL PAGO" type="yellow" />
      </div>
    </div>
  );
}
