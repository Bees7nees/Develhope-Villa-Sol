import React, { createContext, useState } from 'react';

// Creamos el contexto
const GlobalContext = createContext();

// Creamos el proveedor del contexto
const GlobalProvider = ({ children }) => {
  // Aquí puedes definir las variables globales y su estado inicial
  const [numAdult, setNumAdult] = useState(0);
  const [numKids, setNumKids] =  useState(0);
  //const [numNight, setNumNight] = useState(0);
  const [textCoupon, setTextCoupon] = useState("");
  const [firstDate, setFirstDate] = useState(new Date());
  const [lastDate, setLastDate] = useState(new Date());
  const [nights, setNights] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [couponOK, setCouponOK] =useState(false);
  const [purchaseDone, setPurchaseDone] = useState(false)
  return (
    <GlobalContext.Provider value={{ 
      numAdult, setNumAdult,
      numKids, setNumKids,
     // numNight, setNumNight,
      textCoupon, setTextCoupon ,
      firstDate, setFirstDate,
      lastDate, setLastDate,
      nights, setNights,
      finalPrice, setFinalPrice,
      couponOK, setCouponOK,
      purchaseDone, setPurchaseDone,
      //incluir todas los estados  que necesitamos 
      //crear un estado que empiece en valores en 0 para que se pueda reiniciar una vez la info pase a localstorage
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
