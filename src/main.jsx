import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css"

//Creamos el componente raiz para ejecutar la aplicacion
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    
  <BrowserRouter>
    <App />
  </BrowserRouter>
);