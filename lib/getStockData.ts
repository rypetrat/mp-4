"use server";
import { StockProps } from '@/types';

export default async function getStockData(symbol: string): Promise<StockProps[]> {
    try {
        const API_KEY = process.env.API_KEY;
        const API_URL = `https://api.marketstack.com/v2/eod?access_key=${API_KEY}&symbols=${symbol}&limit=30`;
        const response = await fetch(API_URL);
        const data = await response.json();
        
        if (!data || !data.data || !Array.isArray(data.data) || data.data.length === 0) {
            console.log(`No valid stock data found for symbol ${symbol}`);
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
        console.log(`Error fetching stock data for symbol ${symbol}:`, error);
        return [];
    }
}