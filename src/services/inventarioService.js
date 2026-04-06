import axios from  "axios";

const API = import.meta.env.VITE_API_URL;

let datosPrueba = [{
            id_producto: "123456789",
            nombre: "Camisa manga larga",
            marca: "Nike",
            color: "Rojo",
            talla: "32",
            stock: 15,
            detalle:"Holaaa",
            precio_venta: 15,
            precio_compra: 12
            }
            ,
            {
            id_producto: "987654321",
            nombre: "Camisa",
            marca: "Hillfinger",
            color: "Rojo",
            talla: "32",
            stock: 15,
            detalle:"Holaaa",
            precio_venta: 15,
            precio_compra: 12
            },{
            id_producto: "789654123",
            nombre: "Camisa",
            marca: "Nike",
            color: "Naranja",
            talla: "32",
            stock: 15,
            detalle:"Holaaa",
            precio_venta: 15,
            precio_compra: 12
            }
            ,
            {
            id_producto: "321456987",
            nombre: "Camisa",
            marca: "Nike",
            color: "Rojo",
            talla: "32",
            stock: 15,
            detalle: "Pos es un traje",
            precio_venta: 15,
            precio_compra: 12
            }
        ]




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
            detalle: product.detalle,
            precio_venta: product.precio_venta,
            precio_compra: product.precio_compra
            });

        const product_model = res.data.map(mapProduct);
        
        return product_model;
    }catch(error){
        console.log(error);
        return datosPrueba;
    }

}

export const obtenerProductosPorID = async(id) => {
     /*Mock*/
        let dato = {}
        datosPrueba.forEach(element => {
            if(element.id_producto == id){
                dato = element;
            }
        });

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
            detalle: product.detalle,
            precio_venta: product.precio_venta,
            precio_compra: product.precio_compra
            };
        

            console.log(product_model)
        return product_model;

    }catch(error){
        console.log(error)
        return dato;
    }
}


//CREATE
export const crearProducto = async (new_product) => {
    try{
        const res = await axios.post(`${API}/api/v1/productos`, new_product, {withCredentials:true})
        return res.data;
    }catch(error){
        console.error("Error creando producto:", error.response?.data || error.message);
        datosPrueba.push(new_product)
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