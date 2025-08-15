// src/components/PriceChart.jsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export default function PriceChart({ chartData, coin }) {
  if (!chartData) return <p>Loading chart...</p>;

  const data = {
    labels: chartData.prices.map(([timestamp]) =>
      new Date(timestamp).toLocaleDateString()
    ),
    datasets: [
      {
        label: coin,
        data: chartData.prices.map(([_, price]) => price),
        borderColor: "blue",
        fill: false,
      },
    ],
  };

  // Use a unique key so Chart.js knows to recreate the chart on prop change
  return <Line key={coin} data={data} />;
}
