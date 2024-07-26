import { FC, useState } from 'react';
import { Accessories } from '../../interfaces/accessories';
import styles from '../ProductCard/ProductCard.module.scss';
import { useLanguage } from '../../hooks/useLanguage';
import { useAppDispatch } from '../../hooks/reduxHooks/useAppDispatch';
import { deleteAccessoriesFromCart } from '../../redux/slices/cartSlice';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { translations } from '../../components/LanguageSwitcher/translation';
import { useTotal } from '../TotalContext/TotalContext';

interface AccessoryCardProps {
  accessory: Accessories;
}

export const AccessoryCard: FC<AccessoryCardProps> = ({ accessory }) => {
  const { currentLanguage } = useLanguage();
  const dispatch = useAppDispatch();
  const [isRemoving, setIsRemoving] = useState(false);
  const [productItemCounter, setProductCounter] = useState<number>(1);
  const { addToTotal, removeFromTotal } = useTotal();

  const accessoryPrice = typeof accessory.priceRegular === 'string'
    ? parseFloat(accessory.priceRegular)
    : accessory.priceRegular;

  const handleDeleteGoods = () => {
    setIsRemoving(true);
    dispatch(deleteAccessoriesFromCart(accessory.id));
  };

  const handleTransitionEnd = () => {
    setIsRemoving(false);
  };

  const handleAddProduct = () => {
    setProductCounter(prevCount => prevCount + 1);
    addToTotal(accessoryPrice);
  };

  const handleRemoveProduct = () => {
    setProductCounter(prevCount => {
      if (prevCount > 0) {
        removeFromTotal(accessoryPrice);
        return prevCount - 1;
      }
      return prevCount;
    });
  };

  const renderProduct = () => (
    <div className={styles.productCard__container}>
      <div
        className={`${styles.productCard} ${isRemoving ? styles.removing : ''}`}
        onTransitionEnd={handleTransitionEnd}
      >
        <div className={styles.productCard__header}>
          <button
            title="Delete product"
            className={styles.productCard__deleteButton}
            onClick={handleDeleteGoods}
          >
            <HighlightOffIcon fontSize="large" style={{ color: 'red' }} />
          </button>
          <img
            src={accessory.images[0]}
            alt={accessory.name}
            className={styles.productCard__image}
          />
        </div>
        <h4 className={styles.productCard__title}>{accessory.name}</h4>
        <div className={styles.counterPhone__block}>
          <button className={styles.plus} onClick={handleAddProduct}>
            <AddCircleIcon style={{ color: '#65C466' }} fontSize="large" />
          </button>
          <button
            className={styles.minus}
            disabled={productItemCounter < 1}
            style={{
              opacity: productItemCounter < 1 ? '0.5' : '1',
              cursor: productItemCounter > 0 ? 'pointer' : 'not-allowed',
            }}
            onClick={handleRemoveProduct}
          >
            <RemoveCircleIcon
              style={{ color: 'rgba(199, 53, 8, 0.8352941176)' }}
              fontSize="large"
            />
          </button>
        </div>
        <h6 className={styles.productItems__title}>
          {translations[currentLanguage].readyTitle} {productItemCounter}
        </h6>
      </div>
    </div>
  );

  return renderProduct();
};
