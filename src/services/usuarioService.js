import axios from "axios"

const API = import.meta.env.VITE_API_URL

export const obtenerUsuarios = async () => {

    try{
        const res = await axios.get(`${API}/api/v1/usuarios`, {withCredentials:true})
        return res.data;
    }catch(error){
        console.log(error)
    }
    
}

export const obtenerUsuariosPorID = async(id) => {

    try{
        const res = await axios.get(`${API}/api/v1/usuarios/${id}`, {withCredentials:true});
        return res.data;
    }catch(error){
        console.log(error)
    }
}