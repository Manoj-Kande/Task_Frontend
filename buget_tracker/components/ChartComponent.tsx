"use client";

import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "A", value: 30 },
  { name: "B", value: 70 },
];

const COLORS = ["#0088FE", "#00C49F"];

export default function ChartComponent() {
  return (
    <PieChart width={200} height={200}>
      <Pie data={data} cx="50%" cy="50%" outerRadius={60} fill="#8884d8" dataKey="value">
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
    </PieChart>
  );
}
