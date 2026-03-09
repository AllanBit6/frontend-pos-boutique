import axios from "axios";

const API = import.meta.env.VITE_API_URL

export const login = async(user_name, password) => {

    const loginData = {
        user_name,
        password
    }


    try{
        const res = await axios.post(`${API}/api/v1/auth/login`, 
                                 loginData, 
                                 {withCredentials:true})

        return res.data;

    }catch(error){
        console.error("Error en login:", error.response?.data || error.message);
        throw error;
    }

}