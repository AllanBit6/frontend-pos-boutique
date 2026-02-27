import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "./Login.css"

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    const role = "admin"; // simulado

    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/cashier");
    }
  };

  return (
    <div className="login-container">

      <form  action="" className="login-form">
        <h1>INICIO DE SESION</h1>

        <p>Ingrese sus credenciales para continuar</p>
        
        <label htmlFor="">Nombre de usuario</label>
        <input type="username" id="username-input" placeholder="Ingrese su nombre de usuario"/>

        <label htmlFor="" >Contraseña</label>
        <input type="password" id="password-input" placeholder="Ingrese su contraseña"/>

        <Button type="accept" onClick={handleLogin}>Ingresar</Button>

      </form>

      <hr/>

    </div>
  );
}


export default Login;