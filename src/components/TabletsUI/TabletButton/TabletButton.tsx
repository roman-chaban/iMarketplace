import { FC, useState } from 'react';
import Button from '@mui/material/Button';
import styles from '../../UI Components/CatalogButton/catalog-button.module.scss';
import { Tablets } from '../../../interfaces/tablets';

interface CatalogProps {
  product?: Tablets;
  onClick?: (product: Tablets) => void;
}

export const TabletButton: FC<CatalogProps> = ({
  product = null,
  onClick = () => {},
}) => {
  const [isActiveButton, setIsActiveButton] = useState<boolean>(false);

  const handleAddToCart = () => {
    if (product) {
      if (!isActiveButton) {
        setIsActiveButton(!isActiveButton);
      }
      onClick(product);
    }
  };

  return (
    <Button
      style={{ backgroundColor: isActiveButton ? '#66CDAA' : '#313237' }}
      onClick={handleAddToCart}
      className={styles.catalog__buttonItem}
    >
      Add to cart
    </Button>
  );
};
