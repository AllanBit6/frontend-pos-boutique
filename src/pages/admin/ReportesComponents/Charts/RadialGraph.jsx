import { PieChart,Cell, Legend, Pie, Tooltip, ResponsiveContainer, LabelList } from "recharts";
import { chartColors } from "./CharColors";


function BarGraph({data}) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart data={data}>
        <Tooltip />
        <LabelList dataKey="value" position="top"/>
        <Legend/>
        <Pie dataKey="ventas" nameKey="name" label>
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={chartColors.palette[index % chartColors.palette.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default BarGraph;