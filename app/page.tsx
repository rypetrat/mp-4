"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useStock } from "./StockContext";
import getStockData from "@/lib/getStockData"; 
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 8px;
  margin: 0 10px;
  border: 2px solid #000000;
  border-radius: 4px;
  font-size: calc(7px + 0.5vw);
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color:rgb(29, 133, 252);
  color: white;
  border: 2px solid #000000;
  border-radius: 4px;
  cursor: pointer;
  font-size: calc(10px + 0.5vw);
  &:hover {
    background-color:rgb(0, 126, 252);
  }
`;

export default function Home() {
  const [symbol, setSymbol] = useState("");
  const { setStockData } = useStock();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await getStockData(symbol);
      setStockData(data); 
      router.push(`/stock-details`);
    } catch (error) {
      console.error("Error fetching stock data:", error);
    } 
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", justifyContent: "center", display: "flex", flexDirection: "column"}}>
      <div style={{backgroundColor: "#005bb5", marginBottom: "50px", padding: "2%", paddingBottom: "3%", margin: "0 auto", width: "30%", borderRadius: "6px", border: "3px solid #000000", color: "white", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)"}}>
        <h1>Historical 30 Day Stock Data</h1>
        <form onSubmit={handleSubmit}>
          <StyledInput type="text" value={symbol} onChange={(e) => setSymbol(e.target.value)} placeholder="Stock Symbol" required/>
          <StyledButton type="submit">Get Stock Data</StyledButton>
        </form>
      </div>
    </div>
  );
}