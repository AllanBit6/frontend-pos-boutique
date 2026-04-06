import axios from "axios";

const API = import.meta.env.VITE_API_URL;

let datosPrueba = [
    {
        id_venta: "123456789",
        fecha: "24/4/09",
        monto: 200,
        metodo: "Efectivo",
        cajero: "Allan",
        ingreso: 300,
        cambio: 100,
        productos: [
            {
                id_producto: "2222222222",
                nombre:"Camisa",
                marca:"Nike",
                color:"Negro",
                talla:"S",
                precio_venta:150,
                unidades: 2,
                total: 300

            },
            {
                id_producto: "33333333333",
                nombre:"Playera",
                marca:"Hillfinger",
                color:"Blanco",
                talla:"M",
                precio_venta:200,
                unidades: 3,
                total: 600
            }]
    },

];

//SELECT
export const obtenerVentas = async() => {
    try{
        const res = await axios.get(`${API}/api/v1/ventas`, {withCredentials:true})


        const mapSale = (sale) => ({
            id_venta: sale.id_venta,
            fecha: sale.fecha,
            monto: sale.monto,
            metodo: sale.metodo?.nombre,
            cajero: sale.cajero?.nombre,
            
            });

        const sale_model = res.data.map(mapSale);
        
        return sale_model;
    }catch(error){
        console.log(error);
        return datosPrueba;
    }

}

export const obtenerVentasPorID = async(id) => {
     /*Mock*/
        let dato = {}
        datosPrueba.forEach(element => {
            if(element.id_venta == id){
                dato = element;
            }
        });

    try{
        const res = await axios.get(`${API}/api/v1/ventas/${id}`, {withCredentials:true});
        const sale = res.data;

        const sale_model = {
            id_venta: sale.id_venta,
            fecha: sale.fecha,
            monto: sale.monto,
            metodo: sale.metodo?.nombre,
            cajero: sale.cajero?.nombre,
            ingreso: sale.ingreso,
            cambio: sale.cambio,
            productos:sale.productos
            };
        

            console.log(sale_model)
        return sale_model;

    }catch(error){
        console.log(error)
        return dato;
    }
}


//DELETE
export const anularVenta = async (id) => {
    try{
        const res = await axios.delete(`${API}/api/v1/ventas/${id}`, {withCredentials:true});
        return res.data
    }catch(error){
        console.error("Error anulando venta:", error.response?.data || error.message);
        throw error; 
    }
}