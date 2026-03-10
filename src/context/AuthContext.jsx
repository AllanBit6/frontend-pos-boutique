import { createContext, useContext, useEffect, useState } from "react";
import { getMe } from "../services/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const checkAuth = async () => {
      try {
        const res = await getMe();
        setUser(res);
      } catch (err) {
        console.log(err)
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();

  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth(){
  return useContext(AuthContext);
}