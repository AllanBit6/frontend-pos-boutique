import "./ProductForm.css";
import BarcodeCanvas from "./BarcodeCanvas";

function ProductDetail({ formData }) {


  return (
    <>

        <div className="form-container">
            <div className="h-row-form">
              <article className="form-left-side">
                <label>ID</label>
                <input
                  type="text"
                  value={formData.id_producto || ""}
                  readOnly
                />

                <label>Nombre del producto</label>
                <input
                  type="text"
                  value={formData.nombre || ""}
                  readOnly
                />

                <label>Marca</label>
                <input
                  type="text"
                  value={formData.marca || ""}
                  readOnly
                />

                <div className="h-row-form">
                  <label>Color</label>
                  <label>Talla</label>
                </div>

                <div className="h-row-form">
                  <input
                    type="text"
                    value={formData.color || ""}
                    readOnly
                  />

                  <input
                    type="text"
                    value={formData.talla || ""}
                    readOnly
                  />
                </div>

                <label>Stock</label>
                <input
                  type="number"
                  value={formData.stock || ""}
                  readOnly
                />

                <div className="h-row-form">
                  <label>Precio compra</label>
                  <label>Precio venta</label>
                </div>

                <div className="h-row-form">
                  <input
                    type="number"
                    value={formData.precio_compra || ""}
                    readOnly
                  />

                  <input
                    type="text"
                    value={formData.precio_venta || ""}
                    readOnly
                  />
                </div>
              </article>

              <article className="form-right-side">
                <img
                  src={"#"}
                  alt=""
                  className="form-prev-img"
                />

                
                <label>Descripcion</label>
                <textarea
                  name="Descripcion"
                  value={formData.descripcion || ""}
                  readOnly
                />
                
                
                <div>
                    <BarcodeCanvas productID={formData.id_producto} />
                </div>
              </article>
            </div>
        </div>
    </>
    
  );
}

export default ProductDetail;