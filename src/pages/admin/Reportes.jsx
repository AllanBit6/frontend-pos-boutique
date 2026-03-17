import ReportLayout from "./ReportesComponents/ReportLayout";
import GraphCard from "./ReportesComponents/GraphCard";
import StatCard from "./ReportesComponents/StatCard";


const dataMes = [
  { name: "Enero", ventas: 400 },
  { name: "Febrero", ventas: 300 },
  { name: "Marzo", ventas: 450 },
  { name: "Abril", ventas: 550 },
  { name: "Mayo", ventas: 575 },
  { name: "Junio", ventas: 500 },
  { name: "Julio", ventas: 40 },
  { name: "Agosto", ventas: 550 },
  { name: "Septiembre", ventas: 100 },
  { name: "Octubre", ventas: 400 },
  { name: "Noviembre", ventas: 600 },
  { name: "Diciembre", ventas: 1200 }
];

const dataDia = [
  { name: "Lunes", ventas: 400 },
  { name: "Martes", ventas: 300 },
  { name: "Miercoles", ventas: 500 },
  { name: "Jueves", ventas: 450 },
  { name: "Viernes", ventas: 600},
  { name: "Sabado", ventas:  100}
];

const dataProd = [
  { name: "Pantalones", ventas: 400 },
  { name: "Camisas", ventas: 300 },
  { name: "Sueteres", ventas: 500 },
  { name: "Calcetines", ventas:  100},
  { name: "Gorras", ventas: 50 },
];

function Reportes(){
    return(
        <ReportLayout title="REPORTES">
            <div className="stats-grid">
                <StatCard title="Ingresos Hoy" actualValue={1200} oldValue={1000} showDate/>
                <StatCard title="Ventas Hoy" actualValue={0} oldValue={1} showDate/>

                <StatCard title="Ingresos del Mes" actualValue={30} oldValue={10} />
                <StatCard title="Ticket Promedio" actualValue={0} oldValue={1} />
            </div>
            <div className="reports-grid">
                <GraphCard type="bar" data={dataDia} title="Ventas por dia"/>
                <GraphCard type="radial" data={dataProd} title="Top Productos"/>
                <GraphCard type="history" data={dataMes} title="Ventas por mes"/>
            </div>
        </ReportLayout>
    )
}

export default Reportes;