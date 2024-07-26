/* eslint-disable react-refresh/only-export-components */
import { createContext, FC, useContext, useState } from 'react';

interface TotalContextProps {
  totalPrice: number;
  totalItemCount: number;
  addToTotal: (price: number) => void;
  removeFromTotal: (price: number) => void;
}

const TotalContext = createContext<TotalContextProps | undefined>(undefined);

export const TotalProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItemCount, setTotalItemCount] = useState(0);

  const addToTotal = (price: number) => {
    setTotalPrice(prevPrice => prevPrice + price);
    setTotalItemCount(prevCount => prevCount + 1);
  };

  const removeFromTotal = (price: number) => {
    setTotalPrice(prevPrice => prevPrice - price);
    setTotalItemCount(prevCount => prevCount - 1);
  };

  return (
    <TotalContext.Provider value={{ totalPrice, totalItemCount, addToTotal, removeFromTotal }}>
      {children}
    </TotalContext.Provider>
  );
};

export const useTotal = (): TotalContextProps => {
  const context = useContext(TotalContext);
  if (!context) {
    throw new Error('useTotal must be used within a TotalProvider');
  }
  return context;
};
