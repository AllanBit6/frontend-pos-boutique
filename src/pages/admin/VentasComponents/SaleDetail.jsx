import "./SaleForm.css";
import DataTable from "../../../components/DataTable";
import {
  faPencil,
  faTrash,
  faCircleInfo,
  faUnlockKeyhole,
} from "@fortawesome/free-solid-svg-icons";


const columns = [
        {key: "id_producto", label:"ID"},
        {key: "nombre", label:"Fecha"},
        {key: "marca", label:"Marca"},
        {key: "color", label:"Color"},
        {key: "talla", label: "Talla"},
        {key: "precio_venta", label: "Precio"},
        {key: "unidades", label: "Cantidad"},
        {key: "total", label: "Total"}]



//Mapa de iconos
const iconMap = {
  pencil: faPencil,
  trash: faTrash,
  info: faCircleInfo,
  password: faUnlockKeyhole,
};



function SaleDetail({ formData }) { 

  return (
    <div className="form-container">
        <div className="h-row-form">
            <div className = "form-left-side">
            <p>ID: {formData.id_venta}</p>
            <p>Fecha: {formData.fecha}</p>
            <p>Monto: {formData.monto}</p>
            <p>Cajero: {formData.cajero}</p>
            <p>Ingreso: {formData.ingreso}</p>
            <p>Cambio: {formData.cambio}</p>
        </div>
        <div className = "form-right-side">
            <DataTable 
                    data={formData.productos || []} 
                    columns={columns} 
                    iconMap = {iconMap}
                    
            />
            {console.log(formData.productos)}
        </div>
        </div>
        

    </div>
  );
}

export default SaleDetail;