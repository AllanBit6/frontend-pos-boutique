import "./Inventario.css"
import DataTable from "../../components/DataTable";
import SectionHeader from "../../components/SectionHeader";

// Columnas que quieres mostrar
  const columns = ["ID", "Nombre", "Marca", "Color", "Talla", "Stock", "PrecioVenta"];

  // Datos de ejemplo
  const data = [
    {ID:1, Nombre:"Playera", Marca:"Nike", Color:"Negro", Talla:"S", Stock:50, PrecioVenta: "Q"+150},
    {ID:1, Nombre:"Playera", Marca:"Nike", Color:"Negro", Talla:"S", Stock:50, PrecioVenta: "Q"+150},
    {ID:1, Nombre:"Playera", Marca:"Nike", Color:"Negro", Talla:"S", Stock:50, PrecioVenta: "Q"+150},
    {ID:1, Nombre:"Playera", Marca:"Nike", Color:"Negro", Talla:"S", Stock:50, PrecioVenta: "Q"+150},
    {ID:1, Nombre:"Playera", Marca:"Nike", Color:"Negro", Talla:"S", Stock:50, PrecioVenta: "Q"+150},
    {ID:1, Nombre:"Playera", Marca:"Nike", Color:"Negro", Talla:"S", Stock:50, PrecioVenta: "Q"+150},
    {ID:1, Nombre:"Playera", Marca:"Nike", Color:"Negro", Talla:"S", Stock:50, PrecioVenta: "Q"+150},
    {ID:1, Nombre:"Playera", Marca:"Nike", Color:"Negro", Talla:"S", Stock:50, PrecioVenta: "Q"+150},
    {ID:1, Nombre:"Playera", Marca:"Nike", Color:"Negro", Talla:"S", Stock:50, PrecioVenta: "Q"+150},
    {ID:1, Nombre:"Playera", Marca:"Nike", Color:"Negro", Talla:"S", Stock:50, PrecioVenta: "Q"+150},
    {ID:1, Nombre:"Playera", Marca:"Nike", Color:"Negro", Talla:"S", Stock:50, PrecioVenta: "Q"+150},
    {ID:1, Nombre:"Playera", Marca:"Nike", Color:"Negro", Talla:"S", Stock:50, PrecioVenta: "Q"+150}

  ];

  // Acciones por fila
  const actions = [
    {
      label: "Editar",
      onClick: (item) => console.log("Editar:", item)
    },
    {
      label: "Eliminar",
      onClick: (item) => console.log("Eliminar:", item)
    }
  ];






function Inventario(){
    return(
        <div className="inventario-wrapper">


            <SectionHeader>INVENTARIO</SectionHeader>

            <div className="inventario-searchbar">
                <p>Buscar por: </p>
                <input type="search" />
                <button>Buscar</button>
            </div>


            <div className="inventario-table">
                <div className="products-tables">
                    <DataTable columns={columns} data={data} actions={actions}/>
                </div>
            </div>
        </div>
    )
}

export default Inventario;