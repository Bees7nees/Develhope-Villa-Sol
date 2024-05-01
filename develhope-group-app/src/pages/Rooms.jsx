import Room from "../section/Room";
import styles from "../Styles/Rooms.module.css";
import { useState } from "react";
import BookingMenu from "../Components/BookingMenu";

export default function Rooms() {
  const [seccion, setseccion] = useState("todas");
  // const [selectedStyle, setSelectedStyle] = useState({
  //   todas: true,
  //   estandar: false,
  //   premiun: false,
  //   imperial: false,
  // });

  const handlespan = (e) => {
    const span = e.target.id;
    console.log(span);
    setseccion(span);
    // setSelectedStyle({
    //   todas: false,
    //   estandar: false,
    //   premiun: false,
    //   imperial: false,
    //   [span]: true,
    // });
  };

  return (
    <div className={styles.rooms}>
      <BookingMenu />
      <nav className={styles.navRoom}>
        <h3
          id="todas"
          className={seccion === "todas" ? styles.selected : ""}
          onClick={handlespan}
        >
          {" "}
          TODAS{" "}
        </h3>
        <h3
          id="estandar"
          className={seccion === "estandar" ? styles.selected : ""}
          onClick={handlespan}
        >
          ESTÁNDAR{" "}
        </h3>
        <h3
          id="premiun"
          className={seccion === "premiun" ? styles.selected : ""}
          onClick={handlespan}
        >
          PREMIUN
        </h3>
        <h3
          id="imperial"
          className={seccion === "imperial" ? styles.selected : ""}
          onClick={handlespan}
        >
          {" "}
          IMPERIAL
        </h3>
      </nav>
      <div className={styles.sections_room}>
        {seccion === "todas" && (
          <>
            <Room habitacion="ESTÁNDAR" url="src\assets\room_img\room1.png" />
            <Room habitacion="PREMIUN" url="src\assets\room_img\room1.png" />
            <Room habitacion="IMPERIAL" url="src\assets\room_img\room1.png" />
          </>
        )}

        {seccion === "imperial" && (
          <Room habitacion="IMPERIAL" url="src\assets\room_img\room1.png" />
        )}

        {seccion === "estandar" && (
          <Room habitacion="ESTÁNDAR" url="src\assets\room_img\room1.png" />
        )}

        {seccion === "premiun" && (
          <Room habitacion="PREMIUN" url="src\assets\room_img\room1.png" />
        )}
      </div>
    </div>
  );
}
