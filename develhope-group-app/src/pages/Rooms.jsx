import Room from "../Components/Room";
import styles from "../Styles/Rooms.module.css";
import { useState } from "react";
import classes from "/src/Styles/SubNav.module.css"
import Difuminado from "/src/Components/Difuminado"


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
    <nav className={styles.subNavContenedor}>
      <ul className={styles.listContainer}>
        <li
          id="todas"
          className={seccion === "todas" ? `${styles.selected} ${styles.navlinks}` : styles.navlinks}
          onClick={handlespan}
        >
          {" "}
          TODAS{" "}
        </li>
        <span className={classes.divisor}></span>
        <li
          id="estandar"
          className={seccion === "estandar" ? `${styles.selected} ${styles.navlinks}` : styles.navlinks}
          onClick={handlespan}
        >
          ESTÁNDAR{" "}
        </li>
        <span className={classes.divisor}></span>
        <li
          id="premiun"
          className={seccion === "premiun" ? `${styles.selected} ${styles.navlinks}` : styles.navlinks}
          onClick={handlespan}
        >
          PREMIUN
        </li>
        <span className={classes.divisor}></span>
        <li
          id="imperial"
          className={seccion === "imperial" ? `${styles.selected} ${styles.navlinks}` : styles.navlinks}
          onClick={handlespan}
        >
          {" "}
          IMPERIAL
        </li>
      </ul>
      </nav>
      <Difuminado top={190}/>
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
