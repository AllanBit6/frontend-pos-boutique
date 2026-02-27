import DashboardCard from "./InicioComponents/DashboardCard";
import { Link } from "react-router-dom";
import "./Inicio.css"

function Inicio(){
    return(
        <div className="option-cards-wrapper">
            <div className="dashboard-cards-container">
                <Link to={"/admin/inventario"}>
                    <DashboardCard color="red" icon="tables">INVENTARIO</DashboardCard>
                </Link>
                <Link to={"/admin/usuarios"}>
                    <DashboardCard color="green" icon="user">USUARIOS</DashboardCard>
                </Link>
                <Link to={"/admin/reportes"}>
                    <DashboardCard color="blue" icon="reports">REPORTES</DashboardCard>
                </Link>
                <Link to={"/admin/ventas"}>
                    <DashboardCard color="yellow" icon="sales">VENTAS</DashboardCard>
                </Link>
                

                <DashboardCard color="gray" icon="">NA</DashboardCard>
                <DashboardCard color="gray" icon="">NA</DashboardCard>
                <DashboardCard color="gray" icon="">NA</DashboardCard>
                <DashboardCard color="gray" icon="">NA</DashboardCard>
                
                
            </div>


            

        </div>
    )
}

export default Inicio;