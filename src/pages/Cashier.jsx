import { Routes, Route } from "react-router-dom";
import SidebarCashier from "../components/SidebarCashier";

function Cashier() {
  return (
    <div style={{ display: "flex" }}>
      
      <SidebarCashier />

      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<h2>Nueva Venta</h2>} />
          <Route path="history" element={<h2>Historial</h2>} />
        </Routes>
      </div>

    </div>
  );
}

export default Cashier;