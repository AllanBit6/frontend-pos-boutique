import axios from "axios"

const API = import.meta.env.VITE_API_URL

export const obtenerUsuarios = async () => {

    try{
        const res = await axios.get(`${API}/api/v1/usuarios`, {withCredentials:true})
        return res.data;
    }catch(error){
        console.log(error);
    }
    
}

export const crearUsuario = async (new_user) => {
    try{
        const res = await axios.post(`${API}/api/v1/usuarios`, new_user, {withCredentials:true})
        return res.data;
    }catch(error){
        console.error("Error creando usuario:", error.response?.data || error.message);
        throw error;
    }
}

export const actualizarUsuario = async (user, id) => {
    try{
        const res = await axios.patch(`${API}/api/v1/usuarios/${id}`,user, {withCredentials:true})
        return res.data;
    }catch(error){
        console.error("Error actualizando usuario:", error.response?.data || error.message);
        throw error;   
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