import AdminLayout from "./AdminLayout";
import DataTable from "../../components/DataTable";
import ButtonLight from "../../components/ButtonLight";
import Modal from "../../components/Modal";
import UserForm from "./UsuariosComponents/UserForm";
import UserDetail from "./UsuariosComponents/UserDetail";
import UserDelete from "./UsuariosComponents/UserDelete";
import UserReset from "./UsuariosComponents/UserReset";

import { obtenerUsuariosPorID } from "../../services/usuarioService";
import {sileo } from "sileo";
import { useState } from "react";
import { useEffect } from "react";

import {
  faPencil,
  faTrash,
  faCircleInfo,
  faUnlockKeyhole,
} from "@fortawesome/free-solid-svg-icons";
import { obtenerUsuarios } from "../../services/usuarioService";



// Columnas a mostrar
const columns = [
  {key: "id_usuario", label:"ID"},
  {key: "nombre", label:"Nombre"},
  {key: "apellido", label:"Apellido"},
  {key: "user_name", label:"Usuario"},
  {key: "createdAt", label: "Creacion"}
];



//Mapa de iconos
const iconMap = {
  pencil: faPencil,
  trash: faTrash,
  info: faCircleInfo,
  password: faUnlockKeyhole,
};

function Usuarios() {
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
      icon: "password",
      onClick: (item) => openModal("reseteo", item),
    },
  ];

  //Informacion para la tabla
  const [data, setData] = useState([]);

useEffect(() => {

  const promise = obtenerUsuarios().then(setData);

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


  if ((type === "editar" || type === "detalle" || type === "eliminar") && data?.id_usuario) {
    try {
      //Obtiene el IDe desde la tabla
      const usuarioCompleto = await obtenerUsuariosPorID(data.id_usuario);
      setFormData({
                ...usuarioCompleto,
                rolNombre: usuarioCompleto.rol?.nombre || "", // aplanado
                }); // llena el formulario, aplnando el rol
    } catch (error) {
      console.error("No se pudo cargar el usuario:", error);
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

    <AdminLayout title="USUARIOS" actions={
      <ButtonLight type="accept" onClick={() => openModal("agregar")}>
          Registrar nuevo
        </ButtonLight>
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

        {modalState.type === "editar" && (
          <UserForm mode="edit"
          formData={formData}
          setFormData={setFormData}
          closeModal={closeModal}  
          />
        )}

        {modalState.type === "detalle" && (
          <UserDetail formData={formData}/>
        )}
        {modalState.type === "eliminar" && (
          <UserDelete formData={formData}
          closeModal={closeModal}/>
        )}
        {modalState.type === "reseteo" && (
            <UserReset formData={formData}
            closeModal={closeModal}/>
          )
        }
      </Modal>
    </AdminLayout>

    
  );
}

export default Usuarios;
