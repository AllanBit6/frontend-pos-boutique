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

  //Mapa de iconos
  const iconMap = {
    pencil: faPencil,
    trash: faTrash,
    info: faCircleInfo,
    barcode: faBarcode
    };
  






function Inventario(){

    // Acciones por fila
  const actions = [
  {
    icon: "pencil",
    onClick: (item) => openModal("editar", item)
  },
  {
    icon: "trash",
    onClick: (item) => openModal("eliminar", item)
  },
  {
    icon: "info",
    onClick: (item) => openModal("detalle", item)
  },
  {
    icon: "barcode",
    onClick: (item) => openModal("barcode", item)
  }
    ];


    //Estado para controlar el despliegue del Modal
    const [modalState, setModalState] = useState({ isOpen: false, type: null, data: null });
    //Estado para setear la info del producto por fila
    const [formData, setFormData] = useState({});

    //Funcion para recoger la info de la fila y mandarla al formulario
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    //Mapeo de acciones por modal
    const openModal = (type, data = null) => {
        setModalState({
            isOpen: true,
            type,
            data
        });

        if(data){
            setFormData(data);
        }
    };

    const closeModal = () => {
        setModalState({ 
        isOpen: false, 
        type: null, 
        data: null })
            
        setSelectedImage(null);
    };

    //Estado para cambiar la imagen de previsualizacion
    const [selectedImage, setSelectedImage] = useState(null);

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



           
            <Modal isOpen={modalState.isOpen} onClose={closeModal} title="Productos">
                {modalState.type === "agregar" && (
                    <form className="form-container" onSubmit={(e) => { e.preventDefault(); console.log("Enviar a API"); closeModal(); }}>

                        <div className="h-row-form">
                            <article className="form-left-side">
                                <label >Nombre del producto</label>
                                <input type="text" required />
                                <label >Marca</label>
                                <input type="text" required/>
                                <div className="h-row-form">
                                    <label >Color</label>
                                    <label >Talla</label>    
                                </div>
                                <div className="h-row-form">
                                    <input type="text"/>
                                    <input type="number" min={0}/>
                                </div>
                                
                                <label >Stock</label>
                                <input type="number" min={0}/>

                                <div className="h-row-form">
                                    <label >Precio compra</label>
                                    <label >Precio venta</label>    
                                </div>
                                <div className="h-row-form">
                                    <input type="number" min={0}/>
                                    <input type="number" min={0}/>
                                </div>
                                
                            </article>
                            <article className="form-right-side">
                                <img src={selectedImage || "#"} alt="" className="form-prev-img"/>
                                <input type="file" accept="image/*"
                                    onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (file) setSelectedImage(URL.createObjectURL(file));
                                     }}/>
                                
                                <label>Descripcion</label>
                                <textarea></textarea>
   
                            </article>
                            
                        </div>

                        
                        <button type="submit" className="btn-light accept">Guardar</button>
                        
                       
                    </form>
                )}

                {modalState.type=== "editar" && (

                    <form className="form-container"
                        onSubmit={(e) => {
                            e.preventDefault();
                            console.log("Enviar a API:", formData);
                            closeModal();
                        }}>

                        <div className="h-row-form">
                        <article className="form-left-side">

                        <label>ID</label>
                        <input
                        type="text"
                        name="ID"
                        value={formData.ID || ""}
                        readOnly
                        />

                        <label>Nombre del producto</label>
                        <input
                        type="text"
                        name="Nombre"
                        value={formData.Nombre || ""}
                        onChange={handleChange}
                        required
                        />

                        <label>Marca</label>
                        <input
                        type="text"
                        name="Marca"
                        value={formData.Marca || ""}
                        onChange={handleChange}
                        required
                        />

                        <div className="h-row-form">
                        <label>Color</label>
                        <label>Talla</label>
                        </div>

                        <div className="h-row-form">
                        <input
                        type="text"
                        name="Color"
                        value={formData.Color || ""}
                        onChange={handleChange}
                        />

                        <input
                        type="text"
                        name="Talla"
                        value={formData.Talla || ""}
                        onChange={handleChange}
                        />
                        </div>

                        <label>Stock</label>
                        <input
                        type="number"
                        min={0}
                        name="Stock"
                        value={formData.Stock || ""}
                        onChange={handleChange}
                        />

                        <div className="h-row-form">
                        <label>Precio compra</label>
                        <label>Precio venta</label>
                        </div>

                        <div className="h-row-form">
                        <input
                        type="number"
                        min={0}
                        name="PrecioCompra"
                        value={formData.PrecioCompra || ""}
                        onChange={handleChange}
                        />

                        <input
                        type="text"
                        min={0}
                        name="PrecioVenta"
                        value={formData.PrecioVenta || ""}
                        onChange={handleChange}
                        />
                        </div>

                        </article>

                        <article className="form-right-side">

                        <img src={selectedImage || "#"} alt="" className="form-prev-img"/>

                        <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) setSelectedImage(URL.createObjectURL(file));
                        }}
                        />

                        <label>Descripcion</label>
                        <textarea
                        name="Descripcion"
                        value={formData.Descripcion || ""}
                        onChange={handleChange}
                        />

                        </article>

                        </div>

                        <button type="submit" className="btn-light accept">
                        Guardar
                        </button>

                    </form>
                )}

                {modalState.type === "detalle" && (
                    <form className="form-container">

                        <div className="h-row-form">
                        <article className="form-left-side">

                        <label>ID</label>
                        <input
                        type="text"
                        name="ID"
                        value={formData.ID || ""}
                        readOnly
                        />

                        <label>Nombre del producto</label>
                        <input
                        type="text"
                        name="Nombre"
                        value={formData.Nombre || ""}
                        readOnly
                        />

                        <label>Marca</label>
                        <input
                        type="text"
                        name="Marca"
                        value={formData.Marca || ""}
                        required
                        readOnly
                        />

                        <div className="h-row-form">
                        <label>Color</label>
                        <label>Talla</label>
                        </div>

                        <div className="h-row-form">
                        <input
                        type="text"
                        name="Color"
                        value={formData.Color || ""}
                        readOnly
                        />

                        <input
                        type="text"
                        name="Talla"
                        value={formData.Talla || ""}
                        readOnly
                        />
                        </div>

                        <label>Stock</label>
                        <input
                        type="number"
                        min={0}
                        name="Stock"
                        value={formData.Stock || ""}
                        readOnly
                        />

                        <div className="h-row-form">
                        <label>Precio compra</label>
                        <label>Precio venta</label>
                        </div>

                        <div className="h-row-form">
                        <input
                        type="number"
                        min={0}
                        name="PrecioCompra"
                        value={formData.PrecioCompra || ""}
                        readOnly
                        />

                        <input
                        type="text"
                        min={0}
                        name="PrecioVenta"
                        value={formData.PrecioVenta || ""}
                        readOnly
                        />
                        </div>

                        </article>

                        <article className="form-right-side">

                        <img src={selectedImage || "#"} alt="" className="form-prev-img"/>

                        <label>Descripcion</label>
                        <textarea
                        name="Descripcion"
                        value={formData.Descripcion || ""}
                        readOnly
                        />

                        </article>

                        </div>
                    </form>
                )}

                {modalState.type === "barcode" && (
                    <div>
                        <h3>Código de barras de: {modalState.data?.Nombre}</h3>
                    </div>
                )}

                {modalState.type === "eliminar" && (
                    <form className="form-container" onSubmit={(e) => {
                            e.preventDefault();
                            console.log("Enviar a API:", formData);
                            closeModal();
                        }}>

                        <div className="h-row-form">
                        <article className="form-left-side">

                        <label>ID</label>
                        <input
                        type="text"
                        name="ID"
                        value={formData.ID || ""}
                        readOnly
                        />

                        <label>Nombre del producto</label>
                        <input
                        type="text"
                        name="Nombre"
                        value={formData.Nombre || ""}
                        readOnly
                        />

                        <label>Marca</label>
                        <input
                        type="text"
                        name="Marca"
                        value={formData.Marca || ""}
                        required
                        readOnly
                        />

                        <div className="h-row-form">
                        <label>Color</label>
                        <label>Talla</label>
                        </div>

                        <div className="h-row-form">
                        <input
                        type="text"
                        name="Color"
                        value={formData.Color || ""}
                        readOnly
                        />

                        <input
                        type="text"
                        name="Talla"
                        value={formData.Talla || ""}
                        readOnly
                        />
                        </div>

                        <label>Stock</label>
                        <input
                        type="number"
                        min={0}
                        name="Stock"
                        value={formData.Stock || ""}
                        readOnly
                        />

                        <div className="h-row-form">
                        <label>Precio compra</label>
                        <label>Precio venta</label>
                        </div>

                        <div className="h-row-form">
                        <input
                        type="number"
                        min={0}
                        name="PrecioCompra"
                        value={formData.PrecioCompra || ""}
                        readOnly
                        />

                        <input
                        type="text"
                        min={0}
                        name="PrecioVenta"
                        value={formData.PrecioVenta || ""}
                        readOnly
                        />
                        </div>

                        </article>

                        <article className="form-right-side">

                        <img src={selectedImage || "#"} alt="" className="form-prev-img"/>

                        <label>Descripcion</label>
                        <textarea
                        name="Descripcion"
                        value={formData.Descripcion || ""}
                        readOnly
                        />

                        </article>

                        </div>

                        <button type="submit" className = "btn-light caution">Eliminar</button>
                    </form>
                )}
            </Modal>
            

        </div>
    )
}

export default Inventario;