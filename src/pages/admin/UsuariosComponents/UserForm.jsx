import { useState } from "react";
import "./UserForm.css";

function UserForm({ mode, formData, setFormData, closeModal }) {

  const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mode === "create") {
      console.log("Crear usuario", formData);
    } else {
      console.log("Editar usuario", formData);
    }

    closeModal();
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

          <label>Rol</label>
          <select
            name="rolNombre"
            value={formData.rolNombre || ""}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione rol</option>
            <option value="Administrador">Administrador</option>
            <option value="Vendedor">Vendedor</option>
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