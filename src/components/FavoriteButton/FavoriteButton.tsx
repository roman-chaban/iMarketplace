import { FC, useState } from 'react';
import cl from '../CatalogItem/catalogItem.module.scss';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import {
  addBusketGoods,
  removeBusketGoods,
} from '../../redux/slices/busketSlice';
import { FavoriteBorder } from '@mui/icons-material';

export const FavoriteButton: FC = () => {
  const dispatch = useAppDispatch();
  const [background, setBackground] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const [isAddedGoods, setIsAddedGoods] = useState<boolean>(false);

  const handleNewGoodsFromFavorites = () => {
    if (isAddedGoods) {
      dispatch(removeBusketGoods(1));
      setBackground('');
      setColor('');
    } else {
      dispatch(addBusketGoods(1));
      setBackground('rgba(255, 0, 0, 0.7)');
      setColor('#ffff');
    }
    setIsAddedGoods(!isAddedGoods);
  };

  return (
    <button
      style={{ background }}
      className={cl.favorite__button}
      onClick={handleNewGoodsFromFavorites}
    >
      <FavoriteBorder
        style={{ fontSize: 30, color: color }}
        className={cl.favorite__icon}
      />
    </button>
  );
};
