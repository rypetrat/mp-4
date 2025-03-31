import { StockProps } from "@/types";
import styled from "styled-components";

const StyledTable = styled.table`
  border-collapse: separate;
  border-spacing: 15px 0;
  background-color: #005bb5;
  color: white;
`;

const StyledTh = styled.th`
  color: black;
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
                <StyledTh>Date</StyledTh>
                <StyledTh>Open</StyledTh>
                <StyledTh>High</StyledTh>
                <StyledTh>Low</StyledTh>
                <StyledTh>Close</StyledTh>
              </tr>
            </thead>
            <tbody>
              <tr key={stock.date}>
                <StyledTd>{new Date(stock.date).toLocaleDateString()}</StyledTd>
                <StyledTd>{stock.open.toFixed(2)}</StyledTd>
                <StyledTd>{stock.high.toFixed(2)}</StyledTd>
                <StyledTd>{stock.low.toFixed(2)}</StyledTd>
                <StyledTd>{stock.close.toFixed(2)}</StyledTd>
              </tr>
            </tbody>
        </StyledTable>
    </div>
  );
}