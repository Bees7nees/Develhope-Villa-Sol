import { useLocation } from "react-router-dom";
import classes from "/src/Styles/banner.module.css";
import { useEffect, useState } from "react";

export default function Banner() {
  const location = useLocation();
  const [imagen, setImagen] = useState("");

  const setImagenes = () => {
    switch (location.pathname) {
      case "/":
        setImagen("src/Assets/Img/villasol.png");
        break;
      case "/nosotros":
        setImagen("src/Assets/Img/lobby.jpg");
        break;
      case "/habitaciones":
        setImagen("src/Assets/Img/habitaciones.jpeg");
        break;
      case "/restauranteSunset":
        setImagen("src/Assets/Img/sunset.png");
        break;
      case "/spa":
        setImagen("src/Assets/Img/spa.png");
        break;
      default:
        setImagen("");
        break;
    }
  };

  useEffect(() => {
    setImagenes();
  }, [location.pathname]);

  return <>{imagen && <img className={classes.fotomain} src={imagen} />}</>;
}
