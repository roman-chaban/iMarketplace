import { FC, useState } from 'react';
import { useAppDispatch } from '../../../hooks/reduxHooks/useAppDispatch';
import { deleteFromCart } from '../../../redux/slices/cartSlice';
import styles from './phoneCart.module.scss';
import { ICatalogItemProps } from '../../../interfaces/catalog-item';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useCount } from '../../../hooks/useCount';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useLanguage } from '../../../hooks/useLanguage';
import { translations } from '../../LanguageSwitcher/translation';

export const PhoneCart: FC<ICatalogItemProps> = ({
  imgUrl = '',
  title = '',
  price = '',
  phoneId,
}) => {
  const dispatch = useAppDispatch();
  const { currentLanguage } = useLanguage();
  const [isRemoving, setIsRemoving] = useState(false);
  const [productItemCounter, setProductCounter] = useState<number>(0);

  const productPrice = isNaN(parseFloat(price)) ? 0 : parseFloat(price);

  const {
    productPrice: totalPrice,
    onAddProduct,
    onDeleteProduct,
  } = useCount(productPrice);

  const handleDeleteGoods = (productId: number) => {
    setIsRemoving(true);
    dispatch(deleteFromCart(productId));
  };

  const handleTransitionEnd = () => {
    setIsRemoving(false);
  };

  return (
    <div
      className={`${styles.favorite__cardBlock} ${
        isRemoving ? styles.removing : ''
      }`}
      onTransitionEnd={handleTransitionEnd}
    >
      <div className={styles.favorite__card}>
        <button
          className={styles.favorite__cardDelete}
          onClick={() => phoneId !== undefined && handleDeleteGoods(phoneId)}
        >
          <HighlightOffIcon fontSize='large' />
        </button>
        <img
          src={imgUrl}
          alt='iphone banner'
          className={styles.favorite__cardPicture}
        />
        <div>
          <h3 className={styles.favorite__cardTitle}>
            {title.replaceAll('-', ' ')}
          </h3>
        </div>
        <span className={styles.favorite__cardPrice}>
          {totalPrice} {'$'}
        </span>
        <div className={styles.counterPhone__block}>
          <button
            className={styles.plus}
            onClick={() => {
              onAddProduct();
              setProductCounter((prevCounter) => prevCounter + 1);
            }}
          >
            <AddCircleIcon style={{ color: '#65C466' }} fontSize='large' />
          </button>
          <button
            className={styles.minus}
            disabled={totalPrice < 1 ? true : false}
            onClick={() => {
              onDeleteProduct();
              setProductCounter((prevCounter) => prevCounter - 1);
            }}
          >
            <RemoveCircleIcon style={{ color: 'rgba(199, 53, 8, 0.8352941176)' }} fontSize='large' />
          </button>
        </div>
        <h6 className={styles.productItems__title}>
          {translations[currentLanguage].readyTitle} {productItemCounter}
        </h6>
      </div>
    </div>
  );
};
