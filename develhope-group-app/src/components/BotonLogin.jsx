import { UserMyContext } from "../globalvariable/usuarioglobal";
import { useContext, useState,useRef,useEffect } from "react";
import style from "./BotonLogin.module.css";
import {useNavigate} from"react-router-dom"

export default function BotonLogin() {
  const { globaluser, setGlobaluser } = useContext(UserMyContext);
  const [dropdownshow,setdropdownshow]= useState(false);
  const navigate = useNavigate();

  function handleClickBotton() {
    if (globaluser.login==false) {
       navigate('/Login');
       setdropdownshow(!dropdownshow);
       
    }else{ 
    };
    event.stopPropagation();
    setdropdownshow(!dropdownshow);

  }
  const handleCerrarSesion=()=>{
    setGlobaluser({
    login:false,
    name:'',
    email:'',
    reservas:[]
    }
    )
  }

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setdropdownshow(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={style.contenedor_btnLogin}>
      <div className={style.Boton_Login} onClick={handleClickBotton }>
        {globaluser.login &&<span> `Hola, {globaluser.name}!`</span>}
        <button
          style={{
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
          
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            width="35px"
            fill="#213242"
            fillOpacity="0.8"
          >
            <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
          </svg>{" "}
        </button>
        
        
      </div>
  {/* <div ref={dropdownRef} className={style.dropdownLogin}>
        <div>Reservas <div className={style.divReservas}>{globaluser.reservas.length}</div>
        </div>

        <div onClick={handleCerrarSesion}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="rgb(223, 0, 0)"
          >
            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
          </svg>
          <span>Cerrar Cesión</span>
        </div>
      </div> */}
{dropdownshow && 
  <div ref={dropdownRef} className={style.dropdownLogin}>
        <div>Reservas <div className={style.divReservas}>{globaluser.reservas.length}</div>
        </div>

        <div onClick={handleCerrarSesion}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="rgb(223, 0, 0)"
          >
            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
          </svg>
          <span>Cerrar Cesión</span>
        </div>
      </div>}
      
    </div>
  );
}
