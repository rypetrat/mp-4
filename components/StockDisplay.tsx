"use client";
import { StockProps } from "@/types";
import { useState, useEffect } from "react";
import StockPreview from "./StockPreview";

export default function StockDisplay({inputStock}: {inputStock: StockProps[]}) {
  const [stocks, setStocks] = useState(inputStock);
  useEffect(() => { setStocks(inputStock) }, [inputStock]);

  return (
    <div>
      
      {stocks.map((stock) => (
        <StockPreview key={stock.date} stock={stock} />
      ))}
    </div>
  );
}