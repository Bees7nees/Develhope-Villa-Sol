import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Styles/Pago.module.scss";
import { GlobalContext } from "../Components/GlobalVariable";

export default function Pago() {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const { textCoupon, numAdult, numKids, firstDate, lastDate, nights, finalPrice, couponOK, setPurchaseDone, purchaseDone } = useContext(GlobalContext);

  const formattedFirstDate = firstDate instanceof Date ? firstDate.toLocaleDateString() : firstDate;
  const formattedLastDate = lastDate instanceof Date ? lastDate.toLocaleDateString() : lastDate;

  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    numeroCuenta: '',
    mes: '',
    año: '',
    cvc: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const isFormValid = () => {
    return Object.values(formData).every(value => value.trim() !== '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
        console.log("ha llegado aqui")
      setPurchaseDone(true);
    }
  };

  const handleButtonClick = () => {
    if (formRef.current) {
      formRef.current.submit();
    }
  };

  useEffect(() => {
    if (purchaseDone) {
      alert('Pago realizado correctamente');
      navigate('/');
    }
  }, [purchaseDone, navigate]);

  return (
    <div className={styles.backgroundPago}>
      <div className={styles.generalDivPago}>
        <h2 className={styles.titlePago}>Detalles del pago</h2>
        <div className={styles.generalInfoPago}>
          <div className={styles.formPayment}>
            <form className={styles.formPayment2} onSubmit={handleSubmit} ref={formRef}>
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
            </form>
          </div>
          <div className={styles.infoPayment}>
            <div className={styles.sectionInfoPayment}>
              <p className={styles.subtitlePagos}>FECHA DE ENTRADA</p>
              <p>{formattedFirstDate || 'Fecha no disponible'}</p>
            </div>
            <div className={styles.sectionInfoPayment}>
              <p className={styles.subtitlePagos}>FECHA DE SALIDA</p>
              <p>{formattedLastDate || 'Fecha no disponible'}</p>
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
              <p className={styles.subtitlePagos}>{couponOK && 'CUPÓN'}</p>
              <p>{couponOK && textCoupon}</p>
            </div>
            <div className={styles.sectionInfoPayment}>
              <p className={styles.subtitlePagos}>PRECIO FINAL</p>
              <p>{finalPrice ? `$${finalPrice}` : 'Precio no disponible'}</p>
              {couponOK && <p className={styles.discountText}>Descuento del 10% aplicado</p>}
            </div>
          </div>
        </div>
        <button onClick={handleButtonClick} className={styles.buttonSubmit} type="button" disabled={!isFormValid()}>
          Realizar pago
        </button>
      </div>
    </div>
  );
}
