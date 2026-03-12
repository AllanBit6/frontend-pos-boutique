import axios from "axios"

const API = import.meta.env.VITE_API_URL



//SELECT
export const obtenerUsuarios = async () => {

    try{
        const res = await axios.get(`${API}/api/v1/usuarios`, {withCredentials:true})
        return res.data;
    }catch(error){
        console.log(error);
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

//CREATE
export const crearUsuario = async (new_user) => {
    try{
        const res = await axios.post(`${API}/api/v1/usuarios`, new_user, {withCredentials:true})
        return res.data;
    }catch(error){
        console.error("Error creando usuario:", error.response?.data || error.message);
        throw error;
    }
}

//UPDATE
export const actualizarUsuario = async (user, id) => {
    try{
        const res = await axios.patch(`${API}/api/v1/usuarios/${id}`,user, {withCredentials:true})
        return res.data;
    }catch(error){
        console.error("Error actualizando usuario:", error.response?.data || error.message);
        throw error;   
    }

}

//DELETE
export const desactivarUsuario = async (id) => {
    try{
        const res = await axios.delete(`${API}/api/v1/usuarios/${id}`, {withCredentials:true});
        return res.data
    }catch(error){
        console.error("Error eliminando usuario:", error.response?.data || error.message);
        throw error; 
    }

}

//RESETEAR
export const resetearUsuarioPassword = async (id) => {
        const password = {"password_nuevo":"temporal123"};

        const res = await axios.patch(`${API}/api/v1/usuarios/${id}/reset-password`, password,{withCredentials: true});
        
        return res.data;
}