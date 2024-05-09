import { FC, useState } from 'react';
import Button from '@mui/material/Button';
import styles from './catalog-button.module.scss';
import { Products } from '../../../redux/interfaces/products';
import { translations } from '../../LanguageSwitcher/translation';
import { useLanguage } from '../../../hooks/useLanguage';

interface CatalogProps {
  product?: Products;
  onClick?: (product: Products) => void;
}

export const CatalogButton: FC<CatalogProps> = ({
  product = null,
  onClick = () => {},
}) => {
  const [isActiveButton, setIsActiveButton] = useState<boolean>(false);
  const { currentLanguage } = useLanguage();
  const handleAddToCart = () => {
    if (product) {
      if (!isActiveButton) {
        setIsActiveButton(true);
      }
      onClick(product);
    }
  };

  return (
    <Button
      onClick={handleAddToCart}
      className={styles.catalog__buttonItem}
      style={{ backgroundColor: isActiveButton ? '#66CDAA' : '#313237' }}
    >
      {isActiveButton
        ? translations[currentLanguage].cartState.addedCart
        : translations[currentLanguage].cartState.addCart}
    </Button>
  );
};
