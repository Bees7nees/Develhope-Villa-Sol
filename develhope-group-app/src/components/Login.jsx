
import React, { useState, useRef, useEffect,useContext } from "react";
import {UserMyContext} from '../globalvariable/usuarioglobal.jsx';
import style from "./Login.module.css";


export default function Login() {

  // VARIABLE GLOBAL
  const { globaluser, setGlobaluser }= useContext(UserMyContext);
  // VARIABLE GLOBAL

  const [formVisible, setFormVisible] = useState(false);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };
  useEffect(() => {
    if (formVisible) {
      inputRef1.current.focus();
    } else {
      inputRef2.current.focus();
    }
  }, [formVisible]);


  // CONTROLAR FORMULARIO REGISTRAR

  let [bbd,setbbd] =useState([]);
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    password: ""
  });

 
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setbbd(storedUsers);
  }, []); 

  const [users,setusers]= useState(
    {
      email:'',
      password:'',
      name:''
    }
  )
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    if( value.length>=8){
      setFormErrors({ })
    }
    setusers({
      ...users,
      [name]: value
    });
  };

  const validateForm=()=>{
    const errors = {};
    if (!users.email.includes('@') ) {
      errors.email = "El correo electrónico debe contener '@'";
    }
    if (users.password.length <= 8) {
      errors.password = "* La contraseña debe tener al menos 8 caracteres";
    }
    setFormErrors(errors);
    console.log(formErrors)
    return Object.keys(errors).length === 0;
  };


const añadirUser = (e) => {
  e.preventDefault();
  const isValid=validateForm();
  
  // Verificar si el formulario es válido antes de agregar el usuario
  if (isValid) {
    // Verificar si los campos no están vacíos antes de agregar el usuario
    if (users.name.trim() !== '' && users.email.trim() !== '' && users.password.trim() !== '') {
      const newuser = bbd ? [...bbd, users] : [users];
      setbbd(newuser);
      localStorage.setItem('users', JSON.stringify(newuser));
      
      setusers({
        name: '',
        email: '',
        password: '',
      });
    }
  }
};

// validacion de login
const loginValidate = (e) => {
  e.preventDefault();
  if (bbd.length > 0) {
    const usuario = bbd.find((usuario) => {
      return usuario.email === users.email && usuario.password === users.password;
    });
    if (usuario) {
      setGlobaluser({
        ...globaluser,
        login:true,
        name:usuario.name,
        email:usuario.email,
      })
      console.log(globaluser)
    } else {
     alert("DATOS ERRONEOS");
    }
  }
  setusers(
  {
    name: "",
    email: "",
    password: ""
  }
  )
};
// validacion de login
  return (
    <div className={style.backgroundLogin}>
      <div className={style.loginpage}>
        <div className={style.form}>
          {/* FORMULARIO REGISTRO SE GUARDA EN LOCALESTORAGE */}
          <form className={formVisible ? style.visible : style.novisible} onSubmit={añadirUser}>
            <h2>Rellena tus datos</h2>
            <input type="text" name="name" placeholder="Nombre" required ref={inputRef1} value={users.name} onChange={handleInputChange} />
            <input type="email" name="email" required placeholder="Email"  value={users.email} onChange={handleInputChange}/> 
            {/* {formErrors.email && <span className={style.error} >{formErrors.email}</span>} */}
            
            <input type="password"name="password" required placeholder="Contraseña"  value={users.password} onChange={handleInputChange}/>
          <span className={formErrors.password && style.error} >{formErrors.password}</span>
           
            <hr />
            <br />
            <button type="submit" >crear cuenta</button> 
          </form>

          {/* FORMULARIO LOGIN */}
          <form className={formVisible ? style.novisible : style.visible} onSubmit={loginValidate}>
            <h2>Inicio de Sesión</h2>
            <input type="email" required placeholder="Email" name="email" value={users.email} ref={inputRef2} onChange={handleInputChange}/>
            <input type="password" name="password" required placeholder="Contraseña" value={users.password}  onChange={handleInputChange}/> 
            <hr />
            <button type="submit">Sign up</button>
          </form>






          {/* TOGGLE CAMBIO FORMULARIO */}
          <div className={style.message}>
            <span
              style={{
                color: !formVisible && "#B08912",
                fontWeight: !formVisible && "bold",
              }}
            >
              Sign up
            </span>
            <label className={style.moveit}>
              <input type="checkbox" onClick={toggleFormVisibility} />
              <span className={style.slider}></span>
            </label>
            <span
              style={{
                color: formVisible && "#B08912",
                fontWeight: formVisible && "bold",
              }}
            >
              {" "}
              Registrarse
            </span>
          </div>
          {/* TOGGLE CAMBIO FORMULARIO */}
        </div>
      </div>
    </div>
  );
}
