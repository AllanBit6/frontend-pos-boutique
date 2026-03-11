import axios from "axios";

const API = import.meta.env.VITE_API_URL


//Para controlar el inicio de sesion
export const login = async(user_name, password) => {

    const loginData = {
        user_name,
        password
    }


    try{
        const res = await axios.post(`${API}/api/v1/auth/login`, 
                                 loginData, 
                                 {withCredentials:true})
        console.log(res.data);
        return res.data;

    }catch(error){
        console.error("Error en login:", error.response?.data || error.message);
        throw error;
    }

}


export const changePassword = async (password_actual, password_nuevo) => {

  const res = await axios.patch(
    `${API}/api/v1/usuarios/change-password`,
    {
      password_actual,
      password_nuevo
    },
    { withCredentials: true }
  );

  return res.data;
};


//Para obtener informacion del inicio de sesion
export const getMe = async () => {
  const res = await axios.get(`${API}/api/v1/auth/me`, {
    withCredentials: true
  });

  return res.data;
};


export const logout = async () => {
    const res = await axios.post(
        `${API}/api/v1/auth/logout`,
        {},
        { withCredentials: true }
    );

    return res.data;
};