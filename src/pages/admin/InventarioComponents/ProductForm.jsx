import { useState } from "react";
import "./ProductForm.css";
import { crearProducto, actualizarProducto } from "../../../services/inventarioService";
import { sileo } from "sileo";
import CustomFileInput from "../../../components/CustomFileInput";

function ProductForm({ mode, formData, setFormData, closeModal }) {

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
    id_producto,
    nombre,
    color,
    marca,
    talla,
    stock,
    precio_venta,
    precio_compra
  } = formData;

  const productData = {
    nombre,
    color,
    marca,
    talla,
    stock,
    precio_venta,
    precio_compra
  };

  try {

    if (mode === "create") {

      const promise = crearProducto(productData);

      await sileo.promise(promise, {
        loading: {
          title: "Creando producto",
          description: "Guardando información..."
        },
        success: {
          title: "Producto creado",
          description: "El producto se registró correctamente",
          duration: 1500
        },
        error: {
          title: "Error",
          description: "No se pudo crear el producto",
          duration: 1500
        }
      });

    } else {

      const userDataUpdate = {
        nombre:productData.nombre,
        color:productData.color,
        marca:productData.marca,
        talla:productData.talla,
        stock:productData.stock,
        precio_venta:productData.precio_venta,
        precio_compra:productData.precio_compra
      };

      const promise = actualizarProducto(userDataUpdate, id_producto);

      await sileo.promise(promise, {
        loading: {
          title: "Actualizando producto",
          description: "Guardando cambios..."
        },
        success: {
          title: "Producto actualizado",
          description: "Los cambios se guardaron correctamente",
          duration: 1500
        },
        error: {
          title: "Error",
          description: "No se pudo actualizar el producto",
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
                    name="id_producto"
                    type="text"
                    value={formData.id_producto || ""}
                    readOnly
                  />
                </>
              )}


                <label>Nombre del producto</label>
                <input type="text"
                      name="nombre"
                      value={formData.nombre || ""}
                      onChange={handleChange}
                      required/>

                <label>Marca</label>
                <input type="text"
                      name="marca"
                      value={formData.marca || ""}
                      onChange={handleChange}
                      required />

                <div className="h-row-form">
                  <label>Color</label>

                  <label>Talla</label>
                </div>

                <div className="h-row-form">
                  <input type="text"
                        name="color"
                        value={formData.color || ""}
                        onChange={handleChange}
                        required />

                  <input type="number"
                        name="talla"
                        value={formData.talla || ""}
                        onChange={handleChange}
                        required
                        min={0} />

                </div>

                <label>Stock</label>
                <input type="number"
                      name="stock"
                      value={formData.stock || ""}
                      onChange={handleChange}
                      required
                      min={0} />

                <div className="h-row-form">
                  <label>Precio compra</label>

                  <label>Precio venta</label>

                </div>
                <div className="h-row-form">
                  <input type="number"
                        name="precio_compra"
                        value={formData.precio_compra || ""}
                        onChange={handleChange}
                        required
                        min={0} />

                  <input type="number"
                        name="precio_venta"
                        value={formData.precio_venta || ""}
                        onChange={handleChange}
                        required
                        min={0} />

                </div>
              </article>
              <article className="form-right-side">

                <img
                  src={selectedImage || "https://fastly.picsum.photos/id/53/1280/1280.jpg?hmac=QP5opo-oENp5iFwsSiWH8azQuR0w0bwps6MT6yvhKwA"}
                  alt=""
                  className="form-prev-img"
                />
                
                <CustomFileInput onFileSelect={(file) => {
                  setSelectedImage(URL.createObjectURL(file));
                }}/>
                


                <label>Descripcion</label>
                <textarea name = "detalle"
                          value = {formData.detalle || ""}
                          onChange={handleChange}
                          required></textarea>

              </article>
            </div>

            <button type="submit" className="btn-light accept">
              Guardar
            </button>
          </form>


  );
}

export default ProductForm;