import { LineChart, ReferenceLine, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";


function HistoryGraph({data}) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <ReferenceLine y={500} stroke="red" label="Objetivo mensual" />
        <Line dataKey="ventas" 
              type="monotone" 
              stroke="#4472C4" 
              strokeWidth={2}
              />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default HistoryGraph;