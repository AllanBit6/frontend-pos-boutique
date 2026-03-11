import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {

  const { user, loading } = useAuth();

  if (loading) return <p>Cargando...</p>;

  if (!user) return <Navigate to="/login" replace />;

  if(user.primer_login) return <Navigate to="/cambiar-password"/>;

  return children;
}

export default ProtectedRoute;