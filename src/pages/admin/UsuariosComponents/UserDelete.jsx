import "./UserForm.css";

function UserDelete({ formData, closeModal }) {

  const handleDelete = (e) => {
    e.preventDefault();

    console.log("Eliminar usuario", formData.id_usuario);

    closeModal();
  };

  return (
    <form className="form-container" onSubmit={handleDelete}>

      <p>¿Seguro que deseas eliminar este usuario?</p>

      <strong>
        {formData.nombre} {formData.apellido}
      </strong>

      <button type="submit" className="btn-light caution">
        Eliminar
      </button>

    </form>
  );
}

export default UserDelete;