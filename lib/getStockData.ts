"use server";
import { StockProps } from '@/types';

export default async function getStockData(symbol: string): Promise<StockProps[]> {
    const API_KEY = process.env.API_KEY;
    const API_URL = `https://api.marketstack.com/v2/eod?access_key=${API_KEY}&symbols=${symbol}&limit=30`;
    const response = await fetch(API_URL);
    
    if (!response.ok) {
        console.log("Failed to fetch stock data", response);
    }
    const data = await response.json();
    if (!data || !data.data) {
        console.log("Invalid response data:", data);
        return [];
    }
    
    const stockData: StockProps[] = data.data.map((entry: any) => ({
        symbol: entry.symbol,
        high: entry.high,
        low: entry.low,
        open: entry.open,
        close: entry.close,
        date: entry.date,
      }));
    
    return stockData;
}