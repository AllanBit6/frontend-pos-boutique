import "./Inventario.css";
import DataTable from "../../components/DataTable";
import SectionHeader from "../../components/SectionHeader";
import Searchbar from "../../components/Searchbar";
import ButtonLight from "../../components/ButtonLight";
import Modal from "../../components/Modal";
import { obtenerUsuariosPorID } from "../../services/usuarioService";
import { Toaster, sileo } from "sileo";

import { useState } from "react";
import { useEffect } from "react";

import {
  faPencil,
  faTrash,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { obtenerUsuarios } from "../../services/usuarioService";



// Columnas a mostrar
const columns = [
  "id_usuario",
  "nombre",
  "apellido",
  "user_name",
];



//Mapa de iconos
const iconMap = {
  pencil: faPencil,
  trash: faTrash,
  info: faCircleInfo,
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
  ];


  //Informacion para la tabla
  const [data, setData] = useState([]);

useEffect(() => {

  const promise = obtenerUsuarios().then((usuarios) => {
      if (usuarios) setData(usuarios);
    });

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

  //Funcion para recoger la info de la fila y mandarla al formulario
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  
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

    setSelectedImage(null);
  };

  //Estado para cambiar la imagen de previsualizacion
  const [selectedImage, setSelectedImage] = useState(null);









  //Regreso del render
  return (
    <div className="inventario-wrapper">
      <SectionHeader>USUARIOS</SectionHeader>

      <Searchbar />

      <div className="inventario-table">
        <div className="products-tables">
          <DataTable
            columns={columns}
            data={data}
            actions={actions}
            iconMap={iconMap}
          />
        </div>
      </div>

      <div className="operations-wrapper">
        <ButtonLight type="accept" onClick={() => openModal("agregar")}>
          Registrar nuevo
        </ButtonLight>

      </div>

      <Modal isOpen={modalState.isOpen} onClose={closeModal} title="Usuarios">
        {modalState.type === "agregar" && (
          <form
            className="form-container"
            onSubmit={(e) => {
              e.preventDefault();
              
              //Enviar a API  

              closeModal();
            }}
          >
            <div className="h-row-form">
              <article className="form-left-side">
                <label>Nombre del Usuario</label>
                <input type="text" required />
                <label>Apellido</label>
                <input type="text" required />
                <label>Nombre de usuario</label>
                <input type="text" required />

                <label>Rol</label>
                <select required>
                  <option value="">Administrador</option>
                  <option value="">Vendedor</option>
                </select>

              </article>
              <article className="form-right-side">
                <img
                  src={selectedImage || "#"}
                  alt=""
                  className="form-prev-img"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) setSelectedImage(URL.createObjectURL(file));
                  }}
                />

              </article>
            </div>

            <button type="submit" className="btn-light accept">
              Guardar
            </button>
          </form>
        )}

        {modalState.type === "editar" && (
          <form
            className="form-container"
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Enviar a API:", formData);
              closeModal();
            }}
          >
            <div className="h-row-form">
              <article className="form-left-side">
                <label>ID</label>
                <input
                  type="text"
                  name="id_usuario"
                  value={formData.id_usuario || ""}
                  readOnly
                />

                <label>Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre || ""}
                  onChange={handleChange}
                  required
                />

                <label>apellido</label>
                <input
                  type="text"
                  name="apellido"
                  value={formData.apellido || ""}
                  onChange={handleChange}
                  required
                />

                <label>user_name</label>
                <input
                  type="text"
                  name="user_name"
                  value={formData.user_name || ""}
                  onChange={handleChange}
                  required
                />

                <label>Rol</label>        
                <input
                  type="text"
                  name="rolNombre"
                  value={formData.rolNombre || ""}
                  onChange={handleChange}
                  required
                />

              </article>

              <article className="form-right-side">
                <img
                  src={selectedImage || "#"}
                  alt=""
                  className="form-prev-img"
                />

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) setSelectedImage(URL.createObjectURL(file));
                  }}
                />

              </article>
            </div>

            <button type="submit" className="btn-light accept">
              Guardar
            </button>
          </form>
        )}

        {modalState.type === "detalle" && (
          <form
            className="form-container"
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Enviar a API:", formData);
              closeModal();
            }}
          >
            <div className="h-row-form">
              <article className="form-left-side">
                <label>ID</label>
                <input
                  type="text"
                  name="id_usuario"
                  value={formData.id_usuario || ""}
                  readOnly
                />

                <label>Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre || ""}
                  readOnly
                />

                <label>apellido</label>
                <input
                  type="text"
                  name="apellido"
                  value={formData.apellido || ""}
                  readOnly
                />

                <label>user_name</label>
                <input
                  type="text"
                  name="user_name"
                  value={formData.user_name || ""}
                  readOnly
                />

                <label>Rol</label>        
                <input
                  type="text"
                  name="rolNombre"
                  value={formData.rolNombre || ""}
                  readOnly
                />

              </article>

            </div>

          </form>
        )}
        {modalState.type === "eliminar" && (
          <form
            className="form-container"
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Enviar a API:", formData);
              closeModal();
            }}
          >
            <div className="h-row-form">
              <article className="form-left-side">
                <label>ID</label>
                <input
                  type="text"
                  name="id_usuario"
                  value={formData.id_usuario || ""}
                  readOnly
                />

                <label>Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre || ""}
                  readOnly
                />

                <label>apellido</label>
                <input
                  type="text"
                  name="apellido"
                  value={formData.apellido || ""}
                  readOnly
                />

                <label>user_name</label>
                <input
                  type="text"
                  name="user_name"
                  value={formData.user_name || ""}
                  readOnly
                />

                <label>Rol</label>        
                <input
                  type="text"
                  name="rolNombre"
                  value={formData.rolNombre || ""}
                  readOnly
                />

              </article>

            </div>
            <button type="submit" className="btn-light caution">
              Eliminar
            </button>
          </form>
        )}
      </Modal>
    </div>
  );
}

export default Usuarios;
