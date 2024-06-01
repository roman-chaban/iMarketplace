import { FC, useState } from 'react';
import styles from '../../CatalogItem/CatalogItemStyles.module.scss';
import { FavoriteBorder } from '@mui/icons-material';
import { Products } from '../../../redux/interfaces/products';

interface FavoriteProps {
  product?: Products;
  onClick?: (product: Products) => void;
  onDeleteProduct?: (productId: number) => void;
}

export const FavoriteButton: FC<FavoriteProps> = ({
  product = null,
  onClick = () => {},
  onDeleteProduct = () => {},
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleToggleFavorite = () => {
    if (product) {
      setIsActive(!isActive);
      if (isActive) {
        onDeleteProduct(product?.phoneId !== undefined ? product.phoneId : 0);
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
