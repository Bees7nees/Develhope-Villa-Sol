import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Styles/Pago.module.scss";
import { GlobalContext } from "../Components/GlobalVariable";
import { UserMyContext } from "/src/globalvariable/usuarioglobal.jsx";
//import emailjs from "@emailjs/browser";
export default function Pago() {
  const { globaluser, setGlobaluser } = useContext(UserMyContext);
  const navigate = useNavigate();
  const {
    textCoupon,
    numAdult,
    numKids,
    firstDate,
    lastDate,
    nights,
    finalPrice,
    couponOK,
    setPurchaseDone,
  } = useContext(GlobalContext);

  const formattedFirstDate =
    firstDate instanceof Date ? firstDate.toLocaleDateString() : firstDate;
  const formattedLastDate =
    lastDate instanceof Date ? lastDate.toLocaleDateString() : lastDate;

  const initialFormData = {
    nombre: "",
    apellidos: "",
    numeroCuenta: "",
    email: "",
    mes: "",
    año: "",
    cvc: "",
  };
/*  emailjs
      .sendForm(
        "service_i5nnbia",
        "template_6ubte7n",
        formRef.current,
        "z1Wn810fAxFwZ6Wmz"
      )
      .then(
        () => {
          console.log("SUCCESS");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

  };*/
  const [formData, setFormData] = useState(initialFormData);
  const [formSubmitted, setFormSubmitted] = useState(false); // Nuevo estado

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormValid = () => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };

  const handleSubmitPago = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      setFormSubmitted(true); 
      setFormData(initialFormData); 
      setPurchaseDone(true);
    }
  };

  useEffect(() => {
    if (formSubmitted) {
      alert("Pago realizado correctamente");
      navigate("/");
      setFormSubmitted(false);
    }
  }, [formSubmitted, navigate]);

  return (
    <div className={styles.backgroundPago}>
      <div className={styles.generalDivPago}>
        <h2 className={styles.titlePago}>Detalles del pago</h2>
        <div className={styles.generalInfoPago}>
          <div className={styles.formPayment}>
            <form className={styles.formPayment2} onSubmit={handleSubmitPago}>
              <div className={styles.setPago}>
                <p className={styles.subtitlePagos}>NOMBRE</p>
                <div className={styles.inputName}>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    className={styles.placeholderPago}
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.setPago}>
                <p className={styles.subtitlePagos}>APELLIDOS</p>
                <div className={styles.inputName}>
                  <input
                    type="text"
                    name="apellidos"
                    placeholder="Apellidos"
                    className={styles.placeholderPago}
                    value={formData.apellidos}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.setPago}>
                <p className={styles.subtitlePagos}>NÚMERO DE CUENTA</p>
                <div className={`${styles.inputName} ${styles.nDeCuenta}`}>
                  <input
                    type="number"
                    name="numeroCuenta"
                    placeholder="Numero de cuenta"
                    className={styles.placeholderPago}
                    value={formData.numeroCuenta}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.setPago}>
                <p className={styles.subtitlePagos}>EMAIL</p>
                <div className={`${styles.inputName} ${styles.nDeCuenta}`}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={styles.placeholderPago}
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.setPago}>
                <p className={styles.subtitlePagos}>MES</p>
                <div className={styles.inputName}>
                  <input
                    type="number"
                    name="mes"
                    placeholder="Mes"
                    className={styles.placeholderPago}
                    value={formData.mes}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.setPago}>
                <p className={styles.subtitlePagos}>AÑO</p>
                <div className={styles.inputName}>
                  <input
                    type="number"
                    name="año"
                    placeholder="Año"
                    className={styles.placeholderPago}
                    value={formData.año}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.setPago}>
                <p className={styles.subtitlePagos}>CVC</p>
                <div className={styles.inputName}>
                  <input
                    type="number"
                    name="cvc"
                    placeholder="CVC"
                    className={styles.placeholderPago}
                    value={formData.cvc}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button
                className={styles.buttonSubmit}
                type="submit"
                disabled={!isFormValid()}
              >
                Realizar pago
              </button>
            </form>
          </div>
          <div className={styles.infoPayment}>
            <div className={styles.sectionInfoPayment}>
              <p className={styles.subtitlePagos}>FECHA DE ENTRADA</p>
              <p>{formattedFirstDate || "Fecha no disponible"}</p>
            </div>
            <div className={styles.sectionInfoPayment}>
              <p className={styles.subtitlePagos}>FECHA DE SALIDA</p>
              <p>{formattedLastDate || "Fecha no disponible"}</p>
            </div>
            <div className={styles.sectionInfoPayment}>
              <p className={styles.subtitlePagos}>NÚMERO DE NOCHES</p>
              <p>{nights || 0}</p>
            </div>
            <div className={styles.sectionInfoPayment}>
              <p className={styles.subtitlePagos}>ADULTOS</p>
              <p>{numAdult || 0}</p>
            </div>
            <div className={styles.sectionInfoPayment}>
              <p className={styles.subtitlePagos}>NIÑOS</p>
              <p>{numKids || 0}</p>
            </div>
            <div className={styles.sectionInfoPayment}>
              <p className={styles.subtitlePagos}>{couponOK && "CUPÓN"}</p>
              <p>{couponOK && textCoupon}</p>
            </div>
            <div className={styles.sectionInfoPayment}>
              <p className={styles.subtitlePagos}>PRECIO FINAL</p>
              <p>{finalPrice ? `$${finalPrice}` : "Precio no disponible"}</p>
              {couponOK && (
                <p className={styles.discountText}>
                  Descuento del 10% aplicado
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
