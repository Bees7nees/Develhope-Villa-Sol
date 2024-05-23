import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserMyContext = createContext();

export const UserGlobalProvider = ({ children }) => {
  const [globaluser, setGlobaluser] = useState({
    login: false,
    name: "",
    email: "",
    reservas: [],
  });

  return (
    <UserMyContext.Provider value={{ globaluser, setGlobaluser }}>
      {children}
    </UserMyContext.Provider>
  );
};

UserGlobalProvider.propTypes = {
  children: PropTypes.node,
};