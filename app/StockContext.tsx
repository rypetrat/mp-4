import { createContext, useContext, useState, ReactNode } from "react";
import { StockProps } from "@/types";

type StockContextType = {
  stockData: StockProps[];
  setStockData: (data: StockProps[]) => void;
};

const StockContext = createContext<StockContextType | undefined>(undefined);

export const StockProvider = ({ children }: { children: ReactNode }) => {
  const [stockData, setStockData] = useState<StockProps[]>([]);

  return (
    <StockContext.Provider value={{ stockData, setStockData }}>
      {children}
    </StockContext.Provider>
  );
};

export const useStock = (): StockContextType => {
  const context = useContext(StockContext);
  if (!context) {
    throw new Error("useStock must be used within a StockProvider");
  }
  return context;
};