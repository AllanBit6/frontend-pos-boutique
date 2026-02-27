import "./Inventario.css"
import DataTable from "../../components/DataTable";
import SectionHeader from "../../components/SectionHeader";
import Searchbar from "../../components/Searchbar";
import ButtonLight from "../../components/ButtonLight";
import Modal from "../../components/Modal";

import React, { useState } from "react";


import { faPencil, faTrash, faCircleInfo, faBarcode} from "@fortawesome/free-solid-svg-icons";


    // Columnas a mostrar
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
    const [modalState, setModalState] = useState({ isOpen: false, type: null, data: null });

    const openModal = (type, data = null) => setModalState({ isOpen: true, type, data });
    const closeModal = () => setModalState({ isOpen: false, type: null, data: null });

    return(
        
        <div className="inventario-wrapper">
            

            <SectionHeader>INVENTARIO</SectionHeader>

            <Searchbar/>
            
            <div className="inventario-table">
                <div className="products-tables">
                    <DataTable columns={columns} data={data} actions={actions} iconMap={iconMap}/>
                </div>
            </div>

            <div className="operations-wrapper">
                <ButtonLight type="accept"  onClick={() => openModal("agregar")}>Registrar nuevo</ButtonLight>
                <ButtonLight type="default">Gestionar tallas</ButtonLight>
                <ButtonLight type="default">Gestionar tallas</ButtonLight>
            </div>


            <Modal isOpen={modalState.isOpen} onClose={closeModal} title="Registrar nuevo producto">
            {modalState.type === "agregar" && (
                <form onSubmit={(e) => { e.preventDefault(); console.log("Enviar a API"); closeModal(); }}>
                <input placeholder="Nombre" required />
                <input placeholder="Marca" />
                <input placeholder="Color" />
                <input placeholder="Talla" />
                <input type="number" placeholder="Stock" />
                <input type="number" placeholder="PrecioVenta" />
                <button type="submit">Guardar</button>
                </form>
            )}
            </Modal>
        </div>
    )
}

export default Inventario;