import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMe } from "../services/authService";

function ProtectedRoute({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await getMe();
        setUser(res); // <- aquí
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) return <p>Cargando...</p>;

  if (!user) return <Navigate to="/login" replace />;

  return children;
}

export default ProtectedRoute;