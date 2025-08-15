
// frontend/src/api/crypto.js
import axios from "axios";

// Add this at the very top
const API_BASE = process.env.REACT_APP_API_BASE || "";

export async function fetchPrices(ids, vsCurrency = "usd") {
  const res = await axios.get(`${API_BASE}/api/prices`, {
    params: { ids: ids.join(","), vs_currency: vsCurrency }
  });
  return res.data;
}

export async function fetchMarketChart(coinId, vsCurrency = "usd", days = 7) {
  const res = await axios.get(`${API_BASE}/api/market_chart/${coinId}`, {
    params: { vs_currency: vsCurrency, days }
  });
  return res.data;
}
