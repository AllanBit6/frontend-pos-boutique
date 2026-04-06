import AdminLayout from "./AdminLayout";
import DataTable from "../../components/DataTable";
import ButtonLight from "../../components/ButtonLight";
import Modal from "../../components/Modal";

/*Cambiar*/
import UserForm from "./UsuariosComponents/UserForm";
import UserDetail from "./UsuariosComponents/UserDetail";
import UserDelete from "./UsuariosComponents/UserDelete";
import UserReset from "./UsuariosComponents/UserReset";

/*Cambiar*/
import { obtenerVentasPorID } from "../../services/ventasService";
import { obtenerVentas } from "../../services/ventasService";
import {sileo } from "sileo";
import { useState } from "react";
import { useEffect } from "react";

import {
  faPencil,
  faTrash,
  faCircleInfo,
  faUnlockKeyhole,
} from "@fortawesome/free-solid-svg-icons";



/*Cambiar*/
// Columnas a mostrar
const columns = [
  {key: "id_venta", label:"ID"},
  {key: "fecha", label:"Fecha"},
  {key: "monto", label:"Monto"},
  {key: "metodo", label:"Metodo de pago"},
  {key: "cajero", label: "Cajero"},
];



//Mapa de iconos
const iconMap = {
  pencil: faPencil,
  trash: faTrash,
  info: faCircleInfo,
  password: faUnlockKeyhole,
};

function Ventas() {
  // Acciones por fila
  const actions = [
    {
      icon: "trash",
      onClick: (item) => openModal("eliminar", item),
    },
    {
      icon: "info",
      onClick: (item) => openModal("detalle", item),
    },

  ];

  //Informacion para la tabla
  const [data, setData] = useState([]);

useEffect(() => {

  const promise = obtenerVentas().then(setData);

    sileo.promise(promise, {
      loading: {
        title: "Cargando usuarios",
        description: "Obteniendo información..."
      },
      success: {
        title: "Usuarios cargados",
        description: "Datos obtenidos correctamente",
        duration:1500
      },
      error: {
        title: "Error",
        description: "No se pudieron cargar los usuarios",
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
  //Estado para setear la info del usuario por fila
  const [formData, setFormData] = useState({});

  
  //Mapeo de acciones por modal
const openModal = async (type, data = null) => {
  setModalState({
    isOpen: true,
    type,
    data,
  });


  if ((type === "detalle" || type === "eliminar") && data?.id_venta) {
    try {
      //Obtiene el IDe desde la tabla
      const ventaCompleto = await obtenerVentasPorID(data.id_venta);
      setFormData({...ventaCompleto});
    } catch (error) {
      console.error("No se pudo cargar la venta:", error);
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




  //Regreso del render
  return (

    <AdminLayout title="VENTAS" actions={
      <></>
    }>

      <DataTable
            columns={columns}
            data={data}
            actions={actions}
            iconMap={iconMap}
          />
      
      <Modal isOpen={modalState.isOpen} onClose={closeModal} title="Usuarios">
        {modalState.type === "agregar" && (
          <UserForm mode="create"
          formData={formData}
          setFormData={setFormData}
          closeModal={closeModal}  
          />  
        )}

        {modalState.type === "detalle" && (
          <UserDetail formData={formData}/>
        )}
      </Modal>
    </AdminLayout>

    
  );
}

export default Ventas;
