"use client";
import { useStock } from '../StockContext';
import { useRouter } from 'next/navigation';
import StockPreview from "@/components/StockPreview";
import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 10px 20px;
    background-color:rgb(29, 133, 252);
    color: white;
    border: 2px solid #000000;
    border-radius: 4px;
    cursor: pointer;
    font-size: calc(10px + 0.5vw);
    margin: 20px auto;
    &:hover {
        background-color:rgb(0, 126, 252);
    }
`;

const StyledB = styled.b`
    color: #005bb5;
`;

const StyledB2 = styled.b<{ value: number }>`
    color: ${props => props.value > 0 ? '#4CAF50' : props.value < 0 ? '#F44336' : '#000000'};
`;

export default function StockDetailsPage() {
  const { stockData } = useStock();
  const symbol = stockData.length > 0 ? stockData[0].symbol : '';
  const router = useRouter();
  const delta = stockData.length > 0 ? stockData[0].close - stockData[29].close : 0;
  const deltaPercent = stockData.length > 0 ? (delta / stockData[29].close) * 100 : 0;
  
  if (stockData.length === 0) {
    return (
      <div style={{textAlign: "center", padding: "20px"}}>
        <p>No stock data available.</p>
        <StyledButton onClick={() => router.push('/')}>Back to Home</StyledButton>
      </div>
    );
  }

  return (
    <div style={{textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", padding: "20px"}}>
      <h2>Stock price delta since {new Date(stockData[29].date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}: <StyledB2 value={delta}>${delta.toFixed(2)} ({deltaPercent.toFixed(2)}%)</StyledB2></h2>
      <h1>Last 30 Days of Stock Details for <StyledB>{symbol}</StyledB></h1>
      {stockData.length > 0 ? (stockData.map((stock, index) => (<StockPreview key={index} stock={stock}/>))) : (<p>No stock data available.</p>)}
      <StyledButton onClick={() => router.push('/')}>Back to Home</StyledButton>
    </div>
  );
}