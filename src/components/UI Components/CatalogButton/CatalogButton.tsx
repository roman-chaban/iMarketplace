import { FC, useState } from 'react';
import Button from '@mui/material/Button';
import cl from './catalog-button.module.scss';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import {
  addFromCart,
  removerFromCart,
} from '../../../redux/slices/favoritesSlice';

export const CatalogButton: FC = () => {
  const dispatch = useAppDispatch();
  const [background, setBackground] = useState<string>('');
  const [isAddedGoods, setIsAddedGoods] = useState<boolean>(false);

  const handleAddNewGoods = () => {
    if (isAddedGoods) {
      dispatch(removerFromCart(1));
      setBackground('');
    } else {
      dispatch(addFromCart(1));
      setBackground('red');
    }
    setIsAddedGoods(!isAddedGoods);
  };

  return (
    <Button
      style={{ backgroundColor: background }}
      className={cl.catalog__buttonItem}
      onClick={handleAddNewGoods}
    >
      Add to cart
    </Button>
  );
};
