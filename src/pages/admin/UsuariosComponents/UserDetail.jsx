import "./UserForm.css";

function UserDetail({ formData }) {
  return (
    <div className="form-container">

      <label>ID</label>
      <input type="text" value={formData.id_usuario || ""} readOnly />

      <label>Nombre</label>
      <input type="text" value={formData.nombre || ""} readOnly />

      <label>Apellido</label>
      <input type="text" value={formData.apellido || ""} readOnly />

      <label>Usuario</label>
      <input type="text" value={formData.user_name || ""} readOnly />

      <label>Rol</label>
      <input type="text" value={formData.rol || ""} readOnly />

    </div>
  );
}

export default UserDetail;