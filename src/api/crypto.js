// frontend/src/api/crypto.js
import axios from "axios";

// Automatically pick the right base URL
// - In dev: uses CRA proxy to localhost:8000
// - In production (Vercel): uses environment variable
const API_BASE =
  process.env.REACT_APP_API_BASE ||
  (process.env.NODE_ENV === "development" ? "" : "https://crypto-backend-b4l8.onrender.com");

export async function fetchPrices(ids, vsCurrency = "usd", includeChange = true) {
  const res = await axios.get(`${API_BASE}/api/prices`, {
    params: {
      ids: ids.join(","),
      vs_currency: vsCurrency,
      include_24hr_change: includeChange,
    },
  });
  return res.data;
}

export async function fetchMarketChart(coinId, vsCurrency = "usd", days = 7) {
  const res = await axios.get(`${API_BASE}/api/market_chart/${coinId}`, {
    params: { vs_currency: vsCurrency, days },
  });
  return res.data;
}
