import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";
import { login } from "../services/authService";
import "./Login.css"

function Login() {

  //Para redirigir segun el tipo de usuario
  const navigate = useNavigate();

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

    //Se leen los datos de la respuesta y se accede al usuario y rol
    const res = await login(formData.user_name, formData.password);

    if (res.usuario.rol === "administrador") {
      navigate("/admin");
    }

    } catch (error) {

      console.log("Error de autenticación: ", error);
      alert("No se pudo logear papito: ")
      alert(error)

    }
  };


  //Render
  return (
    <div className="login-container">

      <form className="login-form" onSubmit={handleLogin}>
        <h1>INICIO DE SESION</h1>

        <p>Ingrese sus credenciales para continuar</p>
        
        <label htmlFor="">Nombre de usuario</label>
        <input
              type="text"
              name="user_name"
              id="username-input"
              placeholder="Ingrese su nombre de usuario"
              value={formData.user_name}
              onChange={handleChange}
            />

        <label htmlFor="" >Contraseña</label>
        <input
              type="password"
              name="password"
              id="password-input"
              placeholder="Ingrese su contraseña"
              value={formData.password}
              onChange={handleChange}
            />


        <Button type="accept">Ingresar</Button>

      </form>

      <hr/>

    </div>
  );
}

export default Login;