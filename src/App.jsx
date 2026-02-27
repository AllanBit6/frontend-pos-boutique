import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Cashier from "./pages/Cashier";

import Reportes from "./pages/admin/Reportes";
import Usuarios from "./pages/admin/Usuarios";
import Inventario from "./pages/admin/Inventario";
import Ventas from "./pages/admin/Ventas";
import Inicio from "./pages/admin/Inicio";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element = {<Login/>} />



      <Route path="/admin" element = {<Admin/>}>
      
        <Route index element={<Inicio/>}/>
        <Route path="inventario" element={<Inventario/>}/>
        <Route path="usuarios" element={<Usuarios/>}/>
        <Route path="reportes" element={<Reportes/>}/>
        <Route path="ventas" element={<Ventas/>}/>
        
      </Route>



      <Route path="/cashier" element = {<Cashier/>} />

    </Routes>
  );
}

export default App;