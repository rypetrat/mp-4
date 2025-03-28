import { StockProps } from "@/types";

export default function StockPreview({stock}: {stock: StockProps}) {
  return (
    <>
        <table>
            <thead>
            <tr>
                <th>Date</th>
                <th>Open</th>
                <th>High</th>
                <th>Low</th>
                <th>Close</th>
            </tr>
            </thead>
            <tbody>
            <tr key={stock.date}>
                <td>{new Date(stock.date).toLocaleDateString()}</td>
                <td>{stock.open.toFixed(2)}</td>
                <td>{stock.high.toFixed(2)}</td>
                <td>{stock.low.toFixed(2)}</td>
                <td>{stock.close.toFixed(2)}</td>
            </tr>
            </tbody>
        </table>
    </>
  );
}