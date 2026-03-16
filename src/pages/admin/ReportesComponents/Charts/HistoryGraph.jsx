import { LineChart, ReferenceLine, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Enero", ventas: 400 },
  { name: "Febrero", ventas: 300 },
  { name: "Marzo", ventas: 500 },
  { name: "Abril", ventas: 500 },
  { name: "Mayo", ventas: 500 },
  { name: "Junio", ventas: 500 },
  { name: "Julio", ventas: 500 }
];

function HistoryGraph() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <ReferenceLine y={500} stroke="red" label="Objetivo diario" />
        <Line dataKey="ventas" type="monotone" stroke="#4472C4"/>
      </LineChart>
    </ResponsiveContainer>
  );
}

export default HistoryGraph;