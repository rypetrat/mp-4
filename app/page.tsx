"use client";
import { useState } from "react";
import getStockData from "@/lib/getStockData"; 
import StockDisplay from "@/components/StockDisplay";
import { StockProps } from "@/types";

export default function Home() {
  const [symbol, setSymbol] = useState("");
  const [stockData, setStockData] = useState<StockProps[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await getStockData(symbol);
      setStockData(data); 
    } catch (error) {
      console.error("Error fetching stock data:", error);
    } 
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Stock Data Viewer</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={symbol} onChange={(e) => setSymbol(e.target.value)} placeholder="Stock Symbol" required />
        <button type="submit">Get Stock Data</button>
      </form>

      {stockData.length > 0 && <StockDisplay inputStock={stockData} />}
    </div>
  );
}