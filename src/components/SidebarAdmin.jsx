import "./SidebarAdmin.css"
import Profile from "./Profile"
import Button from "./Button"
import SidebarOption from "./SidebarOption"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout, getMe } from "../services/authService";

function SidebarAdmin() {
  const [userData, setUserData] = useState({ username: "", role: "" });
  const [botonValue, setBotonValue] = useState(false);
  const navigate = useNavigate();

  // Obtener datos del usuario al montar el componente
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getMe();
        setUserData({ username: res.user_name, role: res.rol });
      } catch (err) {
        console.error("Error al obtener usuario:", err);
        setUserData({ username: "Desconocido", role: "Desconocido" });
      }
    };

    fetchUser();
  }, []);


  
  function handleClick() {
    if (botonValue) {
      logout();
      navigate("/login");
    }
    setBotonValue(!botonValue);
  }

  return (
    <nav className="nav-bar">
      {/* Pasamos los datos del usuario desde el state */}
      <Profile username={userData.username} role={userData.role} />


        <Button type="caution" id="logout-btn" onClick={handleClick}>
          Cerrar Sesión
        </Button>

      <hr className="separator" />

      <div className="sidebar-options-container">
        <Link to="/admin">
          <SidebarOption type="home">Inicio</SidebarOption>
        </Link>
        <Link to="/admin/inventario">
          <SidebarOption type="tables">Inventario</SidebarOption>
        </Link>
        <Link to="/admin/usuarios">
          <SidebarOption type="user">Usuarios</SidebarOption>
        </Link>
        <Link to="/admin/reportes">
          <SidebarOption type="reports">Reportes</SidebarOption>
        </Link>
        <Link to="/admin/ventas">
          <SidebarOption type="sales">Ventas</SidebarOption>
        </Link>
      </div>

      <hr className="separator" />
    </nav>
  );
}

export default SidebarAdmin;