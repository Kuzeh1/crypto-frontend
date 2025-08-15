import React, { useEffect, useState } from "react";
import { fetchPrices, fetchMarketChart } from "./api/crypto";
import CurrencySelector from "./components/CurrencySelector";
import PriceList from "./components/PriceList";
import PriceChart from "./components/PriceChart";

export default function App() {
  const [prices, setPrices] = useState({});
  const [currency, setCurrency] = useState("usd");
  const [chartData, setChartData] = useState(null);
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");

  useEffect(() => {
    async function loadPrices() {
      const data = await fetchPrices(["bitcoin","ethereum"], currency);
      setPrices(data);
    }
    loadPrices();
  }, [currency]);

  useEffect(() => {
    async function loadChart() {
      const data = await fetchMarketChart(selectedCoin, currency, 7);
      setChartData(data);
    }
    loadChart();
  }, [selectedCoin, currency]);

  return (
    <div>
      <h1>Crypto Tracker</h1>
      <CurrencySelector currency={currency} setCurrency={setCurrency} />
      <PriceList prices={prices} />
      <h2>{selectedCoin} 7-Day Chart</h2>
      <PriceChart chartData={chartData} coin={selectedCoin} />
    </div>
  );
}
