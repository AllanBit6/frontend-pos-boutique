import "./SidebarAdmin.css"
import Profile from "./Profile"
import Button from "./Button"
import SidebarOption from "./SidebarOption"
import { Link } from "react-router-dom";

function SidebarAdmin(){

    return(
        <nav className="nav-bar">
            <Profile username="Username" role="Administrador"></Profile>

            <Link to={"/login"}>
                <Button type="caution">Cerrar Sesion</Button>
            </Link>
            
            <hr className="separator"/>
            
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

            <hr className="separator"/>

        </nav>

    )
}

export default SidebarAdmin;