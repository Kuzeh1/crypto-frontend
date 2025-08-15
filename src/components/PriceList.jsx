// src/components/PriceList.jsx
import React from "react";

export default function PriceList({ prices }) {
  if (!prices || Object.keys(prices).length === 0) return <p>Loading prices...</p>;

  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Coin</th>
          <th>Price</th>
          <th>24h Change (%)</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(prices).map(([coin, data]) => (
          <tr key={coin}>
            <td>{coin}</td>
            <td>{data[Object.keys(data)[0]].toLocaleString()}</td>
            <td>{data[Object.keys(data)[0] + "_24h_change"]?.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
