import axios from  "axios"

const API = import.meta.env.VITE_API_URL;


//SELECT
export const obtenerProductos = async() => {
    try{
        const res = await axios.get(`${API}/api/v1/productos`, {withCredentials:true})


        const mapProduct = (product) => ({
            id_producto: product.id_producto,
            nombre: product.nombre,
            marca: product.marca?.nombre || "Sin marca",
            color: product.color?.nombre || "Sin color",
            talla: product.talla?.nombre || "Sin talla",
            stock: product.stock,
            precio_venta: product.precio_venta,
            precio_compra: product.precio_compra
            });

        const product_model = res.data.map(mapProduct);

        return product_model;
    }catch(error){
        console.log(error);
    }

}

export const obtenerProductosPorID = async(id) => {

    try{
        const res = await axios.get(`${API}/api/v1/productos/${id}`, {withCredentials:true});
        const product = res.data;

        const product_model = {
            id_producto: product.id_producto,
            nombre: product.nombre,
            marca: product.marca?.nombre || "Sin marca",
            color: product.color?.nombre || "Sin color",
            talla: product.talla?.nombre || "Sin talla",
            stock: product.stock,
            precio_venta: product.precio_venta,
            precio_compra: product.precio_compra
            };
        

            console.log(product_model)
        return product_model;

    }catch(error){
        console.log(error)
    }
}


//CREATE
export const crearProducto = async (new_product) => {
    try{
        const res = await axios.post(`${API}/api/v1/productos`, new_product, {withCredentials:true})
        return res.data;
    }catch(error){
        console.error("Error creando producto:", error.response?.data || error.message);
        throw error;
    }
}

//UPDATE
export const actualizarProducto = async (producto, id) => {
    try{
        const res = await axios.patch(`${API}/api/v1/productos/${id}`,producto, {withCredentials:true})
        return res.data;
    }catch(error){
        console.error("Error actualizando producto:", error.response?.data || error.message);
        throw error;   
    }

}

//DELETE
export const desactivarProducto = async (id) => {
    try{
        const res = await axios.delete(`${API}/api/v1/productos/${id}`, {withCredentials:true});
        return res.data
    }catch(error){
        console.error("Error eliminando producto:", error.response?.data || error.message);
        throw error; 
    }
}