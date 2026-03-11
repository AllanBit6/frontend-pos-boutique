import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";
import { login } from "../services/authService";
import "./Login.css"
import { useAuth } from "../context/AuthContext";

import Notification from "../components/Notification";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";

function Login() {

  const { checkAuth } = useAuth();
  const navigate = useNavigate(); //Para redirigir segun el tipo de usuario
  const [error, setError] = useState(""); //Captura el error

  //Para cambiar recibir los inputs del form
  const [formData, setFormData] = useState({
  user_name: "",
  password: ""
  });

  //Para detectar el cambio de valores en inputs
  const handleChange = (e) => {
  const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };



//Para ejecutar el login
const handleLogin = async (e) => {
  e.preventDefault();

  try {

    const res = await login(formData.user_name, formData.password);

    // sincroniza el contexto
    await checkAuth();

    if (res.usuario.rol === "administrador") {
      navigate("/admin");
    }else if(res.usuario.rol === "vendedor"){
      navigate("/cashier");
    }

  } catch (err) {

    const message =
      err.response?.data?.message || "Error al iniciar sesión";

    setError(message);
  }
};

  //Render
  return (

    
    <div className="login-container">

      {error && (
          <Notification type="error" text={error}/>
      )
      }
      

      <form className="login-form" onSubmit={handleLogin}>
        
        <h1 className="login-title">INICIO DE SESION</h1>
        <FontAwesomeIcon icon={faKey} className="login-key-icon"/>
        

        <p className="login-instructions">Ingrese sus credenciales para continuar</p>
        
        <label htmlFor="">Nombre de usuario</label>
        <input
              type="text"
              name="user_name"
              id="username-input"
              value={formData.user_name}
              required
              onChange={handleChange}
            />

        <label htmlFor="" >Contraseña</label>
        <input
              type="password"
              name="password"
              id="password-input"
              value={formData.password}
              required
              onChange={handleChange}
            />


        <Button type="accept">Ingresar</Button>

      </form>

      <hr/>

    </div>
  );
}

export default Login;