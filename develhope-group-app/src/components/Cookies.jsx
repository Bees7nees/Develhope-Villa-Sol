import styles from "../Styles/Cookies.module.css";
import React, { useState, useEffect } from "react";
import {Context} from "/src/Components/Language"
import { FormattedMessage } from 'react-intl';
import { useContext } from "react";


export default function CookiesBanner() {

  const context = useContext(Context);
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
            <FormattedMessage id="cookie"/>
            <a href="#"> <FormattedMessage id="privacidad"/>
            </a>  <FormattedMessage id="cookies"/>
            <span>
              <FormattedMessage id="cookiesjoi"/>
            </span>
          </p>
          <div>
            <button onClick={handleDivClick} className={styles.accept}>
              <FormattedMessage id="aceptar"/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
