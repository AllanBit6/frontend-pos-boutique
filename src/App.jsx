import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Cashier from "./pages/Cashier";
import ChangePassword from "./pages/ChangePassword";

import Reportes from "./pages/admin/Reportes";
import Usuarios from "./pages/admin/Usuarios";
import Inventario from "./pages/admin/Inventario";
import Ventas from "./pages/admin/Ventas";
import Inicio from "./pages/admin/Inicio";
import { Toaster } from "sileo";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/cambiar-password" element = {<ChangePassword/>}/>

        <Route path="/admin" element = {
          <ProtectedRoute>
            <Admin/>
          </ProtectedRoute> 
          }>

            <Route index element={<Inicio/>}/>
            <Route path="inventario" element={<Inventario/>}/>
            <Route path="usuarios" element={<Usuarios/>}/>
            <Route path="reportes" element={<Reportes/>}/>
            <Route path="ventas" element={<Ventas/>}/>
          
          
        </Route>
          
        <Route path="/cashier" element = {
          <ProtectedRoute>
            <Cashier/>
          </ProtectedRoute>
          } >
            
        </Route>

      </Routes>
    
    </>
    
  );
}

export default App;