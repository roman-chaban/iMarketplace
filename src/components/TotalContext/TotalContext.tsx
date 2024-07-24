import React, { createContext, useContext, useState, ReactNode } from "react";

interface TotalContextProps {
  totalItemCount: number;
  totalPrice: number;
  addToTotal: (price: number) => void;
  removeFromTotal: (price: number) => void;
}

const TotalContext = createContext<TotalContextProps | undefined>(undefined);

export const TotalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToTotal = (price: number) => {
    setTotalItemCount((prevCount) => prevCount + 1);
    setTotalPrice((prevPrice) => prevPrice + price);
  };

  const removeFromTotal = (price: number) => {
    setTotalItemCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    setTotalPrice((prevPrice) => (prevPrice > price ? prevPrice - price : 0));
  };

  return (
    <TotalContext.Provider
      value={{ totalItemCount, totalPrice, addToTotal, removeFromTotal }}
    >
      {children}
    </TotalContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTotal = () => {
  const context = useContext(TotalContext);
  if (!context) {
    throw new Error("useTotal must be used within a TotalProvider");
  }
  return context;
};
