import "./SaleForm.css";

import DataTable from "../../../components/DataTable";


function SaleCancel({ formData }) {



  return (
    <div className="form-container">

        <div className = "form-left-side">
            <p>ID: {formData.id_venta}</p>
            <p>Fecha: {formData.fecha}</p>
            <p>Monto: Q{formData.monto}</p>
            <p>Cajero: {formData.cajero}</p>
            <p>Ingreso: Q{formData.ingreso}</p>
            <p>Cambio: Q{formData.cambio}</p>
        </div>
        <div className = "form-right-side">
            
        </div>

    </div>
  );
}

export default SaleCancel;