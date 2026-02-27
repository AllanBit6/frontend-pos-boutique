import { Outlet } from "react-router-dom";
import SidebarAdmin from "../components/SidebarAdmin";
import "./Admin.css";

//PA PROBAR EL MODAL

function Admin() {
  return (
    <div className="admin-view">
      <SidebarAdmin />
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;