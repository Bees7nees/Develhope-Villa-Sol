import React, { createContext, useState } from 'react';

// Creamos el contexto
const GlobalContext = createContext();

// Creamos el proveedor del contexto
const GlobalProvider = ({ children }) => {
  // Aquí puedes definir las variables globales y su estado inicial
  const [numAdult, setNumAdult] = useState(0);
  const [numKids, setNumKids] =  useState(0);
  const [numNight, setNumNight] = useState(0);
  const [textCoupon, setTextCoupon] = useState("");

  return (
    <GlobalContext.Provider value={{ 
      numAdult, setNumAdult,
      numKids, setNumKids,
      numNight, setNumNight,
      textCoupon, setTextCoupon
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
