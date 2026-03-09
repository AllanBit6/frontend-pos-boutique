import axios from "axios"

const API = import.meta.env.VITE_API_URL

export const obtenerUsuarios = async () => {
    const res = await axios.get(`${API}/api/v1/usuarios`)
    return res.data;
}