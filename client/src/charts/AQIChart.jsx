import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function AQIChart({ data }) {
  return (
    <BarChart width={500} height={300} data={data}>
      <XAxis dataKey="city" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="aqi" fill="#38bdf8" />
    </BarChart>
  );
}