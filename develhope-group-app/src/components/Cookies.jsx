import styles from "../Styles/Cookies.module.css";
import React, { useState, useEffect } from "react";

export default function CookiesBanner() {
  let [accept, setaccept] = useState(true);

  useEffect(() => {
    // Cuando el componente se monte, establecemos isMounted en true después de un breve período de tiempo
    const timeout = setTimeout(() => {
      setaccept(true);
      
    }, 1000); // Esperamos 1 segundo antes de mostrar la animación

    // Limpiamos el timeout al desmontar el componente
    return () => clearTimeout(timeout);
  }, []);
 
  const handleDivClick = () => {
    setaccept(false);
    localStorage.setItem("cookiesAccepted", "true");
  };
  return (
    <section className={`${accept ? styles.animatedDiv : styles.animatedout}`}>
      <div className={styles.cookiesContent}>
        <div className={styles.cerrarB}>
          <button onClick={handleDivClick} className={styles.close}>
            ✖
          </button>
        </div>

        <div className={styles.rowbbanner}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png"
            alt="cookies-img"
          />

          <p>
            Este sitio web utiliza cookies para mejorar tu experiencia de
            navegación. Al hacer clic en Aceptar, aceptas el uso de cookies de
            acuerdo con nuestra <a href="#">política de privacidad</a>. Para
            obtener más información o modificar tus preferencias de cookies,
            visita nuestra política de cookies.
            <span>¡Gracias por tu confianza y bienvenido a Villa del Sol!</span>
          </p>
          <div>
            <button onClick={handleDivClick} className={styles.accept}>
              ACEPTO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
