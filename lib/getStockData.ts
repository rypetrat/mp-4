"use server";
import { StockProps } from '@/types';

export default async function getStockData(symbol: string): Promise<StockProps[]> {
    try {
        const API_KEY = process.env.API_KEY;
        
        if (!API_KEY) {
            console.error("API key is not configured");
            return [];
        }

        const API_URL = `https://api.marketstack.com/v2/eod?access_key=${API_KEY}&symbols=${symbol}&limit=30`;
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            console.error(`Failed to fetch stock data for symbol ${symbol}:`, response.statusText);
            return [];
        }

        const data = await response.json();
        
        if (!data || !data.data || !Array.isArray(data.data) || data.data.length === 0) {
            console.error(`No valid stock data found for symbol ${symbol}`);
            return [];
        }

        const stockData: StockProps[] = data.data.map((entry: any) => ({
            symbol: entry.symbol || symbol,
            high: Number(entry.high) || 0,
            low: Number(entry.low) || 0,
            open: Number(entry.open) || 0,
            close: Number(entry.close) || 0,
            date: entry.date || new Date().toISOString(),
        }));

        return stockData;
        
    } catch (error) {
        console.error(`Error fetching stock data for symbol ${symbol}:`, error);
        return [];
    }
}