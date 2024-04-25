import { FC, useState } from 'react';
import cl from '../CatalogItem/catalogItem.module.scss';
import { FavoriteBorder } from '@mui/icons-material';
import { Products } from '../../redux/interfaces/products';

interface FavoriteProps {
  product: Products;
  onClick: (product: Products) => void;
}

export const FavoriteButton: FC<FavoriteProps> = ({ product, onClick }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleAddToFavorites = () => {
    if (product) {
      setIsActive(!isActive);
      onClick(product);
    }
  };

  return (
    <button
      onClick={handleAddToFavorites}
      className={`${cl.favorite__button} ${isActive ? 'active' : ''}`}
      style={{
        background: isActive ? '#FF2400' : '',
      }}
    >
      <FavoriteBorder
        style={{ fontSize: 30, color: isActive ? '#fff' : '' }}
        className={cl.favorite__icon}
      />
    </button>
  );
};
