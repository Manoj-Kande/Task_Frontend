"use client";
import React from "react";

import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJs.register(ArcElement, Tooltip, Legend);

const Chart = ({categoryList}:ChartProps) => {
    const labels=categoryList.map((item)=>item.title)
  const data = {
    labels: labels,
    datasets: [
      {
        data: [25, 75,45],
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
        hoverBackgroundColor: ["#FF6384", "#E0E0E0"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        // position:"right",
        display:false,
        // labels: {
        //     usePointStyle: true,
        //   },
      },
    },
    cutout: "50%",
  };

  return (
    <Doughnut data={data} className="" options={options} />
  );
};

export default Chart;
