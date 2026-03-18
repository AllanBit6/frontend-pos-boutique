import { useState } from "react";
import "./UserForm.css";
import { crearUsuario, actualizarUsuario } from "../../../services/usuarioService";
import { sileo } from "sileo";
import CustomFileInput from "../../../components/CustomFileInput";

function UserForm({ mode, formData, setFormData, closeModal }) {

  const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const { 
    id_usuario,
    nombre,
    apellido,
    user_name,
    password,
    rol_id
  } = formData;

  const userData = {
    nombre,
    apellido,
    user_name,
    password,
    rol_id
  };

  try {

    if (mode === "create") {

      const promise = crearUsuario(userData);

      await sileo.promise(promise, {
        loading: {
          title: "Creando usuario",
          description: "Guardando información..."
        },
        success: {
          title: "Usuario creado",
          description: "El usuario se registró correctamente",
          duration: 1500
        },
        error: {
          title: "Error",
          description: "No se pudo crear el usuario",
          duration: 1500
        }
      });

    } else {

      const userDataUpdate = {
        nombre:userData.nombre,
        apellido:userData.apellido,
        user_name:userData.user_name,
        rol_id:userData.rol_id
      };

      const promise = actualizarUsuario(userDataUpdate, id_usuario);

      await sileo.promise(promise, {
        loading: {
          title: "Actualizando usuario",
          description: "Guardando cambios..."
        },
        success: {
          title: "Usuario actualizado",
          description: "Los cambios se guardaron correctamente",
          duration: 1500
        },
        error: {
          title: "Error",
          description: "No se pudo actualizar el usuario",
          duration: 1500
        }
      });

    }

    closeModal();

  } catch (error) {
    console.error(error);
  }
};




  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="h-row-form">

        <article className="form-left-side">

          {mode === "edit" && (
            <>
              <label>ID</label>
              <input
                name="id_usuario"
                type="text"
                value={formData.id_usuario || ""}
                readOnly
              />
            </>
          )}

          <label>Nombre del Usuario</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre || ""}
            onChange={handleChange}
            required
          />

          <label>Apellido</label>
          <input
            type="text"
            name="apellido"
            value={formData.apellido || ""}
            onChange={handleChange}
            required
          />

          <label>Nombre de usuario</label>
          <input
            type="text"
            name="user_name"
            value={formData.user_name || ""}
            onChange={handleChange}
            required
          />

          {mode === "create" && (
            <>
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password || ""}
              onChange={handleChange}
              required
            />
            </>
          )
          }
          

          <label>Rol</label>
          <select
            name="rol_id"
            value={formData.rol_id || ""}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione rol</option>
            <option value="seed-admin-rol">Administrador</option>
            <option value="seed-bodeguero-rol">Bodeguero</option>
            <option value="seed-vendedor-rol">Vendedor</option>
          </select>

        </article>

        <article className="form-right-side">

          <img
            src={selectedImage || "#"}
            alt=""
            className="form-prev-img"
          />
          
          <CustomFileInput onFileSelect={(file) => {
            setSelectedImage(URL.createObjectURL(file));
          }}/>

        </article>

      </div>

      <button type="submit" className="btn-light accept">
        {mode === "create" ? "Guardar usuario" : "Guardar cambios"}
      </button>

    </form>
  );
}

export default UserForm;