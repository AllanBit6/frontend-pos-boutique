import "./ProductForm.css";
import { sileo } from "sileo";
import { desactivarProducto } from "../../../services/inventarioService";

function ProductDelete({ formData, closeModal }) {

  const handleDelete = async (e) => {
    e.preventDefault();
    try{
      const promise = desactivarProducto(formData.id_producto)


      await sileo.promise(promise, {
        loading: {
          title: "Eliminando producto",
          description: "Guardando información..."
        },
        success: {
          title: "Producto desactivado",
          description: "El producto se desactivo correctamente",
          duration: 1500
        },
        error: {
          title: "Error",
          description: "No se pudo desactivar el producto",
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

      <p className="">¿Seguro que deseas eliminar este producto?</p>

      <strong>
        <ul>
          <li>{formData.nombre}</li>
          <li>{formData.color}</li>
          <li>{formData.talla}</li>
          <li>{formData.precio_venta}</li>
        </ul>
      </strong>
      <button type="submit" className="btn-light caution">
        Eliminar
      </button>

    </form>
  );
}

export default ProductDelete;