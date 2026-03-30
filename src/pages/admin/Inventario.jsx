import "./AdminLayout.css";
import DataTable from "../../components/DataTable";
import AdminLayout from "./AdminLayout";
import ButtonLight from "../../components/ButtonLight";
import Modal from "../../components/Modal";

import ProductForm from "./InventarioComponents/ProductForm";
import ProductDetail from "./InventarioComponents/ProductDetail";
import ProductDelete from "./InventarioComponents/ProductDelete";
import BarcodeCanvas from "./InventarioComponents/BarcodeCanvas";



import { obtenerProductosPorID } from "../../services/inventarioService";
import { obtenerProductos } from "../../services/inventarioService";
import {sileo } from "sileo";
import { useState } from "react";
import { useEffect } from "react";


import {
  faPencil,
  faTrash,
  faCircleInfo,
  faBarcode,
} from "@fortawesome/free-solid-svg-icons";


// Columnas a mostrar
const columns = [
  {key: "id_producto", label:"ID"},
  {key: "nombre", label: "Nombre"},
  {key: "marca", label: "Marca"},
  {key: "color", label: "Color"},
  {key: "talla", label: "Talla"},
  {key: "stock", label: "Stock"},
  {key: "precio_venta", label: "Precio de Venta"},
  {key: "precio_compra", label: "Precio de Compra"}
];


//Mapa de iconos
const iconMap = {
  pencil: faPencil,
  trash: faTrash,
  info: faCircleInfo,
  barcode: faBarcode,
};

function Inventario() {
  // Acciones por fila
  const actions = [
    {
      icon: "pencil",
      onClick: (item) => openModal("editar", item),
    },
    {
      icon: "trash",
      onClick: (item) => openModal("eliminar", item),
    },
    {
      icon: "info",
      onClick: (item) => openModal("detalle", item),
    },
    {
      icon: "barcode",
      onClick: (item) => openModal("barcode", item),
    },
  ];


  //Informacion para la tabla
    const [data, setData] = useState([]);
  
  useEffect(() => {
  
    const promise = obtenerProductos().then(setData);
  
      sileo.promise(promise, {
        loading: {
          title: "Cargando productos",
          description: "Obteniendo información..."
        },
        success: {
          title: "Productos cargados",
          description: "Datos obtenidos correctamente",
          duration:1500
        },
        error: {
          title: "Error",
          description: "No se pudieron cargar los productos",
          duration:1500
        }
      });
  
  }, []);




  //Estado para controlar el despliegue del Modal
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: null,
    data: null,
  });
  //Estado para setear la info del producto por fila
  const [formData, setFormData] = useState({});

  //Mapeo de acciones por modal
  const openModal = async (type, data = null) => {
    setModalState({
      isOpen: true,
      type,
      data,
    });

    if ((type === "editar" || type === "detalle" || type === "eliminar") && data?.id_producto) {
        try {
          //Obtiene el IDe desde la tabla
          const productoCompleto = await obtenerProductosPorID(data.id_producto);
          setFormData({...productoCompleto});
        } catch (error) {
          console.error("No se pudo cargar el producto:", error);
        }
      }
};

  const closeModal = () => {
    setModalState({
      isOpen: false,
      type: null,
      data: null,
    });

  };


  const adminActions = (
    <>
        <ButtonLight type="accept" onClick={() => openModal("agregar")}>
          Registrar nuevo
        </ButtonLight>
        <ButtonLight type="default">Gestionar tallas</ButtonLight>
        <ButtonLight type="default">Gestionar tallas</ButtonLight>
    </>
  )


  console.log("DATA:", data);
  //Regreso del render
  return (

    <AdminLayout title="INVENTARIO" actions={adminActions}>

      <DataTable
            columns={columns}
            data={data}
            actions={actions}
            iconMap={iconMap}
          />


      <Modal isOpen={modalState.isOpen} onClose={closeModal} title="Productos">



        
        {modalState.type === "agregar" && (
          <ProductForm mode="create"
          formData={formData}
          setFormData={setFormData}
          closeModal={closeModal}/>
        )}

        {modalState.type === "editar" && (
          <ProductForm mode="edit"
          formData={formData}
          setFormData={setFormData}
          closeModal={closeModal}  
          />
        )}

        {modalState.type === "detalle" && (
          <ProductDetail formData={formData}/>
        )}

        {modalState.type === "barcode" && (
          <div>
            <BarcodeCanvas productID={modalState.data?.id_producto} />
          </div>
        )}

        {modalState.type === "eliminar" && (
          
          <ProductDelete formData={formData}/>
        )}
      </Modal>
    </AdminLayout>

      
    
  );
}

export default Inventario;
