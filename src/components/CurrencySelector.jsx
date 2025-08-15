// src/components/CurrencySelector.jsx
import React from "react";

export default function CurrencySelector({ currency, setCurrency }) {
  return (
    <div>
      <label>Currency: </label>
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="gbp">GBP</option>
      </select>
    </div>
  );
}
