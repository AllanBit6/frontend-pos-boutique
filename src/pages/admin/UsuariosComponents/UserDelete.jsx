import "./UserForm.css";
import { sileo } from "sileo";
import { desactivarUsuario } from "../../../services/usuarioService";

function UserDelete({ formData, closeModal }) {

  const handleDelete = async (e) => {
    e.preventDefault();
    try{
      const promise = desactivarUsuario(formData.id_usuario)


      await sileo.promise(promise, {
        loading: {
          title: "Eliminando usuario",
          description: "Guardando información..."
        },
        success: {
          title: "Usuario desactivado",
          description: "El usuario se desactivo correctamente",
          duration: 1500
        },
        error: {
          title: "Error",
          description: "No se pudo desactivar el usuario",
          duration: 1500
        }
      });
    }catch(error){
      console.error(error);
    }
    

    

    closeModal();
  };

  return (
    <form className="form-container" onSubmit={handleDelete}>

      <p className="">¿Seguro que deseas eliminar este usuario?</p>

      <strong>
        <ul>
          <li>{formData.nombre}</li>
          <li>{formData.apellido}</li>
          <li>{formData.user_name}</li>
          <li>{formData.rol}</li>
        </ul>
      </strong>
      <button type="submit" className="btn-light caution">
        Eliminar
      </button>

    </form>
  );
}

export default UserDelete;