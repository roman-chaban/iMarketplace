import { FC, useState } from 'react';
import styles from '../../../components/CatalogItem/catalogItem.module.scss';
import { FavoriteBorder } from '@mui/icons-material';
import { Tablets } from '../../../interfaces/tablets';

interface FavoriteProps {
  product?: Tablets;
  onClick?: (product: Tablets) => void;
  onDeleteProduct?: (productId: string) => void;
  tabletId?: string;
}

export const TabletFavoriteButton: FC<FavoriteProps> = ({
  product = null,
  onClick = () => {},
  onDeleteProduct = () => {},
  tabletId = '',
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleToggleFavorite = () => {
    if (product) {
      setIsActive(!isActive);
      if (isActive) {
        onDeleteProduct(typeof product.id === 'string' ? product.id : tabletId);
      } else {
        onClick(product);
      }
    }
  };
  return (
    <button
      onClick={handleToggleFavorite}
      className={`${styles.favorite__button} ${isActive ? 'active' : ''}`}
      style={{
        background: isActive ? '#FF6F61' : '',
        border: isActive ? '1px solid #eee' : '',
      }}
    >
      <FavoriteBorder
        style={{ fontSize: 30, color: isActive ? '#fff' : '' }}
        className={styles.favorite__icon}
      />
    </button>
  );
};
