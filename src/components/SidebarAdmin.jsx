import "./SidebarAdmin.css"
import Profile from "./Profile"
import Button from "./Button"
import SidebarOption from "./SidebarOption"
import { NavLink } from "react-router-dom";
import { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import SidebarCommander from "./SidebarCommander";
import { useAuth } from "../context/AuthContext";
import { logout } from "../services/authService";

function SidebarAdmin() {
  
  const navigate = useNavigate();
  const [sidebarCollapse, setSidebarCollapse] = useState("nav-bar");

  //Toggle para esconder la barra
  function handleClickBar(){
    if(sidebarCollapse === "nav-bar"){
      setSidebarCollapse("nav-bar collapsed");
    }else{
      setSidebarCollapse("nav-bar");
    }
  }

  // Obtener datos del usuario al montar el componente
  const {user, setUser} = useAuth();

  
  async function handleClick() {
    try {
      await logout();
      setUser(null);
      navigate("/login");
    } catch (err) {
      console.error("Error al cerrar sesión:", err);
    }
  }

  return (
    <Fragment>
      <nav className={sidebarCollapse}>
        {/* Pasamos los datos del usuario desde el state */}
        <Profile username={user?.user_name} role={user?.rol} />


          <Button type="caution" id="logout-btn" onClick={handleClick}>
            Cerrar Sesión
          </Button>

        <hr className="separator" />

        <div className="sidebar-options-container">

          <NavLink to="/admin" end className={({isActive}) => isActive ? "selected" : ""}>
            <SidebarOption type="home">Inicio</SidebarOption>
          </NavLink>

          <NavLink to="/admin/inventario" className={({isActive}) => isActive ? "selected" : ""}>
            <SidebarOption type="tables">Inventario</SidebarOption>
          </NavLink>

          <NavLink to="/admin/usuarios" className={({isActive}) => isActive ? "selected" : ""}>
            <SidebarOption type="user">Usuarios</SidebarOption>
          </NavLink>

          <NavLink to="/admin/reportes" className={({isActive}) => isActive ? "selected" : ""}>
            <SidebarOption type="reports">Reportes</SidebarOption>
          </NavLink>

          <NavLink to="/admin/ventas" className={({isActive}) => isActive ? "selected" : ""}>
            <SidebarOption type="sales">Ventas</SidebarOption>
          </NavLink>
        </div>

        <hr className="separator" />
      </nav>
      <SidebarCommander onClick={handleClickBar}/>  

   </Fragment> 
  );
}

export default SidebarAdmin;