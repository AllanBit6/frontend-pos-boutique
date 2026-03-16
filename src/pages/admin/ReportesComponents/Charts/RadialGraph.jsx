import { PieChart,Legend, Pie, Tooltip, ResponsiveContainer, LabelList } from "recharts";

const data = [
  { name: "Pantalones", ventas: 400 },
  { name: "Camisas", ventas: 300 },
  { name: "Sueteres", ventas: 500 },
  { name: "Calcetines", ventas:  100},
  { name: "Gorras", ventas: 50 },
];

function BarGraph() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart data={data}>
        <Tooltip />
        <LabelList dataKey="value" position="top"/>
        <Legend/>
        <Pie dataKey="ventas" label />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default BarGraph;