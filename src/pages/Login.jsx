import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    const role = "admin"; // simulado

    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/cashier");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}


export default Login;