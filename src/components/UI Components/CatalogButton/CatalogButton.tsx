import { FC, useState } from 'react';
import Button from '@mui/material/Button';
import styles from './CatalogButtonStyles.module.scss';
import { Products } from '../../../redux/interfaces/products';
import { translations } from '../../LanguageSwitcher/translation';
import { useLanguage } from '../../../hooks/useLanguage';

interface CatalogProps {
  product?: Products;
  onClick?: (product: Products) => void;
  onDeleteProduct?: (productId: number) => void;
}

export const CatalogButton: FC<CatalogProps> = ({
  product = null,
  onClick = () => {},
}) => {
  const [isActiveButton, setIsActiveButton] = useState<boolean>(() => {
    const savedColor = localStorage.getItem(
      `catalogButtonColor_${product?.phoneId}`
    );
    return savedColor ? savedColor === '#66CDAA' : false;
  });
  const { currentLanguage } = useLanguage();

  const handleAddToCart = () => {
    if (product) {
      const newColor = isActiveButton ? '#313237' : '#66CDAA';
      setIsActiveButton(!isActiveButton);
      localStorage.setItem(`catalogButtonColor_${product.phoneId}`, newColor);
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
