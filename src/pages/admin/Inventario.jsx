import "./Inventario.css"
import DataTable from "../../components/DataTable";
import SectionHeader from "../../components/SectionHeader";
import Searchbar from "../../components/Searchbar";

import { faPencil, faTrash, faCircleInfo, faBarcode} from "@fortawesome/free-solid-svg-icons";


// Columnas que quieres mostrar
  const columns = ["ID", "Nombre", "Marca", "Color", "Talla", "Stock", "PrecioVenta"];

  // Datos de ejemplo
  const data = [
    {ID:1, Nombre:"Playera", Marca:"Nike", Color:"Negro", Talla:"S", Stock:50, PrecioVenta: "Q"+150},
    {ID:2, Nombre:"Pantalon", Marca:"Hillfinger", Color:"Blanco", Talla:"M", Stock:15, PrecioVenta: "Q"+90},
 

  ];

  const iconMap = {
    pencil: faPencil,
    trash: faTrash,
    info: faCircleInfo,
    barcode: faBarcode
    };
  // Acciones por fila
  const actions = [
    {
      icon: "pencil",
      onClick: (item) => console.log("Editar:", item)
    },
    {
      icon: "trash",
      onClick: (item) => console.log("Eliminar:", item)
    },
    {
      icon: "info",
      onClick: (item) => console.log("Ver detalles", item)
    },
    {
      icon: "barcode",
      onClick: (item) => console.log("Viendo QR", item)
    }
  ];






function Inventario(){
    return(
        <div className="inventario-wrapper">

            <SectionHeader>INVENTARIO</SectionHeader>

            <Searchbar/>


            <div className="inventario-table">
                <div className="products-tables">
                    <DataTable columns={columns} data={data} actions={actions} iconMap={iconMap}/>
                </div>
            </div>
        </div>
    )
}

export default Inventario;