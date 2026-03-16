import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Lunes", ventas: 400 },
  { name: "Martes", ventas: 300 },
  { name: "Miercoles", ventas: 500 },
  { name: "Jueves", ventas: 450 },
  { name: "Viernes", ventas: 600},
  { name: "Sabado", ventas:  100}
];

function BarGraph() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="ventas" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarGraph;