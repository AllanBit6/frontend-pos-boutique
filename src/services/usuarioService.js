import axios from "axios"

const API = import.meta.env.VITE_API_URL

export const obtenerUsuarios = async () => {

    try{
        const res = await axios.get(`${API}/api/v1/usuarios`, {withCredentials:true})
        console.log(res.data)
        return res.data;
    }catch(error){
        console.log(error)
    }
    
}