import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { chartColors } from "./CharColors";


function BarGraph({data}) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="ventas" fill={chartColors.primary}/>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarGraph;