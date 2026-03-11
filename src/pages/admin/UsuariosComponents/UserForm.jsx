import { useState } from "react";
import "./UserForm.css";
import { crearUsuario } from "../../../services/usuarioService";

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

  try {

    if (mode === "create") {

      await crearUsuario(formData);

    } else {

      console.log("Editar usuario", formData);

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

          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            value={formData.password || ""}
            onChange={handleChange}
            required
          />

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
        {mode === "create" ? "Guardar usuario" : "Guardar cambios"}
      </button>

    </form>
  );
}

export default UserForm;