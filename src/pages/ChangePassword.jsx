import "./ChangePassword.css";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Notification from "../components/Notification";
import { changePassword } from "../services/authService";
import Button from "../components/Button";


function ChangePassword(){

  const { checkAuth } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    password_actual: "",
    password_nuevo: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    try {

      const res = await changePassword(
        formData.password_actual,
        formData.password_nuevo
      );

      await checkAuth();

      if (res.usuario.rol === "administrador") {
        navigate("/admin");
      }else if(res.usuario.rol === "vendedor"){
        navigate("/cashier");
      }

    } catch (err) {

      const message =
        err.response?.data?.message || "Error al cambiar contraseña";

      setError(message);
    }
  };

  return(
    <div className="change-password-container">

      {error && <Notification type="error" text={error}/>}

      <form className="change-password-form" onSubmit={handlePasswordReset}>

        <h1 className="change-password-title">Cambiar contraseña</h1>

        <label>Contra actual</label>
        <input
          type="password"
          name="password_actual"
          value={formData.password_actual}
          className="password-input-change"
          onChange={handleChange}
        />

        <label>Nueva contra</label>
        <input
          type="password"
          name="password_nuevo"
          value={formData.password_nuevo}
          onChange={handleChange}
          className="password-input-change"
        />

        <Button type="accept">Cambiar contraseña</Button>

      </form>
    </div>
  )
}

export default ChangePassword;