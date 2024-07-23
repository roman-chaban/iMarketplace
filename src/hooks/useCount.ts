import { useState, useCallback } from 'react';

interface CounterProps {
  productPrice: number;
  onAddProduct: () => void;
  onDeleteProduct: () => void;
}

export const useCount = (productPrice: number): CounterProps => {
  const [itemCount, setItemCount] = useState<number>(0);

  const onAddProduct = useCallback(() => {
    setItemCount((prevCount) => prevCount + 1);
  }, []);

  const onDeleteProduct = useCallback(() => {
    if (itemCount < 1) return;
    setItemCount((prevCount) => prevCount - 1);
  }, [itemCount]);

  return {
    productPrice: productPrice * itemCount,
    onAddProduct,
    onDeleteProduct,
  };
};
