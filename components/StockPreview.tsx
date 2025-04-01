import { StockProps } from "@/types";
import styled from "styled-components";

const StyledTable = styled.table`
  border-collapse: separate;
  border-spacing: 40px 0;
  background-color: #005bb5;
  color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

const StyledTh = styled.th`
  color:rgb(32, 32, 32);
`;

const StyledTd = styled.td`
  padding: 10px;
  text-align: center;
`;


export default function StockPreview({stock}: {stock: StockProps}) {
  return (
    <div style={{ marginTop: "50px", display: "flex", justifyContent: "center", padding: "0.25%" }}>
      <StyledTable>
        <thead>
          <tr>
            <StyledTh><u>Date</u></StyledTh>
            <StyledTh><u>Open</u></StyledTh>
            <StyledTh><u>High</u></StyledTh>
            <StyledTh><u>Low</u></StyledTh>
            <StyledTh><u>Close</u></StyledTh>
          </tr>
        </thead>
        <tbody>
          <tr key={stock.date}>
            <StyledTd>{new Date(stock.date).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' })}</StyledTd>
            <StyledTd>${stock.open.toFixed(2)}</StyledTd>
            <StyledTd>${stock.high.toFixed(2)}</StyledTd>
            <StyledTd>${stock.low.toFixed(2)}</StyledTd>
            <StyledTd>${stock.close.toFixed(2)}</StyledTd>
          </tr>
        </tbody>
      </StyledTable>
    </div>
  );
}